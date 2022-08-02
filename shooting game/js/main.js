//캔버스 세팅
let canvas;

let ctx; 
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;
//우주선 좌표(따로 빼는 이유 : 계속 바뀜)
let spaceshipX = canvas.width/2 -32
let spaceshipY = canvas.height-64
function loadImage(){
  backgroundImage = new Image();
  backgroundImage.src="img/spacebg.jpg"

  spaceshipImage = new Image();
  spaceshipImage.src="img/spaceship.png"

  bulletImage= new Image();
  bulletImage.src="img/bullet.png"


  enemyImage = new Image();
  enemyImage.src="img/enemy.png"

  gameOverImage=new Image();
  gameOverImage.src="img/gameover.jpg"

}


function render(){
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main(){
  render()
  console.log("animation calls main function")
  requestAnimationFrame(main)
}


loadImage();
main();