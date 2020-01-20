function addingEventListener() {
  alert("I clicked the input")
}
let input = document.getElementById("input");
input.addEventListener("click",addingEventListener());
