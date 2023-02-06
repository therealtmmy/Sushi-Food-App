let price = document.getElementById("price")

let subBtn = document.getElementById("sub")
let addBtn = document.getElementById("add")

let input = document.getElementById("inputEl")
let inputOne = document.getElementById("inputElOne")
let inputTwo = document.getElementById("inputElTwo")
let inputThree = document.getElementById("inputElThree")

let firstPrice = document.getElementById("priceOne")

let subFirstBtn = document.getElementById("subOne")
let addFirstBtn = document.getElementById("addOne")

let secondPrice = document.getElementById("priceTwo")

let subSecondBtn = document.getElementById("subTwo")
let addSecondBtn = document.getElementById("addTwo")

let thirdPrice = document.getElementById("priceThree")

let subThirdBtn = document.getElementById("subThree")
let addThirdBtn = document.getElementById("addThree")

let total = document.getElementById("total")

let count = 0
let priceDetail = 0
let priceDetailOne = 0

subBtn.addEventListener("click", () => {
    if (count < 2){
        return count = 1
     }
    count = count - 1
    input.textContent = count
    priceDetail -= 20
    price.textContent = priceDetail
})

addBtn.addEventListener("click", ()=> {
    count = count + 1
    input.textContent = count
    priceDetail += 20
    price.textContent = priceDetail
    })


    subFirstBtn.addEventListener("click", () => {
        if (count < 2){
            return count = 1
         }
        count = count - 1
        inputOne.textContent = count
        priceDetailOne -= 10
        priceOne.textContent = priceDetailOne
    })
    
    addFirstBtn.addEventListener("click", () => {
        count = count + 1
        inputOne.textContent = count
        priceDetailOne += 10
        priceOne.textContent = priceDetailOne
        })
