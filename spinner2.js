const spinArr = ["\r|   ", '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const spinner = function(str) {
  let delay = 100;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 200;
  }
  setTimeout(() => {
    console.log("\n");
  }, delay);
};

spinner(spinArr);
