import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // Get the day of the week the month starts on
  let currentMonthCount = 0 - firstDayOfTheMonth; // Start counting from the last days of the previous month
  const daysMatrix = new Array(6).fill(null).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
