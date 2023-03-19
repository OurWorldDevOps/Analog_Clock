setInterval(() => {
	d = new Date();

	htime = d.getHours();
	mtime = d.getMinutes();
	stime = d.getSeconds();

	hrotation = 30 * htime + mtime / 2;
	mrotation = 6 * mtime;
	srotation = 6 * stime;

	clock_hour.style.transform = `rotate(${hrotation}deg)`;
	clock_minutes.style.transform = `rotate(${mrotation}deg)`;
	clock_seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// digital clock

const texthour = document.getElementById("text_hour"),
	textminute = document.getElementById("text_minutes"),
	textsecond = document.getElementById("text_seconds"),
	textampm = document.getElementById("text_ampm"),
	dateday = document.getElementById("date-day"),
	datemonth = document.getElementById("date-month"),
	dateyear = document.getElementById("date-year");

const clockText = () => {
	let date = new Date();
	let hh = date.getHours(),
		ampm,
		mm = date.getMinutes(),
		ss = date.getSeconds(),
		day = date.getDate(),
		month = date.getMonth(),
		year = date.getFullYear();

	// am pm
	if (hh >= 12) {
		hh = hh - 12;
		ampm = "PM";
	} else {
		ampm = "AM";
	}
	//show am or pm
	textampm.innerHTML = ampm;
	// detect when 0 am and transform to 12 am
	if (hh == 0) {
		hh = 12;
	}
	// show a zero before the hour
	if (hh < 10) {
		hh = `0${hh}`;
	}
	// show a zero before the minute
	if (mm < 10) {
		mm = `0${mm}`;
	}
	// time show
	(texthour.innerHTML = `${hh}:`),
		(textminute.innerHTML = `${mm}:`),
		(textsecond.innerHTML = `${ss}`);
	// show the day ,month and year
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	(dateday.innerHTML = day), (datemonth.innerHTML = `${months[month]},`);
	dateyear.innerHTML = year;
};

setInterval(clockText, 1000);

// dark /light mode theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
