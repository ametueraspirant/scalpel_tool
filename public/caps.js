$.ajax({
	method: "GET",
	url: "/newses"
})
.then(response=> {
	console.log(response);
	response.forEach(element => {
		console.log(element);
		$("#news-pository").append(
			"<h1>HEY DOES THIS WORK</h1>" +
			"<a href = '" + element.link + "'>" + element.title + "</a>"
		);
	});
});

$("#getNews").on("click", ()=> {
	$.ajax({
		method: "GET",
		url: "/getnews"
	})
	.then(()=> {
		window.location.reload();
	})
});

$("#resetNews").on("click", event => {

});