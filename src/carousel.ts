import clients from './clients.json';

export const generateCarouselClients = () => {
    const carouselInner = document.getElementById('carouselInner');
    for(let i=0; i<clients.length;i++){
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item text-white text-center';
        if(i === 0 && carouselItem){
            carouselItem.classList.add('active');
        }
        const img = document.createElement('img');
        img.className = 'd-block img-fluid mx-auto pb-4';
        img.src = `./${clients[i].img}`;
        const name = document.createElement('p');
        name.className = 'pt-4 mt-4';
        name.innerHTML = clients[i].name;
        const description = document.createElement('p');
        description.innerHTML = clients[i].description;
        carouselItem.appendChild(img);
        carouselItem.appendChild(name);
        carouselItem.appendChild(description);
        if(carouselInner){
            carouselInner.appendChild(carouselItem);
        }
    } 
}