// Part 1: Number Facts ****************************************************************

let baseURL = "http://numbersapi.com";

// #1 with Promises
// axios.get(`${baseURL}/3?json`)
//   .then(response => {
//     console.log(`LuckyNums #1 ${response.data}`);
//   })
//   .catch(err => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });

// #1 with Async/Await
async function getLuckyNum() {
  let response = await axios.get(`${baseURL}/3?json`)
  console.log(`LuckyNums #1 ${response.data.text}`)
}

getLuckyNum()

// #2 with Promises
// let facts = axios.get(`${baseURL}/1..3`)
//   .then(response => {
//     facts = response.data;
//     for (const fact in facts) {
//         $("#results-list").append(`<li>${facts[fact]}</li>`)}
//     })
//   .catch(err => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });

// #2 with Async/Await
async function getFacts() {
  let {data: facts} = await axios.get(`${baseURL}/1..3`)
  for (const fact in facts) {
    $("#results-list").append(`<li>${facts[fact]}</li>`)
  }
}

getFacts()

// #3 with Promises

// let fourNumberFacts = [];

// for (let i = 1; i < 5; i++) {
//   fourNumberFacts.push(
//     axios.get(`${baseURL}/3`)
//   );
// }

// Promise.all(fourNumberFacts)
//   .then(numArr => (
//     numArr.forEach(fact => $("#results-list-2").append(`<li>${fact.data}</li>`))
//   ))
//   .catch(err => console.log(err));


// #3 with Async/Await

async function getNumberFacts() {
  let fourNumberFacts = await Promise.all([
    axios.get(`${baseURL}/3`),
    axios.get(`${baseURL}/3`),
    axios.get(`${baseURL}/3`)
  ])

  fourNumberFacts.forEach(fact => $("#results-list-2").append(`<li>${fact.data}</li>`))
}

getNumberFacts()
