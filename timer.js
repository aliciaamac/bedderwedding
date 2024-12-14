const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const deadline = new Date(2025, 9, 11, 15).getTime();


setInterval(() => {
	var currentTime = new Date().getTime();

	// get total seconds between the times
	var delta = Math.abs(deadline - currentTime) / 1000;

	// calculate (and subtract) whole days
	var d = Math.floor(delta / 86400);
	delta -= d * 86400;

	// calculate (and subtract) whole hours
	var h = Math.floor(delta / 3600) % 24;
	delta -= h * 3600;

	// calculate (and subtract) whole minutes
	var m = Math.floor(delta / 60) % 60;
	delta -= m * 60;

	// what's left is seconds
	var s = Math.floor(delta % 60);

	days.innerHTML = d;
	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
}, 500)