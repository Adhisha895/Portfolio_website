const darkBtn = document.getElementById("darkBtn");


darkBtn.onclick = () => {


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️";

}

else{

darkBtn.innerHTML="🌙";

}


};
