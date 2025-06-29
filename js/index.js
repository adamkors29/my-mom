let done = false;

$("div div").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $(this).animate({fontSize: "250px"});
    }
});