const colors = ['yellow', 'tomato', '#5485d0', '#64f38'];
let index = 0;
const text = document.getElementById('text');

setInterval(() => {
    
    text.style.color = colors[index];
    index = (index + 1) % colors.length;
},1000);