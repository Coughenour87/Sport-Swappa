$(document).ready(function() {
  //   var sellForm = $("form.sell");
  //   var itemInput = $("input#item-input");
  //   var priceInput = $("input#price-input");

  //   sellForm.on("submit", function(event) {
  //     event.preventDefault();
  //     var userItem = {
  //       item: itemInput.val().trim(),
  //       price: priceInput.val().trim()
  //     };

  //     if (!userItem.item || !userItem.price) {
  //       return;
  //     }
  //     sellUser(userItem.item, userItem.price);
  //     itemInput.val("");
  //     priceInput.val("");
  //   });
  $("#sub").click(function() {
    console.log("clicked");
    const sport = $("#sport option:selected").text();
    const level = $("#level option:selected").text() === "Professional Sports";
    const picture = $("#picture").val();
    const name = $("#price").val();
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
        window.location.replace("/items");
      })
      .catch(sellUserErr);
  });

  function sellUserErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
