$(document).ready(function() {
  $("#ice-cream").submit(function(event) {
    event.preventDefault();
    const flavorOne = $("#flavor-1").val();
    const flavorTwo = $("#flavor-2").val();
    const flavorThree = $("#flavor-3").val();
    const flavorFour = $("#flavor-4").val();
    const flavors = [flavorOne, flavorTwo, flavorThree, flavorFour]
    // let newFlavors = [];

    flavors.forEach(function(flavor) {
      $("#result").append("<li>You love this flavor " + flavor + "! </li>")
    })
  })
})