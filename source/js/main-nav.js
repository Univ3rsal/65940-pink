
	var popup = document.querySelector(".page-header__toggle");
	var nav = document.querySelector(".main-nav");
	var close = document.querySelector(".main-nav__toggle-cross");
 

	popup.addEventListener("click", function(event) {
		event.preventDefault();
		nav.classList.add("main-nav--show");
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		nav.classList.remove("main-nav--show");
	});
