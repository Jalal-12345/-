let btnSerch = document.querySelector("#serch")
let modal = document.querySelector(".modal");
let modal_content = document.querySelector(".modal-content");

btnSerch.addEventListener("click", ()=>{

    modal.style.display = "flex"
    modal_content.classList.add("active");
})

let clos = document.querySelector(".close");
clos .addEventListener("click" , ()=>{
    modal_content.classList.remove("active");
   modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
