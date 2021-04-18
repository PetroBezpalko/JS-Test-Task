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

let list = fetch("./list.json")
  .then(function (resp) {
    return resp.json();
  });

submitBtn.addEventListener("click", () => {
  let inputLetter = select[0].value;
  let re = `^${inputLetter}`;
  let reg = new RegExp(re);
  console.log(list);
  let films = list[0].filter((film) => {
    return film.name.match(reg);
  });
  let options = films
    .map((film) => {
      return `<option value=${film.name}>${film.name}</option>`;
    })
    .join("\n");
  select[1].innerHTML = options;
});
