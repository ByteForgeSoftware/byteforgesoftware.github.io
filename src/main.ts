import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app');
if(app) {
  const template = `
  <header class="">
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
    </nav>
  </header>
    <main class="container">
      <div class="wrapper text-white">
      Forging the Future of
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
      <p class="text-start text-white col-6"><small> code with &#x2665; @ ${new Date().getFullYear()}  <a href="/">ByteForgeSoftware</a></small></p>
      <ul class="social-media-list col-6 text-end">
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
    </div>
  </footer>`;
  app.innerHTML = template;
}