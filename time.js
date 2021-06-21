const today = new Date(); // current time by default
// 2021-06-21T04:28:24.885Z

const todayString = today.toString(); // typeof string
// Sun Jun 20 2021 21:27:17 GMT-0700 (Pacific Daylight Time)

const birthday = new Date('12-24-1994');
// 1994-12-24T08:00:00.000Z

const birthdayWithTime = new Date('12-24-1994 05:50:00').toString();
// Sat Dec 24 1994 05:50:00 GMT-0800 (Pacific Standard Time)

const birthday2 = new Date('December 24 1994').toString();
// Sat Dec 24 1994 00:00:00 GMT-0800 (Pacific Standard Time)

const birthday3 = new Date('12/24/1994').toString();
// Sat Dec 24 1994 00:00:00 GMT-0800 (Pacific Standard Time)

const bMonth = birthday.getMonth();
// 11 (months are zero based)

const bDate = birthday.getDate();
// 24

const bDay = today.getDay();
// 6 (numerical representation of day of week. 0 based)

const bYear = birthday.getFullYear();
// 1994

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const ms = today.getMilliseconds();

const timeStamp = today.getTime();
// 1624252829257 Unix time number of milliseconds elapsed since January 1, 1970

const newDay = new Date();
newDay.setFullYear(1985);
newDay.setMonth(2);
newDay.setDate(12);
newDay.setHours(3);
newDay.setMinutes(30);
newDay.setSeconds(25);
// Tue Mar 12 1985 03:30:25 GMT-0800 (Pacific Standard Time)


console.log(birthday);