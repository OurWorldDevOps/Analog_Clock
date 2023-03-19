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
