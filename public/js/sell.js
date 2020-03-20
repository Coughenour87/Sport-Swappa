$(document).ready(function() {
  $("#sub").click(function() {
    console.log("clicked");
    const sport = $("#sport option:selected").text();
    const level = $("#level option:selected").text() === "Professional Sports";
    const picture = $("#picture").val();
    const name = $("#title").val();
    const description = $("#description").val();
    const price = $("#price").val();
    $.post("/api/sellItems", {
      link: picture,
      item_name: name,
      price: price,
      sport_name: sport,
      professional: level,
      description: description
    })
      .then(function() {
        window.location.replace("/");
      })
      .catch(sellUserErr);
  });

  function sellUserErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
