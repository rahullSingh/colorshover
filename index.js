$(".colors").hover(function(){
  // console.log(this.innerText);
  var color=this.innerText;
  $("h1").text(`${color}`);
  switch(color){
    case "orange":
    $("h1").css({
      "color":"#f58c35",
      "text-decoration":"underline"
      // "border":`2px solid ${color}`
    }
    )
      ;
    break;

    case "yellow":
    $("h1").css(
      "color","#f5DE35");
    break;

    case "green":
    $("h1").css(
      "color","#35f5a4");
    break;

    case "sky-blue":
    $("h1").css(
      "color","#35eff5");
    break;

    case "violet":
    $("h1").css(
      "color","#a935f5");
    break;


    case "pink":
    $("h1").css(
      "color","#f535d2");
    break;

  }

$("h1").slideDown();
  setTimeout(function(){
    $("h1").slideUp();
  },2000);

})


$(document).dblclick(function(){
  fullscreen();
})

function fullscreen(){
  if(document.fullscreenElement){
    document.exitFullscreen();
  }else {
document.documentElement.requestFullscreen().catch(function(e){
  console.log(e);
});
  }
}


// $("h1").hover(function(){
//
//   // clearInrerval(interval);
//
// })
