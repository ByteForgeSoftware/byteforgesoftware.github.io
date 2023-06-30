import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './style.scss'
import { tsParticles } from "tsparticles-engine";

(async () => {
  //@ts-ignore
  await loadTrianglesPreset(tsParticles); // this is required only if you are not using the bundle script

  await tsParticles.load("tsparticles", {
    particles: {
      "number": {
        "value": 35,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }

    }
  });
})();

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  const template = `
  
  <header>
    <nav class="navbar navbar-expand-lg bg-transparent text-light">
      <div class="container-fluid">
        <a class="navbar-brand text-white d-inline-flex align-items-center" href="#">
        <img src="/logo.png" class="logo me-3"/>
        <span>ByteForgeSoftware</span>
        </a>
        <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0  text-light">
            <li class="nav-item">
              <a href="mailto:byte.forge.software@gmail.com" class="nav-link text-white  align-items-center d-flex">
              <i class="fa-regular fa-envelope me-1"></i>
              <span>byte.forge.software@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="container">
    <div class="wrapper text-white">
      <span>Forging the Future of </span>
      <div class="stack" style="--stacks: 3;">
        <span style="--index: 0;">Software</span>
        <span style="--index: 1;">Software</span>
        <span style="--index: 2;">Software</span>
      </div>
    <p class="text-end w-100">Excellence!</p>
    </div>
</main>
<footer class="container-fluid">
  <div class="row">
    <ul class="social-media-list col-12 text-center">
      <li class="text-white d-inline-flex  mx-2">
        <a href="#" class="nav-link text-white  align-items-center d-flex">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li class="text-white d-inline-flex mx-2">
        <a href="mailto:byte.forge.software@gmail.com" class="nav-link text-white  align-items-center d-flex">
          <i class="fa-regular fa-envelope me-1"></i>
        </a>
      </li>
      <li class="text-white d-inline-flex  mx-1">
        <a href="https://github.com/ByteForgeSoftware" class="nav-link text-white  align-items-center d-flex">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
    </ul>
    <p class="text-center text-white col-12"><small> code with &#x2665;  ${new Date().getFullYear()} @ <a href="/">ByteForgeSoftware</a></small></p>
  </div>
</footer>
`;
  app.innerHTML = template;
}