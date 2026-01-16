xOndy = [0,0]
ss = [0,0]
opinion = [0,0]
Geg = [0, 0]

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX - 516;
  const mouseY = event.clientY - 50;

  
  if (mouseX > 0){
    if (mouseY > 0){
        
        if (mouseX < 499){
            if (mouseY < 499){
                xOndy = [mouseX-250,-mouseY+250]
                

                document.getElementById("vote").addEventListener("click", function(){
                  document.getElementById("dot").style.left = mouseX+511 + 'px'
                  document.getElementById("dot").style.top = mouseY+45 + 'px'
                  info.innerHTML = "("+xOndy+")";
                  ss = xOndy;
                });
                


            }else{
                xOndy = [0,0]


                
            }
        }else{
            xOndy = [0,0]
        }


    }else{xOndy = [0,0]}
  }else{
    xOndy = [0,0]
  }

  
  

});


document.getElementById("sub").addEventListener("click", function(){
  opinion = ss
  console.log(opinion);
  Geg = opinion
  saveData()
});


function saveData() {

   const inputValue = Geg

   localStorage.setItem("youserData", inputValue);

   displaySavedData();

};
function displaySavedData() {

  const savdData = localStorage.getItem("youserData");
  const saveDataElement = document.getElementById("savdData");

  iMember.innerHTML = savdData;
  const allThe = iMember.innerHTML

  localStorage.setItem("megaMemory", iMember.innerHTML);
  const savdMemory = localStorage.getItem("megaMemory");
  const saveDataMomory = document.getElementById("savdMemory");

  test.innerHTML = savdData;

};
window.onload = displaySavedData;

//time to get real

//fs = require("fs");

//const vots = '[0,0,-40,120]';

//const showVots = JSON .stringify(vots);

//fs.writeFile("vots.json", showVots)



//console.log(showVots);