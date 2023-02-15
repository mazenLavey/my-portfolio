// project cards animation
const projectCards = document.querySelectorAll('.project__card__info');
const projectImgs = document.querySelectorAll('.project__card__img');

let times = 0;

window.addEventListener('scroll', ()=>{
    let h = document.getElementById('projects').offsetTop / 2;
    if (window.scrollY >= h) {
        projectCards.forEach((card)=>{card.style = 'transform: translateX(0); opacity: 1;';})           
        projectImgs.forEach((img)=>{img.style = 'transform: translateX(0); opacity: 1;';})
        if (times === 0) {
            
            setTimeout(()=>{
                projectImgs.forEach((img)=>{img.style = 'animation: filpCard 2s 1 alternate none; transform: translateX(0); opacity: 1';})
            }, 2000);

            projectImgs.forEach((img)=>{
                img.style = 'transform: translateX(0); opacity: 1;';
                img.classList.add('event-disactive');
                setTimeout(()=>{
                    img.classList.remove('event-disactive');
                }, 4000)
            })           
            times++;
        }
    } else {
        projectCards.forEach((card)=>{card.style = 'transform: translateX(100vw);';})           
        projectImgs.forEach((img)=>{img.style = 'transform: translateX(-100vw);';}) 
    }

})

// dark mode
const darkMode =document.getElementById('dark_mode');

darkMode.addEventListener('click', ()=>{
    if(!darkMode.classList.contains('active')) {
        changeMode(true);
        window.localStorage.setItem('dark_mode', true);
    } else {
        changeMode(false);
        window.localStorage.setItem('dark_mode', false);
    }
})

function changeMode(pageStatus) {
    if (pageStatus) {
        darkMode.classList.add('active');
        darkMode.innerHTML = '<i class="fa-solid fa-sun mode-active"></i>';
        document.documentElement.style.setProperty('--main-color', '#111');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--elements-color', '#fff');
        document.documentElement.style.setProperty('--elements-font-color', '#111');
    } else {
        darkMode.classList.remove('active');
        darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.documentElement.style.setProperty('--main-color', '#fff');
        document.documentElement.style.setProperty('--font-color', '#111');
        document.documentElement.style.setProperty('--elements-color', '#111');
        document.documentElement.style.setProperty('--elements-font-color', '#fff');
    }
}

// Multi Language 

let translation;

fetch('translation.json').then(res=> res.json()).then(data => {
    translation = data;
    }).finally(()=>{
    language.addEventListener('click', (e)=>{
        changeTranslation(e.target.lang);
    })
});

const language = document.getElementById('language');
const content = document.querySelectorAll('[data-multilang]');

const changeTranslation = (choosedLang)=>{
    if (choosedLang === 'ru') {
        window.localStorage.setItem('language', 'ru');
        language.textContent = 'En';
        language.lang = 'en';
        content.forEach((element)=>{
            element.innerHTML = translation.ru[element.dataset.multilang];  
        });

    } else if (choosedLang === 'en') {
        window.localStorage.setItem('language', 'en');
        language.textContent = 'Рус';
        language.lang = 'ru';
        content.forEach((element)=>{
            element.innerHTML = translation.en[element.dataset.multilang];  
        });
    }
}


//  check when window on load

window.onload = ()=>{
    // check dark mode
    if (window.localStorage.getItem('dark_mode') === 'true') {
        changeMode(true);
    } else {
        changeMode(false);
    }

    // check locak language for first time 
    if (!window.localStorage.getItem('language')) {
        let locaolLang = navigator.language.includes('ru');
        locaolLang ? window.localStorage.setItem('language', 'ru'): null;
    }

    // check language on every page load
    changeTranslation(window.localStorage.getItem('language'));

}
