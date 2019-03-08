var attend = [
  { name: 'Slappy the Frog',
    attendance: [],
    missed: 0
  },
  { name: 'Lilly the Lizard',
    attendance: [],
    missed: 0
  },
  { name: 'Paulrus the Walrus',
    attendance: [],
    missed: 0
  },
  { name: 'Gregory the Goat',
    attendance: [],
    missed: 0
  },
  { name: 'Adam the Anaconda',
    attendance: [],
    missed: 0
  }
];

var octopus = {
  getRandom: function() {
      return (Math.random() >= 0.5);
  },

  getAttend: function () {
      return attend;
  },

  init: function () {
      attend.forEach(function(x) {
          for (var i = 0; i <= 11; i++) {
              x.attendance.push(octopus.getRandom());
              if (x.attendance[i] === true)
                x.missed++;
          }
      });
      view.init();
  },

  checkM: function(n, index) {
    for (var i = 0; i < attend.length; i++) {
      if (attend[i].name === n) {
        if (attend[i].attendance[index] === false) {
          attend[i].missed++;
          attend[i].attendance[index] = true;
        }
        else {
          attend[i].missed--;
          attend[i].attendance[index] = false;
        };
      };
    };
  }
};

var view = {

  init: function() {
    var at = octopus.getAttend();
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    at.forEach(function(x) {
      var tr = document.createElement("tr");
      tr.setAttribute("class", 'student');
      tbody.appendChild(tr);

      var tdN = document.createElement("td");
      tdN.setAttribute("class", 'name-col');
      tdN.innerHTML = x.name;
      tr.appendChild(tdN);

      for (let i=0; i<=11; i++) {
          var tdA = document.createElement("td");
          tdA.setAttribute("class", 'attend-col');
          tr.appendChild(tdA);
          var inp = document.createElement("input");
          inp.setAttribute("type", 'checkbox');
          inp.checked = x.attendance[i];
          inp.addEventListener('click', function() {
              var nam = x.name;
              octopus.checkM(nam, i);
              at = octopus.getAttend();
              view.init();
          });
          tdA.appendChild(inp);
      };

      var tdM = document.createElement("td");
      tdM.setAttribute("class", 'missed-col');
      tdM.innerHTML = x.missed;
      tr.appendChild(tdM);
    });
  }
}

octopus.init();
