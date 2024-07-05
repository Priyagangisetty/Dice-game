const roll =document.getElementById("roll");

roll.onclick = function(){
    const number = document.getElementById("number").value;
    const result = document.getElementById("output");
    const photo = document.getElementById("images");
    const values=[];
    const images = [];

    for(let i=0; i<number ; i++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="DICE ${value}">`);
    }

    result.textContent = `Dice:${values.join(`, `)}`;
    photo.innerHTML = images.join('');
}