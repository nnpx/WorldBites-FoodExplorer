import omnifoodLogo from "../img/omnifoodLogo.png";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container grid grid--5--cols grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="WorldBites logo" src={omnifoodLogo} />
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="year">2030</span> by WorldBites, Inc.
            All rights reserved
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <a class="footer-link" href="mailto:hello@omnifood.com">
                hello@worldbites.com
              </a>
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Explore</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Menu
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Testimonials
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                How it works
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                About WorldBites
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
