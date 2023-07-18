const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error)
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function changeBg() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 400) {
        navbar.classList.remove("bgColor");
    } else{
        navbar.classList.add("bgColor");
    }
}

window.addEventListener("scroll", changeBg);
