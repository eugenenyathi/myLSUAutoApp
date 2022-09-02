const resetBtn = document.getElementById("reset-btn");
const setRoommates = document.getElementById("set-roommates");
const allocateRooms = document.getElementById("allocate-rooms");
const responseContainer = document.getElementById("response-container");

resetBtn.addEventListener("click", (ev) => {
  const url = "./includes/reset.inc.php";
  fetchReq(url);
});

setRoommates.addEventListener("click", (ev) => {
  const url = "./includes/set-roommates.inc.php";
  fetchReq(url);
});

allocateRooms.addEventListener("click", (ev) => {
  const url = "../myLSU/includes/allocate-room.inc.php";
  fetchReq(url);
});

function fetchReq(url) {
  fetch(url)
    .then((res) => res.text())
    .then((res) => {
      responseContainer.innerHTML = res;
    });
}
