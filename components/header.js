class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <div class="header-grid-item 1">
        <a href="index.html"><img src="img/heart.svg" class="logo" alt="Aloha Fitness"></a>
      </div>
      <div class="header-grid-item 2">
        <a class="branding" href="index.html">Aloha Fitness</a>
      </div>
      <div class="header-grid-item 3">
        <div class="topnav">
          <!-- Use any element to open/show the overlay navigation menu -->
          <span class="topnav icon" onclick="openNav()"><i class="fa fa-bars"></i></span>
        </div>
        <!-- The overlay -->
        <div id="myNav" class="overlay">
          <!-- Button to close the overlay navigation -->
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <!-- Overlay content -->
          <div class="overlay-content">
            <a href="index.html">Home</a>
            <a href="selfcare.html">Self-Care</a>
            <a href="mindbody.html">Mind Body</a>
            <hr>
            <ul class="social menu">
            <li class="social menuli"><a target="_blank" href="https://www.facebook.com/Aloha-Fitness-104806311828090" rel="noopener"><i class="menu fab fa-facebook-f"></i></a></li>
            <li class="social menuli"><a target="_blank" href="https://instagram.com/alohafitness2021" rel="noopener"><i class="menu fab fa-instagram"></i></a></li>
          </ul>
            <!-- <a href="#">Contact</a> -->
          </div>
        </div>
        <!-- Overlay script -->

      </div>
    </header>
    `;
  }
}

customElements.define('header-component', Header);

// Menu Call to Action
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";}
/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";}
