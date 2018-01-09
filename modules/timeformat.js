function timeFormat(uptime) {
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime % 3600) / 60);
	var seconds = Math.floor(uptime % 60);

	return hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek. ';
}

exports.print = timeFormat;