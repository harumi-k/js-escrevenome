
function setup() {
2
  createCanvas(600, 600);
3
  background("white");
4
}
5
​
6
function draw() {
7
  
8
  stroke("blue");
9
  fill("red");
10
​
11
  // console.log(mouseIsPressed);
12
​
13
  if (mouseIsPressed) {
14
    rect(mouseX, mouseY, 20, 35);
15
  }
16
}
17
​
