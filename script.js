// ===============================
// DARK MODE TOGGLE
// ===============================

const darkBtn = document.getElementById("darkBtn");


// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    darkBtn.innerHTML = "☀️";

}



// Toggle dark mode

darkBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){


        darkBtn.innerHTML="☀️";


        localStorage.setItem("theme","dark");


    }

    else{


        darkBtn.innerHTML="🌙";


        localStorage.setItem("theme","light");


    }


});