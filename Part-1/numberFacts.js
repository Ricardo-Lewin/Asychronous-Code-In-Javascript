// Part 1: Number Facts

let baseURL = "http://numbersapi.com";

// #1
axios.get(`${baseURL}/3?json`)
  .then(response => {
    console.log(`LuckyNums #1 ${response.data}`);
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });

// #2
let facts = axios.get(`${baseURL}/1..3`)
  .then(response => {
    facts = response.data;
    for (const fact in facts) {
        $("#results-list").append(`<li>${facts[fact]}</li>`)}
    })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });

// #3

let fourNumberFacts = [];

for (let i = 1; i < 5; i++) {
  fourNumberFacts.push(
    axios.get(`${baseURL}/3`)
  );
}

Promise.all(fourNumberFacts)
  .then(numArr => (
    numArr.forEach(fact => $("#results-list-2").append(`<li>${fact.data}</li>`))
  ))
  .catch(err => console.log(err));
