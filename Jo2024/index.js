let sidenav = document.querySelector(".sidenav");
let trigger = document.querySelector(".sidenav-trigger");

trigger.addEventListener("click", () => {
  sidenav.classList.contains("active") ? sidenav.classList.remove("active") : sidenav.classList.add("active");
});
