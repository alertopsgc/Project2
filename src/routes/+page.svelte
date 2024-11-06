
<script>
    
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
    font-size: 5px; /* Custom font size for "WELCOME to ResQ" */
    font-weight: bold;
    color: #333;
    font-size: 55px; 
    text-align:left;
     margin-top:50px;
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
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin-top: 10px;
    margin-left: 20px;
    font-size:20px;
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

  /* Circle and image styling */
  .image-section {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 300px;
    height: 300px;
    background-color: #e63946;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
  }

  .image-overlay {
    position: relative;
    z-index: 1;
    width: 100px;
    height: auto;
    transform: translate(-20px, -30px);
  }
  .stick {
  width: 30px; /* Width of the stick */
  height: 150px; /* Height of the stick */
  background-color: #202020; 
  border-radius: 3px; /* Rounded edges for a more realistic stick look */
  position: absolute;
  top: 90px; /* Position it below the circle */
  left: 55%; /* Center it horizontally */
  transform: translateX(-50%); /* Offset for centering */
  }

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
      margin-top: 2rem;
      justify-content: center;
    }

    .image-overlay {
      width: 80px;
      transform: translate(0, 0);
    }
  }

  @media (max-width: 480px) {
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
  <div class="nav-links">
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
    <div class="circle" style="top: 50; right: 90px; height: 100px weight: 150px"></div>
    <div class="stick"></div>
  </div>
</div>


