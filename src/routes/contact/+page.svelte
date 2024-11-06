<script>
    
</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .form-section, .info-section {
    width: 45%;
  }

  nav {
    background-color: #e63946;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: inherit;
  }

  nav h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  h1 {
    color: #333; /* Red color */
    font-size: 50px;
    text-align: left;
    margin-bottom: 0px;
    font-weight: bolder;
    font-style: inherit;
  }

  p {
    color: #666;
    margin-top: 10px;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-top: 10px;
    color: #333;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    height: 100px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  button {
    background-color: #010832;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #020a2c;
  }

  .info-section {
    padding-left: 5rem;
    margin-top: 10rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 15px;
    margin-top: 20px;
  }

  .info-item svg {
    margin-right: 0.5rem;
    color: #333;
  }

  .info-item p {
    margin: 0;
  }

  .info-divider {
    border-top: 1px solid #ccc;
    margin: 1rem 0;
  }

  h2 {
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-style: inherit;
  margin-top: -5rem;
}

</style>

<nav>
  <h1>ResQ</h1>
  <div class="nav-links">
    <a href="#hotlines">Hotlines</a>
    <a href="#about">About</a>
    <a href="contact">Contact</a>
  </div>
</nav>

<div class="container">
  <!-- Form Section -->
  <div class="form-section">
    <h1>Contact Us</h1>
    <p>Your inquiries are welcome, reach out to us anytime!</p>
    
    <form>
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="Enter your name" />

      <label for="email">Email</label>
      <input id="email" type="email" placeholder="example@gmail.com" />

      <label for="phone">Phone No.</label>
      <input id="phone" type="tel" placeholder="Enter your phone number" />

      <label for="reason">Reason for Contact</label>
      <textarea id="reason" placeholder="Enter your message"></textarea>

      <div class="button-container">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>

  <!-- Info Section -->
  <div class="info-section">
    <div class="info-item">
     <h2>Address</h2>
      <p>234 Roosevelt Avenue, San Francisco Del Monte, Quezon City</p>
    </div>

    <div class="info-divider"></div>

    <div class="info-item">
      <h2>Number</h2>
      <p>09xx xxx xxxx<br>047 xxx xxxx</p>
    </div>

    <div class="info-divider"></div>

    <div class="info-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.8a.8.8 0 0 0-.8.8v.217l6.364 4.682a.5.5 0 0 0 .536 0L14.8 4.217V4a.8.8 0 0 0-.8-.8H2z"/>
      </svg>
      <p>alertopsgc@gmail.com</p>
    </div>
  </div>
</div>
