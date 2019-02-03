
$("#TaskList").on("click","li", function () {
    $(this).toggleClass("Done");
})

$("#TaskList").on("click","li span",function (e) {
    e.stopPropagation();

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
})

$("input").keydown(function (e) {
    if (e.which !== 13)
        return;
    $("ul").append("<li><span class='Task'><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>")
    $(this).val("");
})

$("#Togle").click(function () {
    $("input").fadeToggle();
})