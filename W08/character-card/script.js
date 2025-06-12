const character = {
      name: "Vorthesz, the Embercoil Tyrant",
      class: "Huge Dragon",
      level: 16,
      health: 310,
      image: 'images/vorthesz.png',
      attacked() {
        if (this.health >= 0) {
          this.health -= 60;
        } else {
            alert('Character Died');
        }
        // location.reload();
      },
      levelUp() {
        this.level += 1;
        this.health += 60;
        // location.reload();
      }
    };

const img_container = document.querySelector('.image');
const name_container = document.querySelector('.name');
const class_container = document.querySelector('#class');
const level_container = document.querySelector('#level');
const health_container = document.querySelector('#health');

const attacked_button = document.querySelector('#attacked');
const levelup_button = document.querySelector('#levelup');

name_container.innerHTML = `${character.name}`;
img_container.src = character.image;

class_container.innerHTML = `${character.class}`;
level_container.innerHTML = `${character.level}`;
health_container.innerHTML = `${character.health}`;

attacked_button.addEventListener('click', ()=>{
    character.attacked();
    health_container.innerHTML = `${character.health}`;
    console.log(character.health);
})
levelup_button.addEventListener('click', ()=> {
    character.levelUp();
    health_container.innerHTML = `${character.health}`;
    level_container.innerHTML = `${character.level}`;
    console.log(character.level);
})
