const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');


function generateQR(){
    if(qrText.value.length > 0){
        imgBox.classList.remove("error");
        qrImage.src = url + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        imgBox.classList.remove("show-img");
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}