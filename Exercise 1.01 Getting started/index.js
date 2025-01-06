var random = require("random-string-generator");

let value = random(32, "alphanumeric");

const getStringValue = () => {
  const currentTimestamp = new Date().toISOString();
  console.log(currentTimestamp, " ", value);
  setTimeout(getStringValue, 5000);
};

getStringValue();
