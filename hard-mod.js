xOndy = [0,0]
ss = [0,0]
opinion = [0,0]
Geg = [0, 0]

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX - 516;
  const mouseY = event.clientY - 50;

  

                xOndy = [mouseX,-mouseY]
                

                document.getElementById("vote").addEventListener("click", function(){
                  document.getElementById("dot").style.left = mouseX+511 + 'px'
                  document.getElementById("dot").style.top = mouseY+45 + 'px'
                  info.innerHTML = "("+xOndy+")";
                  ss = xOndy;
                });

});


document.getElementById("sub").addEventListener("click", function(){
  opinion = ss
  console.log(opinion);
  Geg = opinion
  saveData()
});


function saveData() {

   const inputValue = Geg

   const savdData = localStorage.getItem("youserData");

   localStorage.setItem("youserData", savdData + "("+inputValue+")");

    //localStorage.setItem("youserData", 0,0);

   displaySavedData();

};
function displaySavedData() {

  const savdData = localStorage.getItem("youserData");
  const saveDataElement = document.getElementById("savdData");



  test.innerHTML = Geg;

  iMember.innerHTML = savdData;
};

window.onload = displaySavedData;
