$.ajax({
	method: "GET",
	url: "/newses"
})
.then(response=> {
	console.log(response);
	response.forEach((element, index) => {
		$("#news-pository").append(
			"<div class = 'pt-5 px-5 font-semibold leading-loose blend-multiply " + (index%2?'bg-blue-500':'bg-gray-200')+ "'>" +
				"\n<a href = '" + element.link + "'>" + element.title + "</a><br><br>" +
			"\n</div>"
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

$("#resetNews").on("click", ()=> {
	$.ajax({
		method: "GET",
		url: "/clearnews"
	})
	.then(()=> {
		window.location.reload();
	});
});