$(document).ready(() => {
  setNav();
});

window.addEventListener("hashchange", (e) => {
  setNav();
});

function setNav() {
  let hash = window.location.hash.replace("#", "");
  $("a").css("color", "#015b7b");
  if (hash != "") {
    console.log(hash);
    fetchContent(hash);
    $("#nav-" + hash).css("color", "#eaac0b");
  } else {
    fetchContent("work");
    $("#nav-work").css("color", "#eaac0b");
  }
}

function fetchContent(page) {
  console.log(page);
}
