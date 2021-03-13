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

// animation.restart();

$(document).click(function(){
  var animation = anime({
    targets: '.paintings .colors',
    translateX: 25,
    rotateZ:15,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

})

document.querySelector('.restart-demo .restart').onclick = animation.restart;


// $("h1").hover(function(){
//
//   // clearInrerval(interval);
//
// })
