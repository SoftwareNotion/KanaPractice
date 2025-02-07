import { createWorker } from 'tesseract.js';

const canvas = document.getElementById('drawingCanvas');
// const canvasImage = canvas.toDataURL('image/png');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
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

(async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(ret.data.text);
    await worker.terminate();
  })();