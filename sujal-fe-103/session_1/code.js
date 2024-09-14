const seladdbtn = document.getElementById("add");
const selsubbtn = document.getElementById("sub");
const selele = document.getElementById("count");

let count = 0;

function add() {
  count = count + 1;
  selele.innerHTML = count;
}

seladdbtn.addEventListener("click", add);

function sub() {
  if (count === 0) {
    return;
  } else {
    count = count - 1;
    selele.innerHTML = count;
  }
}

selsubbtn.addEventListener("click", sub);
