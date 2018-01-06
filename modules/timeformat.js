function timeFormat(uptime) {
	var hours = (uptime / 3600).toFixed(0);
	var minutes = ((uptime % 3600)/60).toFixed(0);
	var seconds = (uptime % 60);

return (hours + 'godz.' + minutes + 'min.' + seconds + 'sek.');
}

exports.print = timeFormat;