let done = false;

$("div div").on("click", function () {
    if (!done) {
        $("div h1").text("Люблю тебя!");
        $("div h1").css("font-size", "40px");
        $("div div:nth-of-type(2)").hide();
        $("div div:first-of-type").animate({fontSize: "250px"});
    }
});