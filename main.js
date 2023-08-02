let btnSerch = document.querySelector("#serch")
let modal = document.querySelector(".modal");
let modal_content = document.querySelector(".modal-content");

btnSerch.addEventListener("click", ()=>{

    modal.style.display = "flex"
})

let clos = document.querySelector(".close");
clos .addEventListener("click" , ()=>{
   modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
