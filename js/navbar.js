$(function () {
    /* menu */
    $(".show-btn").on("click", function () {
        $(this).parent().toggleClass("show");
    });
    $(".menu .blurry").on("click", function () {
        $(this).parent().removeClass("show");
    })
});
