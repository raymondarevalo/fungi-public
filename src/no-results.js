var a = document.querySelectorAll(".featured-collection-section");
console.log("outside");
for (var i = 0; i < a.length; i++) {
  console.log("test");
  if (document.getElementById("no-results")) {
    console.log("test2");
    a[i].classList.add("view-collection");
  } else {
    console.log("test3");
    a[i].classList.remove("view-collection");
  }
}
