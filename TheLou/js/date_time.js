//  Gleaned from the following URL:
//  https://flexiple.com/javascript/javascript-clock

function currentTime() {
  let date = new Date(); //  Create (instantiate) new Date object
  let hh = date.getHours(); //  Grabbing current hour
  let mm = date.getMinutes(); //  Grabbing current minute
  let ss = date.getSeconds(); //  Grabbing current second
  let session = "AM"; //  AM or PM

  //  If it is the midnight hour,
  //  change hour from 00 to 12.
  if (hh == 0) {
    hh = 12;
  }

  //  If it is greater than 12 p.m.
  //  Subtract 12 from current time.
  //  Change session to PM.
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  //  If necessary, prepend a leading "0"
  //  at the beginning of hours and/or
  //  minutes and/or seconds.
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  //  Set the time and the session (AM or PM)
  let time = hh + ":" + mm + ":" + ss + " " + session;

  //  Bring in the date and put the time after it
  let str = date.toDateString() + " " + time;

  //  Place the date and time in the <span> in the footer.
  document.getElementById("date-time").innerText = str;

  //  Have the seconds, minutes, hours increment as necessary
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
