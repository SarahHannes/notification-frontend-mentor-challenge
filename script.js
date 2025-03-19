const markReadElem = document.querySelector(".mark-as-read");
const unreadIcons = document.querySelectorAll(".unread");
const unreadNotifs = document.querySelectorAll(".unread-notif");
const unreadBadge = document.querySelector(".badge");

markReadElem.addEventListener("click", function () {
  unreadIcons.forEach((element) => {
    element.classList = [];
  });

  unreadNotifs.forEach((element) => {
    element.classList.remove("unread-notif");
  });

  unreadBadge.textContent = "0";
});
