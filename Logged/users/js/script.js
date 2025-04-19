// Side Menu Toggle Script
let menu_img = document.querySelector(".menu");
let menu = document.querySelector(".closed");

menu_img.addEventListener("click", () => {
    if (menu_img.textContent == "Menu") {
        menu_img.textContent = "Close";
    } else {
        menu_img.textContent = "Menu";
    }
    menu_img.classList.toggle("pink");

    menu.classList.toggle("open");


}) 


const header = document.querySelector("header");
let val=0;
let w= window.scrollY
window.addEventListener("scroll", () => {
  if (window.scrollY > w) {
    val=val+2;
    header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
    w= window.scrollY
  } else {
    val=val-2;
    header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
    w= window.scrollY
  }
});




window.addEventListener('DOMContentLoaded',()=>{
  getUsers()
})



function getUsers(){
  fetch(line+ '/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message:'users'})
})
.then(response => response.json())
.then(data => {
    if (true){
        if (data.message){

       console.log(data.message)
    //    alert('data recieved')
       localStorage.setItem('udata',JSON.stringify(data.message))
      //  console.log(data.message)
    }
     
    }else{
    
   
    }

   
})
.catch(error => {
    console.log('failed to recieve data')
    // location.reload()
        
});
}



window.addEventListener('load',()=>{
  if (document.querySelector('.products-grid')){
    if (document.querySelector('.products-grid').innerHTML=='<div class="loading-dots"><div></div><div></div><div></div></div>'){
     // Call the function
     
     waitForSixtySeconds();
    
    }}

})


function waitForSixtySeconds() {
  console.log("Waiting for 60 seconds...");
  setTimeout(() => {
      // location.reload(true)
      getUsers2()
  }, 3000); // 60000 milliseconds = 60 seconds
}

function getUsers2(){
  // alert('fetching')
  let em= de(accessInfo(en('email',date1)),date1)
  // alert(em)
  fetch(line+ '/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({message:'users',email: em})
  })
  .then(response => response.json())
  .then(data => {
      if (true){
          if (data.message){

         console.log(data.message)
      //    alert('data recieved')
      let cards_data=data.message
      // console.log(cards_data)
      // console.log(cards_data)
      // console.log(cards_data)
      console.log(cards_data)
      console.log('hey')
      if(cards_data){
      // alert('incorporating data')

      }
      else{
      // alert('failed to use data data')
      
  }
      let r_data='';
      for (r in cards_data){
          r_data= r_data + `<div class="product-card">
          <div class="img-container">
              <img src="../../sources/${cards_data[r].image_loc}" alt="Product Image">
              </div>
              <div class="product-info">
                  <h3>${cards_data[r].type_} ${cards_data[r].status}</h3>
                  <p>${cards_data[r].card_item}  ${cards_data[r].price}</p>
                  <button>Add User</button>
              </div>
            </div>`
            {`<div class="product-card">
      <img src="https://via.placeholder.com/400x200.png?text=Product+1" alt="Product 1" />
      <div class="product-info">
        <h3>Product 1</h3>
        <p>A short, enticing description of Product 1. Standout features and a quality build.</p>
        <button>Join Now</button>
      </div>
    </div>`}

    }
  let cards= document.querySelector(".products-grid")

  cards.innerHTML= r_data
      
  
      }
       
      }else{
      
     
      }

     
  })
  .catch(error => {

      console.log('failed to recieve data')
          
  });
}






