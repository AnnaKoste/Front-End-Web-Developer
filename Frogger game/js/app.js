const positionE = [63, 146, 229];
const positionP = [102, 202, 302];
const positionG = [1, 102, 203, 303, 404];
let speedE = [100, 150, 200];
const gemsT = ['images/Gem Blue.png', 'images/Gem Green.png', 'images/Gem Orange.png']
const imgs = document.querySelectorAll('img');
const leveltxt = document.getElementById('leveltxt');
const gemstxt = document.getElementById('gemstxt');
const restart = document.getElementById('restart');
let level = 0;
let gems = 0;

function randomAr(array) {
  return array[Math.floor(Math.random()*array.length)];
};

function reset() {
  player.x = randomAr(positionP);
  player.y = 395;
  speedE = [100, 150, 200];
  level = 0;
  leveltxt.textContent = 'Level: '+level;
  gems = 0;
  gemstxt.textContent = 'Gems: '+gems;
  gem.sprite = randomAr(gemsT);
  gem.x = randomAr(positionG);
  gem.y = randomAr(positionE);
  gem.render();
  if (allEnemies.length === 4) {
    allEnemies.pop();
  }
  if (allEnemies.length === 4) {
    allEnemies.pop();
  }
};

imgs.forEach(function(img) {
  img.addEventListener('click', function() {
    player.sprite = img.getAttribute('src');
    document.getElementById('welcome').style.display = 'none';
    document.querySelector('canvas').style.display = 'inline';
    document.getElementById('gameWin').style.display = 'flex';
  });
});

restart.addEventListener('click', function() {
  reset();
});

var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 510) {
        this.x = -60;
        this.y = randomAr(positionE);
        this.speed = randomAr(speedE);
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
  for(let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + 40 >= this.x && enemy.x - 40 <= this.x)) {
        reset();
      }
  }
  if (this.y === gem.y && (gem.x + 40 >= this.x && gem.x - 40 <= this.x)) {
      gems += 1;
      gemstxt.textContent = 'Gems: '+gems;
      gem.sprite = randomAr(gemsT);
      gem.x = randomAr(positionG);
      gem.y = randomAr(positionE);
      gem.render();
  }
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (key) {
  if (key==='right' && this.x<403) {
    this.x += 101;
  }
  else if (key==='down' && this.y<394) {
    this.y += 83;
  }
  else if (key==='left' && this.x>1) {
    this.x -= 101;
  }
  else if (key==='up' && this.y>1) {
    this.y -= 83;
    if (this.y<62) {
      level += 1;
      leveltxt.textContent = 'Level: '+level;
      var i=0;
      for (i=0; i < speedE.length; ++i) {
        speedE[i] += 50;
      }
      if (level === 5) {
        let enemy4 = new Enemy(0, randomAr(positionE), randomAr(speedE));
        allEnemies.push(enemy4);
      }
      if (level === 10) {
        let enemy5 = new Enemy(0, randomAr(positionE), randomAr(speedE));
        allEnemies.push(enemy5);
      }
      player.x = randomAr(positionP);
      player.y = 395;
    }
  }
}

var Gem = function(x, y) {
    this.sprite = randomAr(gemsT);
    this.x = x;
    this.y = y;
};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 101, 160);
}

let enemy1 = new Enemy(0, randomAr(positionE), randomAr(speedE));
let enemy2 = new Enemy(0, randomAr(positionE), randomAr(speedE));
let enemy3 = new Enemy(0, randomAr(positionE), randomAr(speedE));
let allEnemies = [enemy1, enemy2, enemy3];
let player = new Player(randomAr(positionP), 395);
let gem = new Gem(randomAr(positionG), randomAr(positionE));

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
