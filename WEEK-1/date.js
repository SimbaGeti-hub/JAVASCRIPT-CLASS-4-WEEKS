// 1. Creating a Date object (current date and time)
const now = new Date();

// 2. Getting the full year
const year = now.getFullYear(); // e.g., 2025

// 3. Getting the month (0 = January, 11 = December)
const month = now.getMonth(); // Add 1 if you want 1-12 format

// 4. Getting the date (day of the month)
const date = now.getDate(); // e.g., 1 - 31

// 5. Getting the day of the week (0 = Sunday, 6 = Saturday)
const day = now.getDay(); // e.g., 0 - 6

// 6. Getting the hours
const hours = now.getHours(); // e.g., 0 - 23

// 7. Getting the minutes
const minutes = now.getMinutes(); // e.g., 0 - 59

// 8. Getting the seconds
const seconds = now.getSeconds(); // e.g., 0 - 59

// Output everything
console.log("Current Date and Time Info:");
console.log("Year:", year);
console.log("Month:", month + 1); // +1 for human-friendly month
console.log("Date:", date);
console.log("Day of Week:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
