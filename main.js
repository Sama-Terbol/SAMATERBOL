let div = document.querySelector(".icon");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   div .classList.add("show");
  // } else {
  //   div .classList.remove("show");
  // }
this.scrollY >= 1000 ? div.classList.add("show") : div.classList.remove("show");
};

div.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};