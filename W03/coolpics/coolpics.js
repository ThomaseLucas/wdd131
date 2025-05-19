const button = document.querySelector('#menu-button');
const nav_links = document.querySelectorAll('nav a');

button.addEventListener('click', function() {

    if (window.innerWidth < 1000) {
        nav_links.forEach(function(nav) {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
        } else {    
            nav.style.display = 'none';
        }
    });
    
    }
    
});

window.addEventListener('resize', function(){
    if (window.innerWidth >= 1000) {
        nav_links.forEach(function (nav){
            nav.style.display = 'flex';
        });
    } else {
        nav_links.forEach(function (nav) {
            nav.style.display = 'none'; 
        });
    }
});

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#modal-viewer');
const modalImage = document.querySelector('#modal-image');
const close_button = document.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
    const clickedImage = event.target.closest('img');

    if (!clickedImage) return;
    
    const originalSrc = clickedImage.src;
    const baseName = originalSrc.split('-')[0];
    const fullImage = baseName + '-full.jpeg';

    modalImage.src = fullImage;
    modal.showModal();
})

close_button.addEventListener('click', () =>{
    console.log('This is working!');
    modal.close();
})

modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.close();
    }
})




