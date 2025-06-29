let done = false;

$("div div i").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div h1").css({fontSize: "30px", color: "red"});
        $(this).animate({fontSize: "250px"});
    }
});