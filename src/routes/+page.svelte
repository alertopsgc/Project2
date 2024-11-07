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
    margin-top: 50px;
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

  /* Main content styling */
  .main-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: auto;
  }

  .text-section {
    flex: 1;
    max-width: 600px;
    text-align: left;
    padding-right: 2rem;
  }

  .text-section h1 {
    font-size: 55px;
    font-weight: bold;
    color: #333;
    text-align: left;
    margin-top: 50px;
  }

  .text-section h1 span {
    color: #e63946;
  }

  .text-section .subtitle {
    font-size: 25px;
    line-height: 1.5;
    color: #555;
    margin-top: 0;
    font-weight: normal;
    margin-left: -10px;
  }

  .text-section p {
    font-size: 18px;
    line-height: 1.5;
    color: #555;
    margin-top: 10px;
    margin-left: 20px;
  }

  .emergency-btn {
    margin-top: 20px;
    background-color: #010832;
    color: white;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    display: inline-block;
  }

  .emergency-btn:hover {
    background-color: #020a2c;
  }

/* Desktop and Tablet view */
.image-section {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Set height for consistency */
}

.circle {
  width: 300px;
  height: 300px;
  background-color: #e63946;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
}

.stick {
  width: 30px;
  height: 150px;
  background-color: #202020;
  border-radius: 3px;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, 50%); /* Adjust to place it below the center of the circle */
}

  .image-overlay {
    position: relative;
    z-index: 1;
    width: 100px;
    height: auto;
    transform: translate(-20px, -30px);
  }

  /* .stick {
    width: 30px;
    height: 150px;
    background-color: #202020;
    border-radius: 3px;
    position: absolute;
    top: 90px;
    left: 55%;
    transform: translateX(-50%);
  } */

  /* Responsive styling */
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      padding: 2rem;
    }

    .text-section {
      padding-right: 0;
      text-align: center;
    }

    .text-section h1 {
      font-size: 2.5rem;
    }

    .text-section .subtitle {
      font-size: 1.2rem;
    }

    .text-section p {
      font-size: 0.9rem;
    }

    .image-section {
    height: 300px; /* Set height for consistency */
  }

  .circle {
    width: 250px; /* Adjust the size of the circle for smaller screens */
    height: 250px;
    top: 60%;
  }

  .stick {
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, 100%);
  }

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
  }

  @media (max-width: 480px) {
    .image-section {
      margin-top: 2rem;
      justify-content: center; /* Center horizontally */
      align-items: center;     /* Center vertically */
      height: 250px;           /* Adjust height for smaller screens */
    }

    .circle {
    width: 200px; /* Adjust the circle size further */
    height: 200px;
  }

  .stick {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

    .nav-links {
      gap: 1rem;
      font-size: 0.9rem;
    }

    nav h1 {
      font-size: 1.2rem;
    }

    .text-section h1 {
      font-size: 2rem;
    }

    .text-section .subtitle {
      font-size: 1rem;
    }

    .text-section p {
      font-size: 0.8rem;
    }

    .emergency-btn {
      padding: 0.7rem 1.2rem;
      font-size: 0.9rem;
    }
  }
</style>

<nav>
  <a href="/" class="resq-button">
    <h1>ResQ</h1>
  </a>
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

<div class="main-content">
  <div class="text-section">
    <h1>Welcome to <span>ResQ</span></h1>
    <p class="subtitle">Your <span style="color: #e63946; font-weight: bold;">Lifeline</span> in Times of Crisis</p>
    <p>In emergencies, every second counts. ResQ is here to connect you with the help you need, when you need it most. From natural disasters to urgent situations, we're your trusted source for quick response and vital information. Your safety is our priority, and we're just a tap away.</p>
    <a href="request" class="emergency-btn">Emergency</a>
  </div>

  <div class="image-section">
    <div class="circle"></div>
    <div class="stick"></div>
  </div>
</div>
