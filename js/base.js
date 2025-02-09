// -----Base Functions-----
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let split = el.split('=');
      cookie[split[0].trim()] = split.slice(1).join("=");
    })
    return cookie[name];
}

// -----Dark Mode-----
function switchViaCheckbox(checkbox) {
    let mode = ''
    if (checkbox.checked) {
        mode = 'on'
    }
    else {
        mode = 'off'
    }
    switchTheme(mode)
}

function switchTheme(mode) {
    const html = document.querySelector('html')
    const switchElement = document.getElementById('toggleDarkmode')
    if (mode == 'on') {
        html.classList.remove('light')
        html.classList.add('dark')
        switchElement.setAttribute('checked', '')
        document.cookie = 'darkMode=on'
    }
    else {
        html.classList.remove('dark')
        html.classList.add('light')
        document.cookie = 'darkMode=off'
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (getCookie('darkMode')) { switchTheme(decodeURIComponent(getCookie('darkMode'))) }
    else ( console.log('No Cookie') )
});

// -----Navigation-----
let isOpen = false
function toggleNavigation() {
    const nav = document.getElementById('navigation')
    const page = document.getElementById('background')
    if (isOpen) {
        page.style.transform = ''
        isOpen = false
        nav.classList.add('-z-20')
    }
    else {
        page.style.transform = 'scale(0.8) translateX(-40%)'
        isOpen = true
        setTimeout(() => {
            nav.classList.remove('-z-20')
        }, 500);
    }
}