import formatDistance from 'date-fns/formatDistance';

export function formatDate(date: string) {
	return formatDistance(new Date(), new Date(date));
}
