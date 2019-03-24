const listItem = document.getElementById('myInput');
const addItemIntoList = document.getElementById('addListItem');
var cbGetItem=[];
const storedItem=document.getElementById('storedItem');


// const getStoredItem = browser.storage.local.get('cbGetItem');

// getStoredItem.then((res) => {
// try{
//   if(res.cbGetItem){
//     // var _ui= document.getElementById("myUL");
//     // var li = _ui.createElement("li");
//     // li.value = res.cbGetItem;
//     //storedItem.value = res.cbGetItem;
//     //alert(storedItem.value);
//   }
// }catch(e){}
// });

// Create a new list item when clicking on the "Add" button

addItemIntoList.addEventListener('click',()=>{
  var li = document.createElement("li");
  var inputValue = listItem.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  
  // var _sspan= document.createElement("SPAN");
  // var _stext= document.createTextNode("\u21B5");
  // _sspan.className = "save";
  // _sspan.appendChild(_stext);
  // li.appendChild(_sspan);

  // for (t = 0; t < _sspan.length; t++) {
    // addItemIntoList.addEventListener('click',()=>{
    //   alert("test")
    //   browser.storage.local.set({ cbGetItem: listItem.value });
    // },false)
  // }

})

listItem.addEventListener('keyup',()=>{
  browser.storage.local.set({ cbGetItem: listItem.value });
}, false);


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var _sspanspan = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Create a "save" button and append it to each list item
// var _save;
// for(_save=0; _save<myNodelist.length; _save++){
//   var _sspan= document.createElement("SPAN");
//   var _stext= document.createTextNode("\u21B5");
//   _sspan.className = "save";
//   _sspan.appendChild(_stext);
//   myNodelist[_save].appendChild(_sspan);
// }


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//
// var btnSave = document.getElementsByClassName("save");
// var i;
// // alert("test")
// btnSave.addEventListener('click',()=>{
//   browser.storage.local.set({ cbGetItem: div });
// },false)

// for (i = 0; i < btnSave.length; i++) {
//   btnSave[i].onclick = function() {
//     var div = this.parentElement;
//     browser.storage.local.set({ cbGetItem: div });
//   }
//}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
//var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);





// $(function () {
  
// })

