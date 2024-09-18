let myTime = setInterval(myClock, 1000);

function myClock() {
  const currentTime = new Date();
  let day = currentTime.getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    default:
      day = "Other day";
      break;
  }
  document.getElementById("time").innerHTML = currentTime.toLocaleTimeString();
  document.getElementById(
    "date"
  ).innerHTML = `${day}, ${currentTime.toLocaleDateString()}`;
}
