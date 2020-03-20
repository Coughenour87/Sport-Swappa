$(".buy").on("click", function(event) {
  event.preventDefault();
  var id = $(this).data("itemid");
  console.log(id);
  
  var storedIds = JSON.parse(localStorage.getItem("storedIds") || "[]");
  storedIds.push(id);
  localStorage.setItem("storedIds", JSON.stringify(storedIds));
  window.location.assign("/cart");
});
