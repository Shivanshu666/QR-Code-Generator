let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let text = document.getElementById("input-text");

function generatorQR() {
  if (text.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    imgBox.classList.add("showImg");
  } else {
    text.classList.add("error");
    setInterval(() => {
      text.classList.remove("error");
    }, 1000);
  }
}
