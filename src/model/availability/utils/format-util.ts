const re4Date = /^\d{4}-\d{2}-\d{2}$/;
const re4Time = /^\d{2}:\d{2}$/;

function execRegexForDate(date: string): boolean {
  return !!re4Date.exec(date);
}

function execRegexForTime(time: string): boolean {
  return !!re4Time.exec(time);
}

function validateTimeFormat(times: string[]) {
  const someInvalidTimes = times
    .map((time: string) => execRegexForTime(time))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .some((isValid, _, __) => !isValid);

  if (someInvalidTimes)
    throw new Error('Some time(s) prepared in invalid format.');
}

function validateDateFormat(dates: string[]) {
  const someInvalidDates = dates
    .map((date: string) => execRegexForDate(date))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .some((isValid, _, __) => !isValid);

  if (someInvalidDates)
    throw new Error('Some date(s) prepared in invalid format.');
}

export {
  execRegexForDate,
  execRegexForTime,
  validateTimeFormat,
  validateDateFormat,
};
