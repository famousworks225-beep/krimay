
async function loadHTML(id, filePath) {
    try {
        let response = await fetch(filePath);
        let html = await response.text();
        document.getElementById(id).innerHTML = html;
        return true; // loaded successfully
    } catch (error) {
        console.log("Could not load:", filePath);
        return false;
    }
}

(async function () {

    //load navbar from components/ folder first
    let navbarLoaded = await loadHTML("navbar", "components/navbar.html");
    // After navbar loads to load navbar.js
    if (navbarLoaded) {
        let script = document.createElement("script");
        script.src = "js/navbar.js";
        document.body.appendChild(script);
    }
    //load footer from components/ folder first
    let footerLoaded = await loadHTML("footer", "components/footer.html");

})();
