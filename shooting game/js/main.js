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

let keysDown={};
function setupKeyboardListener(){
  document.addEventListener('keydown',function(event){
    // console.log("무슨 키가 눌렸어?", event.keyCode)
    keysDown[event.keyCode] = true;
    // console.log("키다운객체에 들어간 값은?" ,keysDown);
  });
  document.addEventListener('keyup',function(event){
    delete keysDown[event.keyCode]
    console.log("버튼 클릭후",keysDown);
  })
}


function update(){
  if(39 in keysDown){
    spaceshipX +=5; //우주선의 속도
  }//right

  if(37 in keysDown){
    spaceshipX -=5;
  } //left
  if(spaceshipX <= 0){
    spaceshipX = 0
  }
  if(spaceshipX >= canvas.width-64){
    spaceshipX = canvas.width-64;
  }
  //우주선의 좌표값이 무한대로 업데이트가 되는게 아닌! 경기장 안에서만 있게하려면



}

function render(){
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main(){
  update(); //좌표값을 업데이트하고
  render(); //그려주고
  // console.log("animation calls main function")
  requestAnimationFrame(main)
}


loadImage();
setupKeyboardListener();

main();

//우주선이 오른쪽으로 간다 : x좌표의 값이 증가한다.
//우주선이 왼쪽 간다 : x좌표의 값이 감소한다.