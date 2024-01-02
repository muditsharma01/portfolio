// Navbar Animation

const hideNavWhileScrolling = (id = "navbar", offset = 100, when = true) => {
	const nav = document.getElementById(id);
	if (!nav) return;

	let prevScrollPos = window.scrollY;

	window.onscroll = () => {
		if (when) {
			const curScrollPos = window.scrollY;
			if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
			else nav.style.top = "0";
			prevScrollPos = curScrollPos;
		}
	};
};
hideNavWhileScrolling();

// Menu Show

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu Mobile

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	navMenu.remove.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Sections Active Link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", scrollActive);

// Scroll Revel Animation

const sr = ScrollRevel({
	origin: "top",
	distance: "60px",
	durartion: 2000,
	delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
	delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
