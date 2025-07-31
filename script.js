const qrText = document.getElementById("qr-text");
const qrSize = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBody = document.getElementById("qr-body");

let qr;

// Generate QR Code
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = qrText.value.trim();
  const size = qrSize.value;

  qrBody.innerHTML = "";

  if (text === "") {
    alert("Please enter some text or URL!");
    return;
  }

  qr = new QRCode(qrBody, {
    text: text,
    width: size,
    height: size,
  });
});

// Download QR Code
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!qr) {
    alert("Please generate a QR code first.");
    return;
  }

  const img = qrBody.querySelector("img");

  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
  } else {
    const canvas = qrBody.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qr-code.png";
      link.click();
    }
  }
});
