let btnSerch = document.querySelector("#serch")
let modal = document.querySelector(".modal");
let modal_content = document.querySelector(".modal-content");
let btnRegister = document.querySelector("#register")
let modal_rigster = document.querySelector(".modal-register")
let modal_login = document.querySelector(".modal-login");
let btn_login = document.querySelector("#login");
modal.style.display = "none";
modal_login.style.display = "none";
modal_rigster.style.display = "none";

btnSerch.addEventListener("click", ()=>{
    modal.style.display = "flex";
})

let clos = document.querySelectorAll(".close");
clos.forEach(item=>{
  item.addEventListener("click", ()=>{
    if("flex" == modal.style.display){
      modal.style.display = "none";
    }else if ("flex" == modal_rigster.style.display){
      modal_rigster.style.display = "none";
    }else if ("block" == modal_login.style.display){
       modal_login.style.display = "none";
    }
  })
})


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if (event.target == modal_rigster) {
      modal_rigster.style.display = "none";
    }else if (event.target == modal_login){
      modal_login.style.display = "none"
    }
  }

  let user = document.querySelector("#user");

  user.addEventListener("click", ()=>{
    document.querySelector(".select").classList.toggle("active");
    
  })


  btn_login.addEventListener("click", ()=>{
    modal_login.style.display = "block";
  })



btnRegister.addEventListener("click", ()=>{
  modal_rigster.style.display = "flex"
})
