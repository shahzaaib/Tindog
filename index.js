

//import Dog from './Dog.js'
import Dog from './Dog.js'
import dogsData from './data.js'
//import dogsdata from './data.js';
/*import Dog from './Dog.js'
import dogsData from './data.js'*/
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', nope)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
  
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    endDog()
}


function endDog(){
    document.getElementsByTagName('main').innerHTML = `<h2>NO MORE DOGS</h2>
                                                <p>😿🕯️</p>`
         //displayLike.style.display = "block"                                       
}
function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById("badge-img").innerHTML= `<img class="badge" src="images/badge-like.png">`
    setTimeout(() => {
        getNewDog()  
    }, 2500);
    //<img class="badge" src="images/badge-nope.png">`
}

function nope(){
    currentDog.setMatchStatus(false)
    document.getElementById("badge-img").innerHTML= `<img class="badge" src="images/badge-nope.png">`
    setTimeout(() => {
        getNewDog()  
    }, 2000);
}