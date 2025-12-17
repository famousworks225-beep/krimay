class SpecialNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `   
   <nav>
        <div class="navbar-cont">
            <!--navbar logo-->
            <div class="logo">
                <img src="assests/images/logo.webp" alt="logo" class="logo-img">
            </div>

            <!--hamburger-->
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <!--navbar actions-->
            <div class="navbar-actions">
                <ul class="navbar-actions-list">
                    <li class="actions-list"><a href="index.html" class="actions-link active">Home</a></li>
                    <li class="actions-list"><a href="about.html" class="actions-link">About us</a></li>
                    <li class="actions-list"><a href="product.html" class="actions-link">Products</a></li>
                    <li class="actions-list"><a href="career.html" class="actions-link">Careers</a></li>
                    <li class="actions-list"><a href="contact.html" class="actions-link">Contact us</a></li>
                </ul>
            </div>
            <div class="navbar-btn">
                <a href="#" class="start-btn">Start Learning</a>
            </div>
        </div>
        <!--mobile menu (shown below navbar)-->
        <div class="mobile-menu" id="mobile-menu">
            <ul class="navbar-actions-list">
                <li class="actions-list"><a href="index.html" class="actions-link active">Home</a></li>
                <li class="actions-list"><a href="about.html" class="actions-link">About us</a></li>
                <li class="actions-list"><a href="product.html" class="actions-link">Products</a></li>
                <li class="actions-list"><a href="career.html" class="actions-link">Careers</a></li>
                <li class="actions-list"><a href="contact.html" class="actions-link">Contact us</a></li>
            </ul>
            <div class="navbar-btn">
                <a href="#" class="start-btn">Start Learning</a>
            </div>
        </div>
    </nav>
    <script src="js/navbar.js"></script>`;

    const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

    }
}
customElements.define('special-nav-bar', SpecialNavBar);