import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app');
if(app){
  const dateFooter = app.querySelector('#footerdate');
  const today = new Date();
  if(dateFooter){
    dateFooter.innerHTML = today.getFullYear().toString();
  }
}
