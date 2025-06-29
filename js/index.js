let done = false;

$("div div i").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div").css("font-size", "40px");
        $(this).animate({fontSize: "250px"});
    }
});