$(document).ready(() => {
  setNav();
});

window.addEventListener("hashchange", (e) => {
  setNav();
});

function setNav() {
  let hash = window.location.hash.replace("#/", "");
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
  $("#page-header").html(page);

  $.get("content/" + page + ".html", (data) => {
    $("#page-content").html(data).hide();
    $("#page-content").html(data).show(400);
    if (page === "work") {
      $.get("json/work.json", (data) => {
        for (let i in data) {
          $("#work-content").append(
            `
            <div class="work-item" id="work${i}">
              <a style='background-image: url("img/${data[i].img}")' href="${data[i].link}" target="_blank">
              </a>
              <p class="work-title">${data[i].title}</p>
              <p class="work-desc">${data[i].description}</p>
            </div>
          `
          );

          // $("#work" + i).hide();
          // $("#work" + i).slideToggle(500 * i);
        }
      });
    }
  });
}
