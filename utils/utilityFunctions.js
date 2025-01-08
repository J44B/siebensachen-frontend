import { differenceInDays } from 'date-fns';

// format dates

export function convertDate(date) {
    const splitDate = date.split('-'); // returns an array like ["2024", "10", "03"]
    const reversedDate = splitDate.toReversed();
    const joinedDate = reversedDate.join('.');
    return joinedDate.toString();
}

// get number of days

export function calculateDays(startDate, endDate) {
    const days = differenceInDays(startDate, endDate);
    return days;
}
