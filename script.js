const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn =container.querySelector(".form button"),
qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click", function ()  {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", function () {
        generateBtn.innerText = "Gerar Qr Code"
        container.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", function ()  {
    if(!qrInput.value){
        container.classList.remove("active");
    }
});