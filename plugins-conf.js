// pdfexport plugin
pdfExportShortcut: 'E',


// shortcut for showing all fragments
skipFragmentsShowShortcut: 'V',
// shortcut for hiding all fragments
skipFragmentsHideShortcut: 'C',


// elapsed time-bar config
// - (required) your allotted time for presentation
allottedTime: 30 * 60 * 1000, // 30 minutes
// - (optional) height of page/time progress bar
progressBarHeight: 3,
// - (optional) bar color
barColor: 'rgb(200,0,0)',
// - (optional) bar color when timer is paused
pausedBarColor: 'rgba(200,0,0,.6)',


verticator: {
	darktheme: true,
	color: 'white',
	// color: 'black',
	// oppositecolor: 'white',
	// skipuncounted: false,
	clickable: true
},


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

	// pause/resume elapsed time bar with ENTER
    13: function() { ElapsedTimeBar.isPaused ? ElapsedTimeBar.resume() : ElapsedTimeBar.pause(); },
    // reset timer when 'r' is pressed
    82: function() { ElapsedTimeBar.reset(); },
}
