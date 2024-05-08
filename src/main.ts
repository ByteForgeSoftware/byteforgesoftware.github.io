import './style.scss';

const canvas: HTMLCanvasElement = document.getElementById('matrixCanvas') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

let fontSize: number = 16;
let columns: number;
const characters: string[] = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+");
let drops: number[];

function setupCanvas(): void {
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight;
  fontSize = Math.floor(canvas.width / 100);  // Adjust font size based on width
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }).fill(0) as number[];
}

function draw(): void {
  context.fillStyle = 'rgba(3, 3, 3, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0F0'; // Green text for the falling characters
  context.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text: string = characters[Math.floor(Math.random() * characters.length)];
    context.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    } else {
      drops[i]++;
    }
  }
}

function initTerminalEffect(): void {
  const terminal: HTMLElement = document.getElementById('terminal')!;
  const text: string = "ByteForgeSoftware";
  const typingDelay: number = 75;
  let index: number = 0;
  const data = document.getElementById('data');
  function typeText(): void {
    if (index < text.length) {
      terminal.textContent += text[index++];
      setTimeout(typeText, typingDelay);
    } else {
      if (data && data.style.display === 'none') {
        setTimeout(() => {
          data.style.display = 'table';
          const currentYear = document.getElementById('currentYear');
          if(currentYear){
            currentYear.innerHTML = new Date().getFullYear().toString();
          }
        }, 250)
      }
      terminal.innerHTML += '<span class="blink">_</span>';
    }
  }

  setTimeout(typeText, typingDelay);
}

document.addEventListener('DOMContentLoaded', () => {
  initTerminalEffect();
  setupCanvas();
  setInterval(draw, 25);
});

window.addEventListener('resize', setupCanvas);
