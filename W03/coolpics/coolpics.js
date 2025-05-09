const button = document.querySelector('button');
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