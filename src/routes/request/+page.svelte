<script>
  // Add any form handling or state here if necessary
</script>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 25px;
    font-style: inherit;
    margin-left: 35rem;
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
</style>

<nav>
  <a href="/" class="resq-button">
    <h1>ResQ</h1>
  </a>
  <div class="nav-links">
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
      <!-- Add more options as needed -->
    </select>

    <label for="assistance">Assistance Needed</label>
    <select id="assistance">
      <option value="">Select assistance</option>
      <option value="ambulance">Ambulance</option>
      <option value="rescue">Rescue</option>
      <option value="police">Police</option>
      <!-- Add more options as needed -->
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

    <!-- Button Container -->
    <div class="button-container">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
