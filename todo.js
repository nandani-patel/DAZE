var modal = document.getElementById("Modal");
let b1 = document.getElementById("b1"); 
b1.onclick = function() {
  modal.style.display = "block";
}
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
var info = document.getElementById("info");
var des = document.getElementById("des");
let add = document.getElementById("add");
(function(){
    add.addEventListener('click',function(e){
        e.preventDefault();
            info.innerHTML += '<div class="des">' + input1.value + '</div>'
            info.innerHTML += '<div class="deadline">' + input2.value + '</div>'
            info.innerHTML += '<div class="hours">' + input3.value + '</div>'
            store();
            input1.value = " ";
            input2.value = " ";
            input3.value = " ";
            modal.style.display = "none";
    },false)
    info.addEventListener('click',function(e){
      var t1 = e.target;
      // t1.parentNode.removeChild(t1);
    store();
    },false)
    function store() {
      localStorage.setItem("testKey1", JSON.stringify(info.innerHTML));
    }
    let del = document.getElementById('del');
    function getValues() {
      var storedValues1 = JSON.parse(localStorage.getItem("testKey1"));
      info.innerHTML = storedValues1; 
    }
    getValues();
})();



//   (function(){
//     b2.addEventListener('click',function(f){
//         f.preventDefault();
//         if(input2.value === ''){
//             alert("cant append empty item to the list");
//         }
//         else{
//             ul2.innerHTML += '<li>' + input2.value + '<button id="del">X</button></li>';
//             store();
//         }
//         input2.value = "";
//         },false)
//     ul2.addEventListener('click',function(f){
//       var t2 = f.target;
//       if(t2.className == "checked"){
//         // t2.parentNode.removeChild(t2);
//         t2.className = ""; 
//       } 
//       else  t2.className = "checked";
//       store();
//     },false)
//     function store() {
//       localStorage.setItem("testKey2", JSON.stringify(ul2.innerHTML));
//     }
//     function getValues() {
//     //   var storedValues = window.localStorage.myitems;
//       var storedValues2 = JSON.parse(localStorage.getItem("testKey2"));
//       ul2.innerHTML = storedValues2; 
//     }
//     getValues();
//   })();




//   (function(){
//     b3.addEventListener('click',function(f){
//         f.preventDefault();
//         if(input3.value === ''){
//             alert("cant append empty item to the list");
//         }
//         else{
//             ul3.innerHTML += '<li class="checked">' + input3.value + '<button id="del">X</button></li>';
//             store();
//         }
//         input3.value = "";
//     },false)

//     function store() {
//       localStorage.setItem("testKey3", JSON.stringify(ul3.innerHTML));
//     }
//     function getValues() {
//     //   var storedValues = window.localStorage.myitems;
//       var storedValues3 = JSON.parse(localStorage.getItem("testKey3"));
//       ul3.innerHTML = storedValues3; 
//     }
//     getValues();
//   })();

