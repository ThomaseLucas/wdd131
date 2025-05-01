const option_menu = document.querySelector('select');
const logo = document.querySelector('img');

option_menu.addEventListener('change', function(){ 
    const selected_option = option_menu.value;
    changeColor(selected_option);
})

function changeColor(selected_option) {
    const body = document.querySelector('body');
    
    if (selected_option == 'dark'){
        body.className = 'dark';
        logo.setAttribute('src', 'images/darklogo.png');
    }
    else {
        body.className = 'light';
        logo.setAttribute('src', 'images/byui-logo_blue.webp');
    }
    
}