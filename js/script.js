
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

$('#scrollquestion').dragscrollable();

$(".c").click(function(){
   $(this).addClass("question-viewed");
   $(this).addClass("current-question");
   $(this).siblings().removeClass("current-question");
});

          $('#rightArrow').click(function(){
          $('#leftArrow').removeClass("leftArrowDisable");
        });


$(function() {
    $('#scrollquestion').scroll( function() {
        var $width = $('#scrollquestion').outerWidth()
        var $scrollWidth = $('#scrollquestion')[0].scrollWidth;
        var $scrollLeft = $('#scrollquestion').scrollLeft();

        if ($scrollWidth - $width=== $scrollLeft){
            $('#rightArrow').addClass("rightArrowDisable");
            $('#leftArrow').removeClass("leftArrowDisable");
        }
        if ($scrollLeft===0){
             $('#leftArrow').addClass("leftArrowDisable");
            $('#rightArrow').removeClass("rightArrowDisable");
        }
        $('#leftArrow').click(function(){
          $('#rightArrow').removeClass("rightArrowDisable");
        });

          $('#rightArrow').click(function(){
          $('#leftArrow').removeClass("leftArrowDisable");
        });

    });
});


});


function fillQuestionNumber(questionNum){
  for(var i=1;i<=questionNum;i++){
    $("#scrollquestion").append('<div class="c"><h6>'+i+'</h6></div>');
  }
}






