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
                projectImgs.forEach((img)=>{img.style = 'animation: filpCard 2s 1 alternate none; transform: translateX(0); opacity: 1;';})
            }, 2000);           
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

const translation = {
    en: {
        'projects': 'projects',
        'resume': 'resume',
        'hello': 'Hello !',
        'brief': 'Mazen Al-Madhage / Front-end Developer',
        'someProjects': 'some projects',
        'gamingWorld': "Gaming World is a simulation for website where you can find the latest news, updates, future events and releases about games. <br> <br>In this website, I wanted to demonstrate techniques like modern sliders, swap effects for mobile devices, timers and counters via using only javascript. <br> <br>Now it's not a multi page website. I would rather build it using React.js to guarantee a fast content downloading and less requests on the server. <br> <br>The website is fully responsive. FCP and LCP are less than 1 second.",
        'tools':'Tools:',
        'viewCode':'view code <i class="fa-brands fa-github"></i>',
        'openSite':'open site',
        'luckyShrub': 'This project was one of my assignments for the Meta Front-End Developer Professional Certification on coursera. The goal of the project was to use what I had learned in HTML and CSS through the course. <br><br>This website is a simulation for any possible small business website, which shows a brief about the owners, the services provided, projects, and a way to contact them. <br><br>The website is fully responsive. FCP and LCP are less than 1 second.',
        'contact': 'Connect with Me',
    },
    ru: {
        'projects': 'проекты',
        'resume': 'резюме',
        'hello': 'Здравствуйте !',
        'brief': 'Аль-Мадхаджи Мазен / Front-end разработчик',
        'someProjects': 'несколько проектов',
        'gamingWorld': 'Gaming World — это симулятор для веб-сайта, где вы можете найти последние новости, обновления, будущие события и выпуски об играх. <br> <br>На этом веб-сайте я хотел продемонстрировать такие методы, как современные слайдеры, эффекты подкачки для мобильных устройств, таймеры и счетчики, используя только javascript. <br> <br>Теперь это не многостраничный сайт. Я бы предпочел построить его с помощью React.js, чтобы гарантировать быструю загрузку контента и меньше запросов на сервер. <br> <br>Веб-сайт полностью адаптивен. FCP и LCP менее 1 секунды.',
        'tools':'Инструменты:',
        'viewCode':'посмотреть код <i class="fa-brands fa-github"></i>',
        'openSite':'открыт сайт',
        'luckyShrub': 'Этот проект был одним из моих заданий для сертификации Meta Front-End Developer Professional на Coursera. Цель проекта состояла в том, чтобы использовать то, что я изучил в HTML и CSS в ходе курса. <br><br>Этот веб-сайт является симуляцией любого возможного веб-сайта малого бизнеса, который показывает краткую информацию о владельцах, предоставляемых услугах, проектах и способах связаться с ними. <br><br>Веб-сайт полностью адаптивен. FCP и LCP менее 1 секунды.',
        'contact': 'Свяжись со мной',
    }
}

const language = document.getElementById('language');
const content = document.querySelectorAll('[data-multilang]');

language.addEventListener('click', (e)=>{
    changeTranslation(e.target.lang);
})

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
        language.textContent = 'Ру';
        language.lang = 'ru';
        content.forEach((element)=>{
            element.innerHTML = translation.en[element.dataset.multilang];  
        });
    }
}


//  check when window on load

window.onload = ()=>{
    if (window.localStorage.getItem('dark_mode') === 'true') {
        changeMode(true);
    } else {
        changeMode(false);
    }

    changeTranslation(window.localStorage.getItem('language'));
}