let done = false;

$("div div i").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div h1").css("font-size", "30px");
        $(this).animate({fontSize: "250px"});
    }
});