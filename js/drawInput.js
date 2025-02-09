const canvas = document.getElementById('drawingCanvas');
const canvasImage = canvas.toDataURL('image/png');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.fillStyle = '#9394A5';
ctx.strokeStyle = '#9394A5';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

async function recognizeText() {
    const worker = await Tesseract.createWorker('jpn');
    const ret = await worker.recognize(canvas.toDataURL('image/png'), { lang: 'jpn' });
    console.log(ret.data.text);
    userAnswer.innerText = userAnswer.innerHTML + ret.data.text
    await worker.terminate();
}