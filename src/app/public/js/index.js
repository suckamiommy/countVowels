$(document).ready(function () {
  // handler submit form
  $("#countVowels").on("submit", async function (e) {
    e.preventDefault();

    // Get data and call api to calculate vowels in words
    const data = $("textarea#data").val();
    const count = await axios.post("/api/count-vowels", { data });

    // Handler result
    switch (count.data.data) {
      // Input invalid
      case "INPUT_INVALID":
        $(".result").html("Plese fill in your words.");
        $(".result").css("background-color", "lightcoral");
        break;
      // Api throw error
      case "CANT_COUNT_THIS_WORDS":
        $(".result").html("Something wrong please try again.");
        $(".result").css("background-color", "lightcoral");
        break;
      // Success
      default:
        $(".result").html(`Number of vowels is: ${count.data.data}`);
        $(".result").css("background-color", "lightgreen");
    }
    $(".result").css("display", "block");
  });
});
