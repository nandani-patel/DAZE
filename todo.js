var modal = document.getElementById("Modal");
let b1 = document.getElementById("b1"); 
var xy=0;

b1.onclick = function() {
  modal.style.display = "block";
} 

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
var info = document.getElementById("info");
let header = document.getElementById("tasks-left");
// var des = document.getElementById("des");
let add = document.getElementById("add");
function store() {
  localStorage.setItem("testKey1", JSON.stringify(info.innerHTML));
} 


(function(){
      add.addEventListener('click',function(e){
        e.preventDefault();
          if(input1.value === ''){
            alert("cant append empty item to the list");
            modal.style.display = "none";
          }
          else if(input2.value === ''){
            alert("cant append empty item to the list");
            modal.style.display = "none";
          }  
          else if(input3.value === ''){
            alert("cant append empty item to the list");
            modal.style.display = "none";
          }    
          else{ 
            let dead = JSON.stringify(input2.value);
            var res1 = dead.slice(1, 3);
            if(dead[4]=="0") var res2 = dead.slice(5,6);
            else var res2 = dead.slice(4,6);
            var res3 = dead.slice(7, 11);
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var mth = months[res2];
              
            const card = document.createElement('div');
            card.classList.add('task-card');
            card.innerHTML = `<div class="title">
                        ${input1.value.toUpperCase()}
                        </div> 
                        <div class="deadline">
                        upto ${res1} ${mth},${res3}
                        </div>
                        <div class="hours">
                        ${input3.value} hours
                        </div>
                        <div class="descr">
                        <textarea name="input" heigth="100px" width="200px"> ENTER DETAILS/NOTES/IMPORTANT LINKS.....</textarea>
                        </div>
                        <button  id="del" style="float: right; margin-right: 20px" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/> </svg>
                        </button> `
                       
                      info.appendChild(card);
              store();
              input1.value = " ";
              input2.value = " ";
              input3.value = " ";
              modal.style.display = "none";
          }
          location.reload();  
      },false)

  $(document).on('click', ':button', function() {
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
  location.reload();
});





// var modal = document.getElementById("Modal");
// let b1 = document.getElementById("b1"); 
// var t1 = document.getElementById("t");
// var xy=0;

// b1.onclick = function() {
//   modal.style.display = "block";
// }

// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// var info = document.getElementById("info");
// let header = document.getElementById("tasks-left");
// // var des = document.getElementById("des");
// let add = document.getElementById("add");


// (function(){
//     add.addEventListener('click',function(e){
//       e.preventDefault();
//         if(input1.value === ''){
//           alert("cant append empty item to the list");
//           modal.style.display = "none";
//         }
//         else if(input2.value === ''){
//           alert("cant append empty item to the list");
//           modal.style.display = "none";
//         }  
//         else if(input3.value === ''){
//           alert("cant append empty item to the list");
//           modal.style.display = "none";
//         }    
//         else{ 
//             info.innerHTML += `<div class="task-card">
//             <div class="title">
//             ${input1.value} 
//             </div> 
//             <button onclick="location.reload();" id="del" style="float: right;" >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/> </svg>
//             </button>
//             <div class="deadline" id="deadline">
//             ${input2.value}
//             </div>
//             <div class="hours">
//             ${input3.value}
//             </div>
//             <div class="descr">
//             <textarea name="input" heigth="100px" width="200px"></textarea>
//             </div>
//           </div>`
//             store();
//             input1.value = " ";
//             input2.value = " ";
//             input3.value = " ";
//             modal.style.display = "none";
//         }
//         location.reload();  
//     },false)

//   $(document).on('click', ':button', function() {
//       $(this).parent().remove();
//       store();
//   });
//     function store() {
//       localStorage.setItem("testKey1", JSON.stringify(info.innerHTML));
//     } 

//     function getValues() {
//       var storedValues1 = JSON.parse(localStorage.getItem("testKey1"));
//       info.innerHTML += storedValues1;
//     }
//     getValues();
//     var c = document.getElementById('deadline').innerText
// })();

// let close = document.getElementById("close");

// close.addEventListener('click',function(closemodal){
//   modal.style.display = "none";
//   location.reload();
// });
// const mon = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// var tod = new Date();
// var m = tod.getMonth();
// if()

// if(input2.value="")

// var tod = new Date();
// var m = tod.getMonth() + 1;
// var d = tod.getDate();
// let dead = JSON.stringify(input2.value);

// if(dead[0]=="0") var y = dead[2];
// else var y = dead.slice(1,3);

// if(dead[4]=="0") var x = dead.slice(5,6);
// else var x = dead.slice(4,6);

// if( JSON.stringify(m) == x && (JSON.stringify(d)==y) && JSON.stringify(tod.getFullYear()) ==dead.slice(7,11)){
//   console.log("today");
//
