// pdfexport plugin
pdfExportShortcut: 'E',

// Shortcut for showing all fragments
skipFragmentsShowShortcut: 'V',
// Shortcut for hiding all fragments
skipFragmentsHideShortcut: 'C',

// use e.g. https://keycode.info to find keycodes
keyboard: {
	// use PgUp and PgDown to change slides while skipping all fragments
	33: function() {
			let idx = Reveal.getIndices()
			let routes = Reveal.availableRoutes()
			if( routes.up ){
				console.log("up")
				Reveal.slide(idx.h, idx.v - 1);
			} else if( routes.left ){
				console.log("left")
				Reveal.slide(idx.h - 1);
			}
			SkipFragments.showAll()
		},
	34: function() {
			let idx = Reveal.getIndices()
			let routes = Reveal.availableRoutes()
			if( routes.down ){
				console.log("down")
				Reveal.slide(idx.h, idx.v + 1);
			} else if( routes.right ){
				console.log("right")
				Reveal.slide(idx.h + 1);
			}
			SkipFragments.showAll()
		},
}
