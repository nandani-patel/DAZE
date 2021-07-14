var modal = document.getElementById("Modal");
let b1 = document.getElementById("b1"); 
b1.onclick = function() {
  modal.style.display = "block";
}

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
var info = document.getElementById("info");
// var des = document.getElementById("des");
let add = document.getElementById("add");

(function(){
    add.addEventListener('click',function(e){
      e.preventDefault();
        if(input1.value === ''){
          alert("cant append empty item to the list");
        }
        else if(input2.value === ''){
          alert("cant append empty item to the list");
        }  
        else if(input3.value === ''){
          alert("cant append empty item to the list");
        }    
        else{
            info.innerHTML += `<div class="task-card">
            <div class="title">${input1.value}</div>
            <div class="descr"><textarea name="input" id="" cols="30" rows="10"></textarea></div>
            <div class="deadline">${input2.value}</div><div class="hours">${input3.value}</div>
            <button id="del" onclick="document.body.removeChild(this.parentNode)" id = "del" style="float: right;" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/> </svg></button>
          </div>`
            store();
            input1.value = " ";
            input2.value = " ";
            input3.value = " ";
            modal.style.display = "none";   
        }  
    },false)
  $(document).on('click', ':del', function() {
      $(this).parent().remove();
      store();
  });
    function store() {
      localStorage.setItem("testKey1", JSON.stringify(info.innerHTML));
    } 
    function getValues() {
      var storedValues1 = JSON.parse(localStorage.getItem("testKey1"));
      info.innerHTML += storedValues1; 
    }
    getValues();
})();

let close = document.getElementById("close");
close.addEventListener('click',function(closemodal){
  modal.style.display = "none";
})
