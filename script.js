var isDate = function (input) {
   if (Object.prototype.toString.call(input) === '[object Date]') {
    // Check if it's a valid Date object
    return !isNaN(input.getTime());
  }

  // Check if the input is a string
  if (typeof input === 'string') {
    // Try to parse the string into a Date object
    const parsedDate = new Date(input);

    // Check if the parsedDate is a valid Date object
    return !isNaN(parsedDate.getTime());
  }

  
  return false;
};// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
