let display=document.querySelector('.displayQR');
let img=document.querySelector('.QRimg');
let text=document.querySelector('.QRtext');
generation=()=>{
    if (text.value.length > 0){
        img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
        display.classList.add("show-img");
    }
    else {
        text.classList.add('error');
        setTimeout(()=>{
            text.classList.remove('error');
        },1000)
    }
}