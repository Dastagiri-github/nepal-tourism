let btn = document.querySelector("#buttonGen");

let go = document.querySelector("#buttonTex")

btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let randomc = randomcolor();
    h1.innerHTML = `${randomc}`
    let div = document.querySelector("#colordiv");

    div.style.backgroundColor = `${randomc}`
     
    btn.style.borderColor = `${randomc}`
})

go.addEventListener("click",function(){

    let inp=document.querySelector("input");
    console.dir(inp)
    let color = inp.value;
    let div = document.querySelector("#colordiv")
    div.style.backgroundColor = `${color}`;

})

function randomcolor()
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
}