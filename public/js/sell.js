$(document).ready(function() {
  var sellForm = $("form.sell");
  var itemInput = $("input#item-input");
  var priceInput = $("input#price-input");

  sellForm.on("submit", function(event) {
    event.preventDefault();
    var userItem = {
      item: itemInput.val().trim(),
      price: priceInput.val().trim()
    };

    if (!userItem.item || !userItem.price) {
      return;
    }
    sellUser(userItem.item, userItem.price);
    itemInput.val("");
    priceInput.val("");
  });

  function sellUser(item, price) {
    $.post("/api/sellItems", {
      item: item,
      price: price
    })
      .then(function() {
        window.location.replace("/sell");
      })
      .catch(sellUserErr);
  }

  function sellUserErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

sellItems;
