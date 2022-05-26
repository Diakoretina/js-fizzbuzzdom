let container = document.getElementById("cont");
for (i = 1; i < 101; i++) {
    let box = document.getElementById("cont").appendChild(document.createElement("div"));
    box.className = "box";
    box.innerText = "" + i;
    if (i % 3 == 0) {
      box.innerText = "fizz";
      box.classList.add("box1");
    }
    if (i % 5 == 0) {
      box.innerText = "buzz";
      box.classList.add("box2");
    }
    if (i % 15 == 0) {
      box.innerText = "fizzbuzz";
      box.classList.add("box3");
    }
    container.appendChild(box);
  }