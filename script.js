document.querySelector(".option-one").addEventListener("click", function () {
  document.querySelector(".story-opening").style.display = "none";
  document.querySelector(".option-one-screen").style.display = "block";
  document.querySelector(".buttons").innerHTML = '<button onclick="showEndOne()">Accept Leadership</button>';
});

document.querySelector(".option-two").addEventListener("click", function () {
  document.querySelector(".story-opening").style.display = "none";
  document.querySelector(".option-two-screen").style.display = "block";
  document.querySelector(".buttons").innerHTML = '<button onclick="showEndTwo()">Explore the Jungle</button>';
});

function showEndOne() {
  document.querySelector(".option-one-screen").style.display = "none";
  document.querySelector(".option-one-end").style.display = "block";
  document.querySelector(".buttons").style.display = "none";
}

function showEndTwo() {
  document.querySelector(".option-two-screen").style.display = "none";
  document.querySelector(".option-two-end").style.display = "block";
  document.querySelector(".buttons").style.display = "none";
}
