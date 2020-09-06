// Select color input
// Select size input
document.write('ramy')
var tab = document.getElementById("pixelCanvas")	
var form = document.getElementById("sizePicker")	
var hInput = document.getElementById("inputHeight")	
var wInput = document.getElementById("inputWidth")	
var colorPicker = document.getElementById("colorPicker")	
var tdd = document.getElementsByTagName("td")	
// When size is submitted by the user, call makeGrid()

function makeGrid(h,w) {
  for(let i = 0; i<h;i++){
    var tr= document.createElement('tr')
    for(let j = 0; j<w;j++){
        var td = document.createElement('td')
      tr.appendChild(td)
      }
    tab.appendChild(tr)
  }
}
form.onsubmit=function(){
    let h = hInput.value
    let w = wInput.value
    makeGrid(h,w)
    for(let j = 0; j<tdd.length;j++){
        tdd[j].onclick=function(){
            tdd[j].style.backgroundColor= colorPicker.value;
            
        }
    }
}

   
   // console.log(tdd)

