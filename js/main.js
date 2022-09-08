// loading screen js start
function loading() {
    let loader = document.querySelector(".loading")
    loader.style.display = "none"
}

window.addEventListener("load", loading);

$(window).load(function() {
    $('html, body').css('overflowY', 'auto'); 
});
// loading screen js end
// mouse cursor js start
document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 15;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});
let mouseNormal = document.querySelector('.normal');
let mouseCircle = document.querySelector('.circle');
let elem = document.querySelector('.cursor-glow');
let body = document.querySelector('body');
mouseNormal.onclick = function(){
    elem.style.display = 'none';
    body.style.cursor = 'auto';
}
mouseCircle.onclick = function(){
    elem.style.display = 'block';
    // body.style.cursor = 'none';
}

// mouse cursor js end
// color panel js start
let colorPanel = document.querySelector('.color-panel');
let colorBtn = document.querySelector('.color-btn');
let colors = document.querySelectorAll('.color');
let colorize = document.getElementsByClassName('colorize');
let colorizeBorder = document.getElementsByClassName('colorize-border');
let colorizeLine = document.getElementsByClassName('colorize-line');
let colorizeLineLink = document.getElementsByClassName('colorize-line-link');
let menu = document.getElementById('menu');
let links = menu.getElementsByClassName('link');
colorBtn.onclick = function(){
    colorPanel.classList.toggle('color-panel-toggle')
}
    // custom color element js start
    let clr = '#66B95C';
    let currentColor = '#66B95C';
    
for (let i = 0; i < colors.length; i++) {
    colors[i].onclick = function (){
        currentColor = window.getComputedStyle(colors[i]).backgroundColor;
        clr = currentColor;
        for(let j = 0; j < colorize.length; j++){
            colorize[j].style.backgroundColor = currentColor;
        }
        for(let j = 0; j < colorizeBorder.length; j++){
            colorizeBorder[j].style.borderColor = currentColor;
        }
        for(let j = 0; j < colorizeLine.length; j++){
            colorizeLine[j].style.color = currentColor;
        }
        for(let j = 0; j < colorizeLineLink.length; j++){
            colorizeLineLink[j].style.color = currentColor;
        }
        elem.style.setProperty('--box-After',currentColor);
    }
}
// navbar js start
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("colorize-line-link");
        current[0].className = current[0].className.replace("colorize-line-link", "");
        this.className += " colorize-line-link";
        this.style.setProperty('--hover-color',clr);
    });
    links[i].addEventListener("mouseover", mouseOver);
    links[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
        links[i].style.color = clr;
    }
    function mouseOut(){
        // links[i].style.color = '#fff';
        if(links[i].classList[1] === "colorize-line-link"){
            for(let j = 0; j < links.length; j++){
                if(links[j] === links[i]){
                    links[j].style.color = clr;
                }else{
                    links[j].style.color = '#fff';
                }
            }
        }else{
            links[i].style.color = '#fff';
        }
    }     
}
// navbar js end
    // custom color element js end
// color panel js end