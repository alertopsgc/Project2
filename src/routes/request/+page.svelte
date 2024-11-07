<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  /* Navbar styling */
  nav {
    background-color: #e63946;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: inherit;
    position: relative;
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

  /* Toggle button for mobile */
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .menu-toggle div {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 5px;
  }

  /* Container for form */
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 25px;
    font-style: inherit;
    margin-left: 35rem; /* Align right for desktop */
  }

  h1 {
    color: #d9534f; /* Red color */
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
    font-weight: bolder;
    font-style: inherit;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  input[type="text"],
  input[type="tel"],
  input[type="number"],
  input[type="datetime-local"],
  select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
  }

  input[type="file"] {
    margin-top: 0px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  button {
    background-color: #010832;
    color: white;
    padding: 1rem 2.5rem;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #020a2c;
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
    transform: scale(1.05); /* Subtle hover effect */
  }

  /* Responsive styling */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    .nav-links.open {
      display: flex;
    }

    .menu-toggle {
      display: flex;
    }

    .container {
      margin: 0 auto;
      max-width: 100%;
      margin-top: 2rem;
      margin-left: 0; /* Centered form on mobile */
    }

    h1 {
      font-size: 2rem;
    }

    input[type="text"],
    input[type="tel"],
    input[type="number"],
    input[type="datetime-local"],
    select {
      font-size: 1.1rem;
    }

    .button-container {
      margin-top: 2rem;
      justify-content: center;
    }

    button {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    .container {
      padding: 1.5rem;
    }

    input[type="text"],
    input[type="tel"],
    input[type="number"],
    input[type="datetime-local"],
    select {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      padding: 0.8rem 2rem;
    }
  }
</style>

<nav>
  <a href="/project2/">
  <h1>ResQ</h1></a>
  
  <div class="menu-toggle" on:click={toggleMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="nav-links {isMenuOpen ? 'open' : ''}">
    <a href="#hotlines">Hotlines</a>
    <a href="#about">About</a>
    <a href="contact">Contact</a>
  </div>
</nav>

<div class="container">
  <h1>What's your Emergency?</h1>

  <form>
    <label for="name">Name</label>
    <input id="name" type="text" placeholder="Enter your name" />

    <label for="contact">Contact</label>
    <input id="contact" type="tel" placeholder="Enter contact number" />

    <label for="address">Address</label>
    <input id="address" type="text" placeholder="Enter current location" />

    <label for="type">Type of Emergency</label>
    <select id="type">
      <option value="">Select type</option>
      <option value="fire">Fire</option>
      <option value="medical">Medical</option>
      <option value="police">Police</option>
    </select>

    <label for="assistance">Assistance Needed</label>
    <select id="assistance">
      <option value="">Select assistance</option>
      <option value="ambulance">Ambulance</option>
      <option value="rescue">Rescue</option>
      <option value="police">Police</option>
    </select>

    <label for="urgency">Level of Urgency</label>
    <select id="urgency">
      <option value="">Select urgency</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>

    <label for="people">No. of People Affected</label>
    <input id="people" type="number" min="1" placeholder="Enter number" />

    <label for="datetime">Date and Time of Incident</label>
    <input id="datetime" type="datetime-local" />

    <label for="image">Attach Image</label>
    <input id="image" type="file" />

    <div class="button-container">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
