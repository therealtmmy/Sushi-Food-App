const btn = document.getElementById("menu-btn")
const sushiBtn = document.getElementById("Sushi-btn")

btn.addEventListener("click", function(){
    sushiBtn.innerHTML += "<p>Work in Progress</p>"
})

fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(data => {
    return data.json(); 
}).then(completedata =>{
    console.log(completedata.categories);
    let data1 = "";
    completedata.categories.map((values)=>{
        data1 +=`  
        <div class="food"><img src="${values.strCategoryThumb}" alt="img"><figcaption>${values.strCategory}</figcaption></div>`
    });
    
   document.getElementById("sushi").innerHTML = data1
})