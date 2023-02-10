const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
	navbarNav.classList.toggle("active");
};

document.addEventListener('click', function(e) {
	if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});

