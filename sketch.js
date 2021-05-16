var player;
var enemy, enemyGroup; 
var bullet, bulletGroup;
var damageCount = 0;
var ammoCount = 0;

function setup() {
  createCanvas(800,400);
  player = createSprite(100, 200, 20, 80);
  enemyGroup = createGroup();
  bulletGroup = createGroup();

}

function keyPressed() {
  if(keyCode === 32) {
    bullet = createSprite(150, 200, 10, 5);
    bullet.velocityX = 10;
    bulletGroup.add(bullet);
    ammoCount += 1;
    if(ammoCount === 5) {
      ammoCount = 0;
      if(frameCount % 500 === 0) {
        bullet = createSprite(150, 200, 10, 5);
        bullet.velocityX = 10;
        bulletGroup.add(bullet);
      }
    }

    console.log(ammoCount);
  } 
}

function draw() {
  background(50); 
  

  if(bulletGroup.isTouching(enemyGroup)) {
    damageCount = damageCount + 1;
    console.log(damageCount);
  }

  if(damageCount === 7) {
    enemyGroup.destroyEach();
    damageCount = 0;
  }
  spawnEnemy();
  
  drawSprites();
}

function spawnEnemy() {
  if(frameCount % 300 === 0) {
    enemy = createSprite(700, 200, 20, 20);
    enemy.velocityX = -2;
    enemyGroup.add(enemy);
  }
}

