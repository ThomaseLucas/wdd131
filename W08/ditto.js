const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48,
isTransformed: false
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};

// const ditto_button = document.querySelector('#ditto-button');
const ditto_sprite = document.querySelector('#ditto')
const header_name = document.querySelector('#name');
const header_ability = document.querySelector('#ability')
const og_sprite = ditto.sprite

ditto_sprite.src = og_sprite;
// header_name.innerHTML = `${ditto.}`


ditto_sprite.addEventListener('click', () =>{



    if (ditto.isTransformed){
        ditto_sprite.src = og_sprite;
        ditto.isTransformed = false;
    }
    else{
        ditto.transform();
        ditto_sprite.src = ditto.sprite;
        ditto.isTransformed = true;
    }

})