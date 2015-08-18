
$( document ).ready(function() {
  fillQuestionNumber(30);
    console.log( "ready!" );
    $("#leftArrow").click(function () {
  var leftPos = $('#scrollquestion').scrollLeft();
$("#scrollquestion").animate({scrollLeft: leftPos - 200}, 800);
});

$("#rightArrow").click(function () {
  var leftPos = $('#scrollquestion').scrollLeft();
$("#scrollquestion").animate({scrollLeft: leftPos + 200}, 800);
});

$(".c").click(function(){
   $(this).addClass("question-viewed");
   $(this).addClass("current-question");
   $(this).siblings().removeClass("current-question");
});


});


function fillQuestionNumber(questionNum){
  for(var i=1;i<=questionNum;i++){
    $("#scrollquestion").append('<div class="c"><h6>'+i+'</h6></div>');
  }
}





