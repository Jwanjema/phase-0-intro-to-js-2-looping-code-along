function writeCards(names) {
  const thankYouMessages = []; // Create an empty array to store messages
  for (let i = 0; i < names.length; i++) {
    // Push each formatted message into the array
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thankYouMessages; // Return the array of messages
}

/**
 * Logs numbers from the given number down to 0 (inclusive) to the console.
 *
 * @param {number} num - The starting number to count down from.
 */
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}