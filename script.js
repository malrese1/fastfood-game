// on click flip the card
$(document).on('click', '.card', flip);

function flip () {
  $(this).toggleClass("flip");
  console.log(this);
  // $().toggleClass("flip");
  $(this).find('.front').css('display', 'block')
}
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
var objects = [
    {
      element: $("#burgerking"),
      answer: "Burger King"
    },
    {
      element: $("#mcdonalds"),
      answer: "McDonalds"
    },
  {
    element: $("#kfc"),
    answer: "kfc"
  },
  {
    element: $("#pizza hut"),
    answer: "pizza hut"
  },
  {
    element: $("#chick fil a"),
    answer: "chick fil a"
  },
  {
  element: $("#taco bell"),
  answer: "taco bell"
},
{
  element: $("#popeyes"),
  answer: "popeyes"
},
]
objects[0].answer
"Burger King"
