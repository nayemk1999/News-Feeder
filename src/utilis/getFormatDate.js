export function getFormatDate(currentDate) {
  // Options for formatting the date
  const options = {
    weekday: "long", // full day of the week (e.g., Thursday)
    month: "long", // full month name (e.g., February)
    day: "numeric", // day of the month (e.g., 25)
    year: "numeric", // full year (e.g., 2021)
  };

  // Get the formatted date string
  return currentDate.toLocaleDateString("en-US", options);
}
