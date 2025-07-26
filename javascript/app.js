let theWheel = new Winwheel({
  numSegments: 8,
  outerRadius: 200,
  drawText: true,
  textFontSize: 15,
  textOrientation: "curved",
  textAlignment: "inner",
  textMargin: 30,
  textStrokeStyle: "black",
  textLineWidth: 2,
  lineWidth: 1,
  innerRadius: 50,
  responsive: true,
  drawMode: "segmentImage",

  segments: [
    {
      textStrokeStyle: "#fff",
      textFontSize: 10,
      image: "/img/tom2.png",
      text: "BABYDOGE",
    },
    { textStrokeStyle: "#fff", image: "/img/tom4.png", text: "BNB" },
    { textStrokeStyle: "#fff", image: "/img/tom2.png", text: "USDT" },
    { textStrokeStyle: "#fff", image: "/img/tom3.png", text: "ADA" },
    { textStrokeStyle: "#fff", image: "/img/tom4.png", text: "TRX" },
    { textStrokeStyle: "#fff", image: "/img/tom5.png", text: "PHB" },
    { textStrokeStyle: "#fff", image: "/img/tom6.png", text: "BTCST" },
    { textStrokeStyle: "#fff", image: "/img/tom7.png", text: "LUNAC" },
    { textStrokeStyle: "#fff", image: "/img/tom8.png", text: "DC" },
  ],
  pins: {
    number: 16,
    outerRadius: 3,
    margin: 1,
    fillStyle: "#55CAEE",
    strokeStyle: "#ffffff",
  },
  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 8,
    responsive: true,
    callbackFinished: alertPrize,
  },
});

// -----------------------------------------------------------------------

let audio = new Audio("/img/tick.mp3");
let wheelPower = 0;
let wheelSpinning = false;

// -------------------------------------------------------
// Click handler for spin button.
function startSpin() {
  const input = document.getElementById("setNumber").value;

  console.log(theWheel.segments.length);

  if (input === "" || input < 0 || input > 8 || input == 0) {
    alert(" :) عددی بین 1 تا 8 وارد کنید");
    theWheel.animation.stopAngle = stopLocation;
    theWheel.startAnimation();
    wheelSpinning = false;
  } else if (parseInt(input) === null) return;
  let stopLocation;
  switch (input) {
    case "1":
      stopLocation = 25;
      break;
    case "2":
      stopLocation = 65;
      break;
    case "3":
      stopLocation = 115;
      break;
    case "4":
      stopLocation = 155;
      break;
    case "5":
      stopLocation = 210;
      break;
    case "6":
      stopLocation = 245;
      break;
    case "7":
      stopLocation = 295;
      break;
    case "8":
      stopLocation = 355;
      break;
    default:
      stopLocation = 0;
  }
  // this function use for stop animation - >
  theWheel.animation.stopAngle = stopLocation;
  theWheel.startAnimation();
  wheelSpinning = true;

  setTimeout(function () {
    toggleConfetti();
  }, 5000);
}

// -------------------------------------------------------
function alertPrize(indicatedSegment) {
  document.getElementById("textWheel").innerText = `!تبریک
  شده اید${indicatedSegment.text} شما برنده ی
  `;

  document.getElementById("imgWheel").innerHTML = `
     <img src="${indicatedSegment.image}">
     `;
}
