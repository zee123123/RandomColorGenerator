const btn_randomColor= document.querySelector('#btn_randomColor');
const span_colorName = document.querySelector('#randomColor');
btn_randomColor.addEventListener('click', ()=>{
    let color = generateRandomColor();
    document.body.style.backgroundColor= color;
    btn_randomColor.style.backgroundColor = color;
    span_colorName.innerText = color;
});

const generateRandomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}