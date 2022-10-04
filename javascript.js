const images=document.querySelectorAll("img");
console.log(images.length)
const imageContainer=document.querySelector(".slides");
var  i=0;
function start(){
   i++;
  console.log(i)
  if (i>images.length-1){
    i=0;
  }
  imageContainer.style.transform=`translateX(${-i*100}%)`
}
setInterval(start,2000);