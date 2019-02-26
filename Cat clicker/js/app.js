let name = document.getElementById('name');
let click = document.getElementById('clicks');
let chooseC = document.getElementById('chooseC');

let cats = [
  {name: "one",
  clicks: 0,
  url: "img/cat1.jpg"},
  {name: "two",
  clicks: 0,
  url: "img/cat2.jpg"},
  {name: "three",
  clicks: 0,
  url: "img/cat3.jpg"},
  {name: "four",
  clicks: 0,
  url: "img/cat4.jpg"},
  {name: "five",
  clicks: 0,
  url: "img/cat5.jpg"}
];

cats.forEach(function(i) {
  let newcat = document.createElement("h4");
  newcat.innerHTML = i.name;
  newcat.setAttribute("class", 'cat');
  document.querySelector('.choose').appendChild(newcat);
});

const allC = document.querySelectorAll('.cat');
allC.forEach(function(el) {
  el.addEventListener('click', function(){
      const selN = el.innerHTML;

      for (let c in cats) {
        if (cats[c].name === selN) {
          name.innerHTML = "Name: " + cats[c].name;
          click.innerHTML = "Clicks: " + cats[c].clicks;
          chooseC.setAttribute("src", cats[c].url);

          chooseC.addEventListener('click', (function(cl) {
            return function () {
                cl++;
                click.innerHTML = "Clicks: " + cl;
              };
          })(cats[c].clicks));
        };
      };
  }, false);
});
