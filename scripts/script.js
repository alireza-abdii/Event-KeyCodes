let $ = document;

let keycodeTitle = $.getElementById("keycode-intro");
let keycodeResult = $.getElementById("keycode-result");
let keycodeAscii = $.getElementById("keycode-ascii");
let eventKeyContainer = $.getElementById("key");
let eventLocationContainer = $.getElementById("location");
let eventWhichContainer = $.getElementById("ascii");
let eventCodeContainer = $.getElementById("code");

$.body.addEventListener("keydown", function (event) {
  event.preventDefault();

  keycodeTitle.style.display = "none";
  keycodeResult.style.display = "flex";
  

  let eventKey = event.key;
  let eventLocation = event.location;
  let eventWhich = event.which;
  let eventCode = event.code;

  keycodeAscii.innerHTML = eventWhich;
  eventKeyContainer.innerHTML = eventKey;
  eventLocationContainer.innerHTML = eventLocation;
  eventWhichContainer.innerHTML = eventWhich;
  eventCodeContainer.innerHTML = eventCode;
});
