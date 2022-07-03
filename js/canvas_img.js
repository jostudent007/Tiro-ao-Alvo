let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let fundojogo = new Image();
fundojogo.src = "fundojogo.jpg"
fundojogo.addEventListener('load', () => {
    //imagem, xinirecorte, yinirecorte, Lrecorte, Arecorte, Limagem, Aimagem
    ctx.drawImage(fundojogo, 0, 0, 800, 600)
})