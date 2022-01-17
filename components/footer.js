class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- footer -->
    <footer class="footer">
      <!-- social links -->
      <div class="grid-container-footer">
        <div class="grid-item-footer">
          <a target="_blank" href="https://www.facebook.com/Aloha-Fitness-104806311828090" rel="noopener">
            <i class="fab fa-facebook-f footer"></i>
          </a>
        </div>
        <div class="grid-item-footer">
          <a target="_blank" href="https://instagram.com/alohafitness2021" rel="noopener">
            <i class="fab fa-instagram footer"></i>
          </a>
        </div>
      </div>
      <!-- copyright -->
      <h5>&#169; Aloha Fitness.<span class="date" id="date"></span>
        <!-- date script -->
        <script>
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("date").innerHTML = year;
    </script>
    <!-- logo -->
        <img src="img/heart.svg" class="footer icon">
        <br><br>
      </h5>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
