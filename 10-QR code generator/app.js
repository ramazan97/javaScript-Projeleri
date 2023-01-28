document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    var link = document.getElementById("link").value;
    var qr = qrcode(0, "L");
    qr.addData(link);
    qr.make();
    document.getElementById("qrcode").innerHTML = qr.createImgTag();
  });
