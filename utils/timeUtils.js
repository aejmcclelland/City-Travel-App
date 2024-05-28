//utils/timeUtils.js
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const formatTime = (time) => {
	const timeString = time.toString().padStart(4, '0');
	console.log('Formatted Time String:', timeString);
	const formattedTime = dayjs(timeString, 'HHmm').format('hA').toLowerCase(); // format without leading zero and without minutes if zero
	console.log('Formatted Time:', formattedTime);
	return formattedTime;
};

export const formatTimeRange = (openingTime, closingTime) => {
	const formattedOpeningTime = formatTime(openingTime);
	const formattedClosingTime = formatTime(closingTime);
	return `${formattedOpeningTime.toLowerCase()} - ${formattedClosingTime.toLowerCase()}`;
};

export const getTimeStatus = (closingTime) => {
	const currentTime = dayjs();
	const closingTimeString = closingTime.toString().padStart(4, '0');
	const formattedClosingTime = dayjs(closingTimeString, 'HHmm');
	console.log('Current Time:', currentTime.format('h:mm A'));
	console.log('Formatted Closing Time:', formattedClosingTime.format('h:mm A'));

	if (currentTime.isAfter(formattedClosingTime)) {
		return 'Closed';
	} else if (formattedClosingTime.diff(currentTime, 'minute') <= 60) {
		return 'Closing in the next hour';
	}
	return null;
};
