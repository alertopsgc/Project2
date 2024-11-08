
<style>
  /* Basic Styling */
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .form-section,
  .info-section {
    width: 45%;
  }

  h1 {
    color: #333;
    font-size: 50px;
    text-align: left;
    margin-bottom: 0px;
    font-weight: bolder;
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
    font-size: 15px;
  }

  .info-item svg {
    margin-right: 12px;
    color: #333;
    margin-top: 42px;
  }

  .info-item div {
    display: flex;
    flex-direction: column;
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
    margin-top: 0;
  }

  .resq-button {
    text-decoration: none;
    color: white;
    display: inline-block;
    transition: 0.3s;
  }

  .resq-button h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .resq-button:hover {
    transform: scale(1.05);
  }

  /* Responsive Styles for Tablets and Mobile */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .form-section,
    .info-section {
      width: 100%;
      padding: 0;
    }

    .info-section {
      padding-left: 0;
      margin-top: 2rem;
    }

    .info-item svg {
      margin-top: 0;
    }

    .info-item {
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 30px;
    }

    .info-divider {
      display: none;
    }

    /* Center form vertically on small screens */
    .form-section {
      margin-top: 2rem;
    }

  }

  /* Additional mobile-specific styling */
  @media (max-width: 480px) {
    h1 {
      font-size: 25px;
    }

    button {
      padding: 0.8rem 1.5rem;
    }
  }
</style>

  
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

    <div class="info-section">
      <div class="info-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10a6 6 0 1 0-12 0c0 4.314 6 10 6 10Zm0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
        </svg>
        <div>
          <h2>Address</h2>
          <p>234 Roosevelt Avenue, San Francisco Del Monte, Quezon City</p>
        </div>
      </div>
    
      <div class="info-divider"></div>
      
      <!-- Updated Phone Icon -->
      <div class="info-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.654 1.328a1 1 0 0 1 .93-.272l2.59.647c.332.083.589.33.682.66l.404 1.576c.093.36.008.747-.23 1.023L6.79 6.02a11.582 11.582 0 0 0 4.796 4.797l1.19-.732a1.077 1.077 0 0 1 1.023-.23l1.576.404c.33.093.576.35.66.682l.647 2.59a1 1 0 0 1-.272.931l-2.295 2.296a2.333 2.333 0 0 1-2.917.196c-.406-.309-.815-.614-1.223-.92a21.051 21.051 0 0 1-7.598-7.598c-.306-.408-.611-.817-.92-1.223a2.333 2.333 0 0 1 .196-2.917l2.296-2.296Z"/>
        </svg> 
        <div>
          <h2>Number</h2>
          <p>09xx xxx xxxx<br>047 xxx xxxx</p>
        </div>
      </div>
      
    
      <div class="info-divider"></div>
      
      <!-- Updated Email Icon -->
      <div class="info-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1.5l7 4.5 7-4.5V4a1 1 0 0 0-1-1H2z"/>
        </svg>
        <div>
          <h2>Email</h2>
          <p>info@resq.com</p>
        </div>
      </div>
    </div>
  
</div>
