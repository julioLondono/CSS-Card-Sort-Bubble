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
//   console.log("randSute inside function generateRandomSute=" + randSute);
//   console.log("randValue inside function generateRandomSute=" + randValue);
  
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
    // console.log ("x-Switch=" + x);
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
    // console.log ("y-Switch=" + y);
    
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
    var face = document.createElement("p");                        // Create an element
    face.className = "value";   
    var se = document.createElement("p");                          // Create an element
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

   for (var i=0; i<inputtxt; i++) { //////////////////////////////////////////////////////crea los <divs> en HTML 
      generateRandomCard(i);
    }

}; ///cierre de funcion drawCardsFunction  

/// read the inner value of each div and create an array to sort using bubble.
document.querySelector(".sortButton").addEventListener("click", () => {renderBubbleIterations()}, false);

let sortArray =() => {
  
    let cardDivs =document.querySelector(".container").querySelectorAll(".card");
    
        let sutesArray = [];
        for( var i = 0; i < cardDivs.length; i++) {
        let sute= cardDivs[i].firstElementChild.innerHTML;
            sutesArray[i]= (sute);
        }
        // console.log("sutesArray=" + sutesArray);
        
        let valuesArray = [];
        for( var j = 0; j<cardDivs.length; j++) {
        let value= cardDivs[j].children[1].innerHTML;
            valuesArray[j]= (value);
        }
        // console.log("CardsArray=" + valuesArray);
        
      let valuesNumbers = [];
      let x = null; 
      let y = null;
      for(var m = 0; m < cardDivs.length; m++) {
            switch(valuesArray[m]) {
                case 'A':
                      y = "1";
                      break;
                case 'J':
                      y = "11";
                      break;
                case 'Q':
                      y = "12";
                      break;
                case 'K':
                      y = "13";
                      break;
                default:
                      y = valuesArray[m];
            }
            valuesNumbers[m]=y;
            // console.log ("y-SwitchNumber=" + y);
      } /// next m
                //  console.log ("ValuesArray=" + valuesArray);
                //  console.log("ValueNumbersArray="+valuesNumbers);
                 
    return [sutesArray, valuesNumbers];
                 
}; ///end of sort Array, creates the arrays [sutesArray, valuesArray] that will be sorted

/////////////////////////////////////////////// Sorting Algorithm ///////////////////////////////////////
console.log("aqui empieza el Bubble Algorithm");
let renderBubbleIterations = () => {

        let arrays = sortArray();
        
        let a=arrays[1];
        // console.log("a="+a);
        let b=arrays[0];
        // console.log("b="+b);
        
        for(var s =0; s<a.length;s++) {
            a[s]= parseInt(a[s]);
        }
        
        let newArrayValues=[];
        let newFacesValues=[];

        let firstValue= null;
        let secondValue = null;

        let firstFace= null;
        let secondFace = null;

        let n = a.length;
        let swaped = false;
        let iterationNumber = 0;

        for(var i=0; i<(n-1) ; i++) {
            swaped = false;
            for(var j =0; j<(n-1-i); j++) {
                if (a[j]>a[j+1]) {
                    firstValue= a[j];
                    secondValue= a[j+1];
                    firstFace= b[j];
                    secondFace= b[j+1];
                    
                    a[j]=secondValue;
                    a[j+1]=firstValue;
                    b[j]=secondFace;
                    b[j+1]=firstFace;
                    
                    swaped = true;
                    newArrayValues=a;           // se crea el array de la iteracion con los valores
                    newFacesValues=b;           // se crea el array de la iteracion con los sutes
                    
                    iterationNumber++;
                        
                        // console.log("Iteration Number="+ iterationNumber);
                        // console.log("newArrayValues="+newArrayValues);
                        // console.log("newFacesValues="+newFacesValues);
                    
                    // create the array div
                    var iterations = document.createElement("div");                              // Create a <div> node
                    iterations.className = "sortCardContainer iteration" + iterationNumber;     //asigna clases a cada div de las iteraciones
                    iterations.setAttribute("id", "iterationID"+iterationNumber);                             //assign an Id to each <div>
                    var iterationRender = document.createElement("p");                           // Create an element
                    iterationRender.className = "iterationRender";                               //Assign a class to the text element
                    iterations.appendChild(iterationRender);                                     // Append the text to <div>
                    iterationRender.innerHTML = "Iteration #: "+iterationNumber;                    //display the iteration number on each iteration
                    document.querySelector(".bubbleLog").appendChild(iterations);                // Append las iteraciones al div contenedor bubbleLog
                    
                    // let iterationDiv = document.querySelectorAll(".sortCardContainer");
                    // let divsLength = iterationDiv.length;
                    
                    //esto funciona:
                    newArrayValues.forEach(function(item, index) {                                       //for each item inside the Array
                        var sortCardDiv = document.createElement("div");                                 // Create a <div> node
                        sortCardDiv.className = "sortCard"; // sortCardDiv"+iterationNumber ;            //assign a class to each <div>
                        sortCardDiv.setAttribute("id", "sortCardDiv"+index);                             //assign an Id to each <div>
                        document.querySelector(".iteration"+iterationNumber).appendChild(sortCardDiv);   // Append los div de cada carta al div con class iteracion#
                    
                     }); // end of forEach()

                    for(var f=0;f<newArrayValues.length; f++) {
                        let sortCardContainer= document.getElementById("iterationID"+iterationNumber).childNodes[f+1];

                            let letter = null;
                                switch(newArrayValues[f]) {
                                case 1:
                                letter = "A";
                                break;
                                case 11:
                                letter = "J";
                                break;
                                case 12:
                                letter = "Q";
                                break;
                                case 13:
                                letter = "K";
                                break;
                                default:
                                letter = newArrayValues[f];
                            }

                            var nwSort = document.createElement("p");                                   // Create a <p> node                                                 
                            nwSort.className = "nwSort";
                            nwSort.innerHTML = newFacesValues[f];
                            sortCardContainer.appendChild(nwSort);                                      // Append <p> to <div> with id="iterationID#"  
                            
                            let nwSortInner= nwSort.innerHTML;
                            console.log(nwSortInner);
                            if(nwSortInner === ("♥" || "♦")) {nwSort.style.color = "red"; };
                            
                            var faceSort = document.createElement("p");                           
                            faceSort.className = "valueSort";
                            faceSort.innerHTML = letter;
                            sortCardContainer.appendChild(faceSort);
                            
                            var seSort = document.createElement("p");                           
                            seSort.className = "seSort";
                            seSort.innerHTML = newFacesValues[f];
                            sortCardContainer.appendChild(seSort);  
                            
                            let seSortInner= seSort.innerHTML;
                            console.log(seSortInner);
                            if(seSortInner === ("♥" || "♦")) {seSort.style.color = "red"; };
                            

                        }
                           
                    }
                        
                }
                 
           if (swaped === false){return}
        }





};/// end of renderBubbleIterations function
///////////////////////////////////////////////End of  Sorting Algoritm/////////////////////////////////////////

document.querySelector(".sortButton").addEventListener("click", () => {createButton()}, false);
function createButton() {
  var element = document.createElement("button");
  element.appendChild(document.createTextNode("Try Again"));
  var page = document.getElementById("btn");
  page.appendChild(element);
}

