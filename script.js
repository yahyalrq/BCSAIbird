var obstacle = document.getElementById("obstacle");
var subject = document.getElementById("subject");
var empty = document.getElementById("empty");
var bird = document.getElementById("bird");
var jumping = 0;
var counter = 0;

empty.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    empty.style.top = random + "px";
    counter++;
});
setInterval(function () {
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping == 0) {
        bird.style.top = (birdTop + 3) + "px";
    }
    var obstaclee = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var subjectt = parseInt(window.getComputedStyle(subject).getPropertyValue("left"));
    var subjectt = parseInt(window.getComputedStyle(subject));
    var emptyTop = parseInt(window.getComputedStyle(empty).getPropertyValue("top"));
    var cTop = -(500 - birdTop);
    if ((birdTop > 480) || ((obstaclee < 20) && (obstaclee > -50) && ((cTop < emptyTop) || (cTop > emptyTop + 130)))) {
        alert("Bcsaibird over. Score: " + (counter - 1));
        bird.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

function jump() {
    jumping = 1;
    let counterjump = 0;
    var jumpInterval = setInterval(function () {
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if ((birdTop > 6) && (counterjump < 15)) {
            bird.style.top = (birdTop - 5) + "px";
        }
        if (counterjump > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            counterjump = 0;
        }
        counterjump++;
    }, 10);
}
