// Create

$(document).keydown(function (e) {

  let audio = document.querySelector(`audio[data-key="${e}"]`);

  $(this).addClass('playing');
  audio.play();

  console.log(audio);

});
