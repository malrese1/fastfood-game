// on click flip the card
$(document).on('click', '.card', flip);

function flip () {
  $(this).toggleClass("flip");
  console.log(this);
  // $().toggleClass("flip");
  $(this).find('.front').css('display', 'block')
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

objects[1].answer
"mcdonalds"

objects[2].answer
"kfc"

objects[3].answer
"pizza hut"

objects[4].answer
"chick fil a"

objects[5].answer
"taco bell"
objects[6].answer
"popeyes"
objects[7].answer
"dominos"
