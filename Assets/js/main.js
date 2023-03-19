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
	// time show
	(texthour.innerHTML = `${hh}:`), (textminute.innerHTML = `${mm}`);
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
};
setInterval(clockText, 1000);
