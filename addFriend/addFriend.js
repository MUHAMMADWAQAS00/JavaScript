const statusText = document.querySelector("#status");
const btn = document.querySelector("#add");

let isFriend = false;

btn.addEventListener("click", () => {
  if (!isFriend) {
    statusText.textContent = "Friends";
    statusText.style.color = "green";
    btn.textContent = "Remove Friend";
    btn.style.backgroundColor = "grey";
    isFriend = true;
  } else {
    statusText.textContent = "People You may Know";
    statusText.style.color = "red";
    btn.textContent = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    isFriend = false;
  }
});
