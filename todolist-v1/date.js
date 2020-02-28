module.exports = datesend;

function datesend(){
  let date = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var dayval = date.toLocaleDateString("en-US",options);
  return dayval;

}
