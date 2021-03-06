let baseURL = "http://deckofcardsapi.com/api/deck"


// #1 with Promises
// axios.get(`${baseURL}/new/draw/?count=1`)
//   .then(response => {
//     console.log(`#1  Your card is: A ${response.data.cards[0].value.toLowerCase()} of ${response.data.cards[0].suit.toLowerCase()}`);
//   })
//   .catch(err => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });

// #1 with Async/Await
async function drawCard() {
  let response = await axios.get(`${baseURL}/new/draw/?count=1`)
  console.log(`#1  Your card is: A ${response.data.cards[0].value.toLowerCase()} of ${response.data.cards[0].suit.toLowerCase()}`)
}

drawCard()

// #2 with Promises

// axios.get(`${baseURL}/new/draw/?count=2`)
// .then(response => {
//   firstCard = response.data.cards[0]
//   secondCard = response.data.cards[1]
//   console.log(`#2  Your first card is: A ${response.data.cards[0].value.toLowerCase()} of ${response.data.cards[0].suit.toLowerCase()} and your second card is : A ${response.data.cards[1].value.toLowerCase()} of ${response.data.cards[1].suit.toLowerCase()}`)  
// })

// #2 with Async/Await

async function drawTwo() {
  let response = await axios.get(`${baseURL}/new/draw/?count=2`)
  console.log(`#2  Your first card is: A ${response.data.cards[0].value.toLowerCase()} of ${response.data.cards[0].suit.toLowerCase()} and your second card is : A ${response.data.cards[1].value.toLowerCase()} of ${response.data.cards[1].suit.toLowerCase()}`) 
}

drawTwo()


// #3 with Promises

// let deckId = null;
// let $btn = $('button');
// let $cardArea = $('#card-area');

// axios.get(`${baseURL}/new/shuffle/`)
//   .then(response => {
//     deckId = response.data.deck_id;
//     console.log(deckId)
//     $btn.show();
//   })
//   .catch(err => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });


// $btn.on('click', function() {
//     axios.get(`${baseURL}/${deckId}/draw/`).then(response => {
//       console.log(response.data)
//       let cardSrc = response.data.cards[0].image;
//       let angle = Math.random() * 90 - 45;
//       let randomX = Math.random() * 40 - 20;
//       let randomY = Math.random() * 40 - 20;
//       $cardArea.append(
//         $('<img>', {
//           src: cardSrc,
//           css: {
//             transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//           }
//         })
//       );
//       if (response.data.remaining === 0) $btn.remove();
//     });
//   });

// #3 with Async/Await

async function setup() {
  let $btn = $('button');
  let $cardArea = $('#card-area');

  let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
  $btn.show().on('click', async function() {
    let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
    let cardSrc = cardData.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
      $('<img>', {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (cardData.remaining === 0) $btn.remove();
  });
}
setup();



