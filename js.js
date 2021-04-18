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

fetch("./list.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    submitBtn.addEventListener("click", () => {
      let inputLetter = select[0].value;
      let re = `^${inputLetter}`;
      let reg = new RegExp(re);
      let films = data.filter((film) => {
        return film.name.match(reg);
      });
      if (inputLetter === "") {
        alert("Please, choose a letter.");
      } else if (films.length === 0) {
        alert(
          "Sorry, there is no film which name starts with the letter you specified. Please, choose another letter."
        );
      } else {
        let options = films
          .map((film) => {
            return `<option value=${film.name}>${film.name}</option>`;
          })
          .join("\n");
        select[1].innerHTML = options;
      }
    });
  });

