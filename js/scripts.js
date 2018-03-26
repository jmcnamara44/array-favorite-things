//back-end
var moviesInput;
var hobbyInput;
var foodInput;
var musicInput;
var array1;












//front-end
$(document).ready(function() {
  $("form").submit(function(event) {

    moviesInput = $("input#movie").val();
    hobbyInput = $("input#hobby").val();
    foodInput = $("input#food").val();
    musicInput = $("input#music").val();
    array1 = [moviesInput, hobbyInput, foodInput, musicInput];

    // reverse = array1.reverse();
    event.preventDefault();

    $(".movie").text(moviesInput);
    $(".hobby").text(hobbyInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
$(".reverseArray1").text(array1.reverse());
$(".reverseArray2").text(array1.pop());
alert(array1);

  });


});
