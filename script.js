let box = document.getElementById('box');
let container = document.getElementById('container');
let apple = document.getElementById('apple')
let bpx = document.getElementById('bpx');
let bpy = document.getElementById('bpy');
let apx = document.getElementById('apx');
let apy = document.getElementById('apy');
let totap = document.getElementById('totap');
let pos_x = 0, pos_y = 0;
let posApple_x, posApple_y = 0;
let int = 50;
let total = 0;
let timer = setInterval(stop, int);

window.load = showApple();
bpx.innerHTML = 'x: '+pos_x;
bpy.innerHTML = 'y: '+pos_y;
totap.innerHTML = total;


function stop() {
  clearInterval(timer);
}
function moveRight() {
    if (((pos_x+6 == posApple_x) && 
       (pos_y+6 > posApple_y) &&
       (pos_y+6 <= posApple_y+6)) ||
       ((pos_x+6 == posApple_x) && 
       (pos_y >= posApple_y) &&
       (pos_y < posApple_y+6)))  {
          showApple();
          total++;
          totap.innerHTML = total;
          int -= 5;
    } else {
        if (pos_x == 194) {
          pos_x == 194; 
        } else {
        pos_x += 1;
        box.style.left = pos_x+'px';
        bpx.innerHTML = 'x: '+pos_x;
    }
    }
    if (pos_x >= 194) {
          clearInterval(timer);
          pos_x = 194;
    }
 }
function moveLeft () {
    if (((pos_x == posApple_x+6) && 
       (pos_y+6 > posApple_y) &&
       (pos_y+6 <= posApple_y+6)) ||
       ((pos_x == posApple_x+6) && 
       (pos_y >= posApple_y) &&
       (pos_y < posApple_y+6)))  {
          showApple();
          total++;
          totap.innerHTML = total;
          int -= 5;
  } else {
    if (pos_x == 0) {
      pos_x = 0;
      container.style.border = '2px solid red';
    } else {
      pos_x -= 1;
      box.style.left = pos_x+'px';
      bpx.innerHTML = 'x: '+pos_x;
     }
  }
  if (pos_x <= 0) {
    clearInterval(timer);
    pos_x = 0;
  }
}
function moveUp () {
    if (
       ((pos_y == posApple_y+6) && 
       (pos_x+6 > posApple_x) &&
       (pos_x+6 <= posApple_x+6)) ||
       ((pos_y == posApple_y+6) && 
       (pos_x >= posApple_x) &&
       (pos_x < posApple_x+6)))  {
        showApple();
        total++;
        totap.innerHTML = total;
          int -= 5;
         } else {
           if (pos_y == 0) {
             pos_y = 0;
           } else {
            pos_y -= 1;
            box.style.top = pos_y+'px';
            bpy.innerHTML = 'y: '+pos_y;
           }
  }
  if (pos_y <= 0) {
    clearInterval(timer);
    pos_y = 0;
  }
}
function moveDown () {
    if (
       ((pos_y+6 == posApple_y) && 
       (pos_x+6 > posApple_x) &&
       (pos_x+6 <= posApple_x+6)) ||
       ((pos_y+6 == posApple_y) && 
       (pos_x >= posApple_x) &&
       (pos_x < posApple_x+6)))  {
        showApple();
        total++;
        totap.innerHTML = total;
          int -= 5;
         } else {
           if (pos_y == 194) {
             pos_y = 194;
           } else {
           pos_y += 1;
           box.style.top = pos_y+'px';
           bpy.innerHTML = 'y: '+pos_y;
           }
  }
  if (pos_y >= 194) {
    clearInterval(timer);
    pos_y = 194;
  }
}
function startLeft() {
 clearInterval(timer)
 timer = setInterval(moveLeft, int);
}
function startRight() {
 clearInterval(timer)
 timer = setInterval(moveRight, int);
}
function startUp() {
 clearInterval(timer)
 timer = setInterval(moveUp, int);
}
function startDown() {
 clearInterval(timer)
 timer = setInterval(moveDown, int);
}
function randomPos() {
 return Math.ceil(Math.random() * 194);
}
function showApple() {
  posApple_x = randomPos();
  posApple_y = randomPos();
  apple.style.left = posApple_x+'px';
  apple.style.top = posApple_y+'px';
  apx.innerHTML = 'x: '+posApple_x;
  apy.innerHTML = 'y: '+posApple_y;
}

stopBtn.addEventListener('click', stop);
leftBtn.addEventListener('click', startLeft);
rightBtn.addEventListener('click', startRight);
upBtn.addEventListener('click', startUp);
downBtn.addEventListener('click', startDown);
changeApple.addEventListener('click', showApple);