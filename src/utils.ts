export const dateStringToDate = (dataString: string): Date => {
  // example 27/10/2018
  const dateParts = dataString
    .split('/') /* ['27', '10', '2018'] */
    .map((value: string): number => {
      return parseInt(value);
    });
  // return arrays display the date as Year, Month, and Day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
