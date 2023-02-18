const containerEl  = document.querySelector('.container');


for(let i=0; i<50; i++) {
    const colorContainerEls = document.createElement('div');
    colorContainerEls.classList.add('color-container');
    containerEl.appendChild(colorContainerEls);
}

const colorContainerEls = document.querySelectorAll('.color-container');



function generateColor() {
    colorContainerEls.forEach((colorContainerEls) => {
        let randomColor = generateRandomColorCode();
        colorContainerEls.innerText = '#' + randomColor;
        colorContainerEls.style.background = '#' + randomColor;
    })
    
}
generateColor();

function generateRandomColorCode() {
    let chars = '1234567890abcdef';
    let charsLength = 6;
    let colorCode = '';
    for(let i=0; i<charsLength; i++) {
        let random = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(random, random+1);
        console.log(colorCode);
    }
    return colorCode
}

generateRandomColorCode()
