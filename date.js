// function to display the date today
exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
  // console.log(day);
};

// function to display only the day today
exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
  // console.log(day);
};
