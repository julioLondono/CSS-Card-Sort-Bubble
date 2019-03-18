// window.onLoad = () => {
 
document.querySelector(".drawButton").addEventListener("click", () => {valueInput()}, false);
function valueInput() {
  let inputValue = document.querySelector("#numberOfCards").value;
  // console.log("inputValue=" + inputValue);
  //verify if the input is valid
    let textInput = isNaN(inputValue);
      // console.log("is Not a Number= " + textInput);
      
    let rango = false;
    if(inputValue>1 && inputValue<14) {
      rango = true;
    }
    // console.log("rango=" + rango);
    
      let validEntry = false;
      
      if (rango===false || textInput===true) {
        alert("Please enter a number between 2 and 13");
        window.location.reload();  
        validEntry = false;
        return;
      } else {
      
        validEntry =true;
      // console.log("valid entry:" + validEntry );
      }
    
      if ( validEntry === true) {
      // console.log("numero a pasar por la funcion=" + inputValue);
      // document.getElementById("result").innerHTML = inputValue;
      return inputValue;
      }
  } /// return inputValue verifica si el valor entrado es correcto y entrega el valor entrado

let generateRandomCard = (i) => {
    
  let randSute = Math.floor(Math.random() * 4) + 1;
  let randValue = Math.floor(Math.random() * 13) + 1;
  console.log("randSute inside function generateRandomSute=" + randSute);
  console.log("randValue inside function generateRandomSute=" + randValue);
  
    let x=null;
    switch(randSute) {
    case 1:
        x = "&#x2660"; /// spades hex &#x2660
        break;
    case 2:
        x = "&#x2663"; ///  clubs hex &#x2663
        break;
    case 3:
        x = "&#x2665";  ///  hearts hex &#x2665
        break;
    case 4:
        x = "&#x2666";  ///  diamonds hex &#x2666
        break;
    }
    console.log ("x-Switch=" + x);
    let y = null;
    switch(randValue) {
    case 1:
        y = "A";
        break;
    case 11:
        y = "J";
        break;
    case 12:
        y = "Q";
        break;
    case 13:
        y = "K";
        break;
    default:
        y = randValue;
    }
    console.log ("y-Switch=" + y);
// create the following HTML elements in the DOM inside Container
// <div class="card">
//       <p class="nw"> x </p>
//       <p class="value"> y </p>
//       <p class="se"> x </p>
// </div>

    var card = document.createElement("div");                       // Create a <div> node
    card.className = "card";                                        // Assign a Class to the element
    var nw = document.createElement("p");                          // Create an element
    nw.className = "nw";
    var face = document.createElement("p");                        // reate an element
    face.className = "value";   
    var se = document.createElement("p");                          // reate an element
    se.className = "se";
    card.appendChild(nw);                                           // Append the text to <div>
    card.appendChild(face);                                         // Append the text to <div>
    card.appendChild(se);                                           // Append the text to <div>
    document.querySelector(".container").appendChild(card);         // Append <div> to <div> with id="container"
    let innerNw=document.querySelectorAll(".nw");
    innerNw[i].innerHTML = x;
    let innerValue=document.querySelectorAll(".value");
    innerValue[i].innerHTML = y;
    let innerSe=document.querySelectorAll(".se");
    innerSe[i].innerHTML = x;

    if(x==="&#x2665" || x==="&#x2666") {
        innerNw[i].style.color = "red";
        innerSe[i].style.color = "red";
    }
}; ///cierre de funcion generateRandomCards

 //////// Esta funcion lee la cantidad de cartas y crea los divs en el dom con valores aleatorios///////////////////////////////////////
document.querySelector(".drawButton").addEventListener("click", () => {drawCardsFunction()}, false); 

let drawCardsFunction = () => {
        // clear the DOM if a card is already there
    if(document.querySelector(".card"))
    {
    // get elements
    var child = document.querySelector(".card");
    var parent = document.querySelector(".container");
    // Delete child
    parent.removeChild(child);
    }
  
//create the divs based on the amount of cards entered
  let inputtxt = document.querySelector("#numberOfCards").value;
    // console.log("inputtxt=" + inputtxt);

   for (var i=0; i<inputtxt; i++) { ////////////////////////////////////////////////////////////////////////crea los <divs> en HTML 
      generateRandomCard(i);
    }

}; ///cierre de funcion drawCardsFunction  





// };/// cierre de funcion onLoad