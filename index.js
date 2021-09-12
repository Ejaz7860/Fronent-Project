function imgSlider(a){
    document.querySelector('.starbucks').src = a;

}


function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeTextColor(c){
    const text = document.querySelector('.span');
    const btn = document.querySelector('.btn');
    text.style.color = c;
    btn.style.background=c;
}