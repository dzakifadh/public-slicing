import { tns } from "tiny-slider/src/tiny-slider";
import "/node_modules/tiny-slider/src/tiny-slider.scss";

var slider = tns({
	container: "#logo-brands",
	mouseDrag: true,
	swipeAngle: false,
	nav: false,
	autoplayButtonOutput: false,
	controls: false,
	autoplay: true,
	speed: 500,
	responsive: {
		0: {
			items: 1.1,
		},
		320: {
			items: 1.2,
		},
		360: {
			items: 1.3,
		},
		380: {
			items: 1.4,
		},
		768: {
			items: 2,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	},
});
