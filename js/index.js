let done = false;

$("div div i").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div div i").css({fontSize: "30px"});
        $(this).animate({fontSize: "250px"});
    }
    console.log("test");
});