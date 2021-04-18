function fiveRandomChracters() {
  let arr = [];
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 5; i++)
    arr.push(characters.charAt(Math.floor(Math.random() * characters.length)));

  return arr;
}

let submitBtn = document.querySelector("button");
let letters = fiveRandomChracters();
let select = document.querySelectorAll("select");

function selectOptions() {
  let options = letters
    .map((letter) => {
      return `<option value=${letter}>${letter}</option>`;
    })
    .join("\n");
  select[0].innerHTML = select[0].innerHTML + options;
}
selectOptions();

let films = ["WER", "wer", "wer"];
submitBtn.addEventListener("click", () => {
  let options = films
    .map((film) => {
      return `<option value=${film}>${film}</option>`;
    })
    .join("\n");
  select[1].innerHTML = options;
});

fetch("./list.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
