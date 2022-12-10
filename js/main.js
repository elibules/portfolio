$(document).ready(() => {
  setNav();
});

window.addEventListener("hashchange", (e) => {
  setNav();
});

function setNav() {
  let hash = window.location.hash.replace("#", "");
  $("a").css("color", "#015b7b");
  $("a").removeClass("active-link");
  if (hash != "") {
    fetchContent(hash);
    $("#nav-" + hash).css("color", "#eaac0b");
    $("#nav-" + hash).addClass("active-link");
  } else {
    fetchContent("work");
    $("#nav-work").css("color", "#eaac0b");
    $("#nav-work").addClass("active-link");
  }
}

async function fetchContent(page) {
  $("#page-content").hide();
  $("#page-header").html(page);

  $.get("content/" + page + ".html", (data) => {
    $("#page-content").html(data).show(400);
  });
}
