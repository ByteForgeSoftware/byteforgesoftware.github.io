import './styles/theme.scss'
import 'bootstrap';
import {generateCarouselClients} from './carousel';

const app = document.querySelector<HTMLDivElement>('#app');
if(app){
  const dateFooter = app.querySelector('#footerdate');
  const today = new Date();
  if(dateFooter){
    dateFooter.innerHTML = today.getFullYear().toString();
  }
  generateCarouselClients();
}
