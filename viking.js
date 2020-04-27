/*** EXERCISE 1 ***/
// let h1 = document.getElementsByTagName("h1")
// h1.textContent = `DOM DOM DOM DOM manipulation`
$("h1").text("DOM DOM DOM DOM manipulation")

/*** EXERCISE 2 ***/
// $(".info-box").append("<ol><li>Upcoming One</li><li>Upcoming Two</li></ol>")

$(".info-box").append("<ol><li></li><li></li><li></li></ol>")
$("ol li").text(function(index) {
    return "Upcoming Traversal " + (index + 1)
})