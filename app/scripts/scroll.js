require('smoothscroll');
const ele = document.getElementsByClassName('hero').item(0);
const btn = document.getElementById('back-to-top');

function isScrolledIntoView (el) {
	const rect = el.getBoundingClientRect();
	const elemTop = rect.top;
	const elemBottom = rect.bottom;
	// const isCompletelyVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// const isPartiallyVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

window.onscroll = function () {
	return isScrolledIntoView(ele) ? btn.style.opacity = '0' : btn.style.opacity = '1';
};
