

var objects = [
    {
      element: $("#Burger-King"),
      answer: "burger king"
    },
    {
      element: $("#McDonalds"),
      answer: "mcdonalds"
    },
  {
    element: $("#kfc"),
    answer: "kfc"
  },
  {
    element: $("#Pizza-hut"),
    answer: "pizza hut"
  },
  {
    element: $("#Chick-fil-a"),
    answer: "chick fil a"
  },
  {
  element: $("#Taco-bell"),
  answer: "taco bell"
},
{
  element: $("#popeyes"),
  answer: "popeyes"
},
{
  element: $("#Doninos"),
  answer: "doninos"
},
]

// on click flip the card
$(document).on('click', '.card', flip);

function flip () {
  $(this).toggleClass("flip");
  console.log(this);
  // $().toggleClass("flip");
  $(this).find('.front').css('display', 'block')
}

//What happens If the answer is right or wrong
function checkAnswer() {
  console.log(); event.preventDefault();
    var userGuess = $(this).siblings().find('input[type=text]').val()

    if ( userGuess === answer ) {
      document.getElementById("objects").style.backgroundColor = '#18D213';
    }
    else { document.getElementById("objects").style.backgroundColor = '#E81806';
    console.log(document);
    }
}








// objects[0].answer
// "Burger King"
//
// objects[1].answer
// "mcdonalds"
//
// objects[2].answer
// "kfc"
//
// objects[3].answer
// "pizza hut"
//
// objects[4].answer
// "chick fil a"
//
// objects[5].answer
// "taco bell"
// objects[6].answer
// "popeyes"
// objects[7].answer
// "dominos"
