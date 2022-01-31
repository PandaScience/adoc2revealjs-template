function addVerticatorUl(e) {
	let reveal = Reveal.getRevealElement();
	let verticator = document.createElement("ul");
	verticator.className = "verticator";
	reveal.prepend(verticator);
}

// inject <ul> for the verticator plugin
addVerticatorUl();
