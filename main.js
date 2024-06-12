function getRandomItems(items, num) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

window.onload = function () {
    const games = document.querySelectorAll('.game-item');
    const randomGames = getRandomItems(Array.from(games), 8);

    randomGames.forEach(game => {
        game.style.display = 'block';
    });

    if (window.innerWidth < 500) {
        const text = document.getElementById('resize-text');
        let fontSize = parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'));
        baseFontSize = parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'));
        adjustFontSize('resize-text', baseWidth, fontSize)
    }
};

function adjustFontSize(containerId, baseWidth, baseFontSize) {
    let container = document.getElementById(containerId);
    if (!container) return;

    let scaleFactor = container.offsetWidth / baseWidth;
    let newFontSize = baseFontSize * scaleFactor;

    container.style.fontSize = `${newFontSize}px`;
}

let baseWidth = 500;
let baseFontSize = 0;

window.onresize = () => {
    if (window.innerWidth < 500) {
        adjustFontSize('resize-text', baseWidth, baseFontSize)
    }
};

let bxSliderInit = {};
$(document).ready(function () {
    // Scroll by click to buttons for promo START
    document.querySelector('.left').addEventListener('click', function() {
        document.querySelector('.promos-scroll-container').scrollLeft -= 300;
    })
    document.querySelector('.right').addEventListener('click', function() {
        document.querySelector('.promos-scroll-container').scrollLeft += 300;
    })
    // Scroll by click to buttons for promo END
});