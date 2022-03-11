
let dog = function () {
  fetch('https://random.dog/woof.json')
  .then(response => response.json())
  .then(result => {
    console.log(result.url)
    document.querySelector(".mainImage").style = "display: block;"
    document.querySelector(".mainImage").src = result.url
  })
  // .then(document.querySelector(".mainImage").classList.add("enlarge"))
}

let fox = function () {
  fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(result => {
    console.log(result.image)
    document.querySelector(".mainImage").style = "display: block;"
    document.querySelector(".mainImage").src = result.image
  })
  // .then(document.querySelector(".mainImage").classList.add("enlarge"))
}

let zoo = function () {
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(result => {
      console.log(result.image_link)
      document.querySelector(".mainImage").style = "display: block;"
      document.querySelector(".mainImage").src = result.image_link
    })
}
  
      // console.log(result.image_link)
    //   var oImg = document.createElement("img");
    //   oImg.setAttribute('src', `${result}`);
    //   oImg.setAttribute('alt', 'na');
    //   oImg.classList.add("mainImage")
    //   console.log(oImg)
    //   circOne.appendChild(oImg);   
    //   // console.log(oImg.innerHTML)
// console.log(document.querySelector(".inner").innerHTML)    

let circOne = document.querySelector(".inner")
console.log(circOne)
circOne.addEventListener("click", dog)

let circTwo = document.querySelector(".outter")
circTwo.addEventListener("click", fox)

let circThree = document.querySelector(".outtest")
circThree.addEventListener("click", zoo)

let overall = document.body

let changeDark = function () {
  document.body.style =
    "background-image: url(https://img.freepik.com/free-vector/hand-drawn-distorted-groovy-background_23-2148850187.jpg?size=626&ext=jpg&ga=GA1.1.1483425922.1641859200)"
}

let changePurple = function () {
  document.body.style = `background-image: url(https://media.wired.com/photos/61dde9edf355cd4b7989ff3a/master/pass/Science_AUmicroscopii_eso1538c.jpg)`
  
}

let changePink = function () {
  document.body.style = `background-image: url(https://ak.picdn.net/shutterstock/videos/1035632612/thumb/12.jpg)`
}

let pink = document.querySelector(".pink")
pink.addEventListener("click", changePink)

let blue = document.querySelector(".blue")
blue.addEventListener("click", changePurple)


let purple = document.querySelector(".purple")
purple.addEventListener("click", changeDark)
  
let shrinkAgain = function () {
  document.querySelector(".mainImage").style = "display: none;"
}
document.body.addEventListener("click", shrinkAgain)


    

    
  

     







