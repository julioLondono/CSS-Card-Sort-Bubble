// window.onLoad = () => {
    
document.querySelector(".clickMe").addEventListener("click", () => {generateRandomCard()}, false);

//funcion generateRandomSute
let generateRandomNumbers =() => {

// clear the DOM if a card is already there
if(document.querySelector(".card"))
{
    // get elements
    var child = document.querySelector(".card");
    var parent = document.querySelector(".container");
    // Delete child
    parent.removeChild(child);
}
    
  let randSute = Math.floor(Math.random() * 4) + 1;
  let randValue = Math.floor(Math.random() * 13) + 1;
  console.log("randSute inside function generateRandomSute=" + randSute);
  console.log("randValue inside function generateRandomSute=" + randValue);
  return [randSute, randValue];
}; /// cierre de la funcion generateRandomNumbers
//funcion dealFunction
let generateRandomCard = () => {

    let randomNumbers = generateRandomNumbers();
    let Sute = randomNumbers[0];
    let Value = randomNumbers[1];
    
        // console.log("sute=" + Sute);
        // console.log("value=" + Value);

    let x=null;
    switch(Sute) {
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
    let y = null;
    switch(Value) {
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
        y = Value;
    }

// create the following HTML elements in the DOM inside Container
// <div class="card">
//       <p class="nw"> x </p>
//       <p class="value"> y </p>
//       <p class="se"> x </p>
//  </div>

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
    document.querySelector(".nw").innerHTML = x;
    document.querySelector(".value").innerHTML = y;
    document.querySelector(".se").innerHTML = x;

    if(x==="&#x2665" || x==="&#x2666") {
        document.querySelector(".nw").style.color = "red";
        document.querySelector(".se").style.color = "red";
    };
    

}; ///cierre de funcion generateRandomNumbers

// };/// cierre de funcion onLoad