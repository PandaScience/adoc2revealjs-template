function addVerticatorUl(e) {
	let reveal = document.getElementsByClassName("reveal")[0];
	let verticator = document.createElement("ul");
	verticator.className = "verticator";
	reveal.prepend(verticator);
}

// inject <ul> for the verticator plugin
addVerticatorUl();
