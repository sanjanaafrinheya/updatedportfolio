//  countdown
 let count = document.querySelectorAll(".count");
let item = Array.from(count);
item.map((hjkj)=>{
    let counting = 0;
    function mycount() {
      counting++;
      if(counting <= hjkj.dataset.number ){
       clearInterval(stop);
       hjkj.innerHTML = counting + "k";
      }
    }
    setInterval(()=>{
        mycount();
    }, hjkj.dataset.speed / hjkj.dataset.number)
});
// typejs
let type = document.querySelector(".type");
let typed = type.innerHTML;
let typedarr = typed.split("");
type.innerHTML = "";
let typing  = 0;
  
function typedJs(){
if( typing < typed.length){
    type.innerHTML += typed.charAt(typing);
    typing++;
    typedarr = typed.split("");
}else{
    typedarr.pop("");
    type.innerHTML = typedarr.join("");
    if(typedarr.length == 0) {
    typing  = 0;
    }
}
}
setInterval(()=>{
    typedJs();
},200);

// scroll up
let topone = document.querySelector (".topone");
topone.addEventListener("click", ()=>{
  window.scrollTo({top:0 , behavior:"smooth"});
});
window.addEventListener("scroll",()=>{
    let scrollwidth = this.window.scrollY;
    if(scrollwidth > 50){
        topone.style.display = "block";
    }else{
        topone.style.display = "none";
    }
});


