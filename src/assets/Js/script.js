document.addEventListener("scroll", function() {
    const navbar = document.getElementById("NavBarMain");
    if (window.scrollY > 50) {
        navbar.style.background = "black"
    } else {
        navbar.style.background = "trasprent"
    }
});
