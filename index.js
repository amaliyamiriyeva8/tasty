const tasty1= document.querySelector('.cart');
fetch('http://localhost:3000/tasty')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        tasty1.innerHTML+=`
        <div class="cart1">
        <div class="image"><img class="image"
                src="${element.image}" alt=""></div>
        <div class="text2">
            <h2>${element.name}</h2>
            <p class="text3">${element.category}</p>
        </div>
        <div class="qiymet">
            <p class="text4">${element.price}</p>
        </div>

    </div>
        
        `
    });
})