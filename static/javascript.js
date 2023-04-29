 track = document.getElementById("image-track");
window.onload = () =>{
  track = document.getElementById("image-track");
  introduction = document.getElementById("introduction")
}

window.onmousemove = e =>{
  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth/2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, {duration: 800,fill:"forwards"});
  //introduction.style.transform = `translate(${2*nextPercentage}%, 20%)`
  introduction.animate({
    transform: `translate(${1.4*nextPercentage}vw, 0%)`
  }, {duration: 800,fill:"forwards"});

  //for(image of project.getElementsByClassName("image")){
  //  image.style.objectPosition = `${nextPercentage + 100} 50%`
  //}
}

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () =>{
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;

}
