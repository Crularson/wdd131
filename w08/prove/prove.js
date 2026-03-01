const character ={
    name: "Flirk of the Black Swamp",
    class: "Diplomat",
    level: 1,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
    attacked: function(){
        this.health -= 20;

        if(this.health <=0){
            this.health = 0;
            alert(`${this.name} has died.`)
        }

        renderCharacter();
    },
    levelUp: function(){
        this.level ++;
        this.health = 100;
        renderCharacter();
    }
}


const attack = document.querySelector("#attack")
const level = document.querySelector("#level")

attack.addEventListener("click",function(){
    character.attacked();
})
level.addEventListener("click",function(){
    character.levelUp();
})


function renderCharacter(){
    document.querySelector(".image").src = character.image;
    document.querySelector(".image").alt = `${character.name} Character portrait`;
    document.querySelector(".name").textContent = character.name;

    document.querySelector(".stats").innerHTML = `
    <p>Class: ${character.class}</p>
    <p>Level: ${character.level}</p>
    <p>Health: ${character.health}</p>
    `;
}
renderCharacter();