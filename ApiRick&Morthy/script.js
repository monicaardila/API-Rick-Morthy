const cards= document.querySelector(".container")
const selector=document.querySelector("#selector")
selector.addEventListener("change",cambia)

document.body.onload=() => 
{todosPersonajes("https://rickandmortyapi.com/api/character",false)} 

function cambia()
{
  let valor=selector.value
  if(valor=="all")
  {
    todosPersonajes("https://rickandmortyapi.com/api/character",true)
  }
  else if(valor>0)
  {
  fetch(`https://rickandmortyapi.com/api/character/${valor}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    cards.innerHTML=`
         <div class="card">
        <h2 id="name">${data.name}</h2>
        <img id="imagen"src="${data.image}" alt="">
        <p id="status" >${data.status}</p>
        </div>`
  })
  }
  else
  {
    todosPersonajes("https://rickandmortyapi.com/api/character",false)
  }
}
function todosPersonajes(url,characters)
{
  fetch(url)
  .then(characters => characters.json())
  .then(data => {
    console.log(data.results)
    const arreglo=data.results
    arreglo.map((element) =>
    {
      
      if(characters==false)
      {
        console.log("enter")
        selector.innerHTML+=`
        <option value="${element.id}">${element.name}</option>`
      }
      else
      {
        cards.innerHTML+=`
         <div class="card">
        <h2 id="name">${element.name}</h2>
        <img id="imagen"src="${element.image}" alt="">
        <p id="status" >${element.status}</p>
        </div>`
      }
    }) 

  })
}