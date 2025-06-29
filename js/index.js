let done = false;

$("div div i").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div").css("background-color", "yellow");
        $(this).animate({fontSize: "250px"});
    }
});