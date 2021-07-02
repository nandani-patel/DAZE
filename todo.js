let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var ul1 = document.querySelector("#ul1");
var ul2 = document.querySelector("#ul2");
var ul3 = document.querySelector("#ul3");

var newtask = document.getElementsByTagName("li");

let b1 = document.getElementById("b1"); 
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");



(function(){
    b1.addEventListener('click',function(e){
        e.preventDefault();
        if(input1.value === ''){
            alert("cant append empty item to the list");
        }
        else{
            ul1.innerHTML += '<li>' + input1.value + ' <button id="del">X</button></li>';
            store();
        }
        input1.value = "";
        },false)
    ul1.addEventListener('click',function(e){
      var t1 = e.target;
      if(e.target.tagName === 'LI'){
          if(t1.className == "checked"){
            t1.className = "";
            t1.parentNode.removeChild(t1);
          } 
          else  t1.className = "checked";
          store();
      }
    },false)
    function store() {
      localStorage.setItem("testKey1", JSON.stringify(ul1.innerHTML));
    }
    let del = document.getElementById('del');
    function getValues() {
    //   var storedValues = window.localStorage.myitems;
      var storedValues1 = JSON.parse(localStorage.getItem("testKey1"));
      ul1.innerHTML = storedValues1; 
    }
    getValues();
  })();




  (function(){
    b2.addEventListener('click',function(f){
        f.preventDefault();
        if(input2.value === ''){
            alert("cant append empty item to the list");
        }
        else{
            ul2.innerHTML += '<li>' + input2.value + '<button id="del">X</button></li>';
            store();
        }
        input2.value = "";
        },false)
    ul2.addEventListener('click',function(f){
      var t2 = f.target;
      if(t2.className == "checked"){
        // t2.parentNode.removeChild(t2);
        t2.className = ""; 
      } 
      else  t2.className = "checked";
      store();
    },false)
    function store() {
      localStorage.setItem("testKey2", JSON.stringify(ul2.innerHTML));
    }
    function getValues() {
    //   var storedValues = window.localStorage.myitems;
      var storedValues2 = JSON.parse(localStorage.getItem("testKey2"));
      ul2.innerHTML = storedValues2; 
    }
    getValues();
  })();




  (function(){
    b3.addEventListener('click',function(f){
        f.preventDefault();
        if(input3.value === ''){
            alert("cant append empty item to the list");
        }
        else{
            ul3.innerHTML += '<li class="checked">' + input3.value + '<button id="del">X</button></li>';
            store();
        }
        input3.value = "";
    },false)

    function store() {
      localStorage.setItem("testKey3", JSON.stringify(ul3.innerHTML));
    }
    function getValues() {
    //   var storedValues = window.localStorage.myitems;
      var storedValues3 = JSON.parse(localStorage.getItem("testKey3"));
      ul3.innerHTML = storedValues3; 
    }
    getValues();
  })();

