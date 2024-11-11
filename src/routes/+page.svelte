<script>
  const rightImage = "./imgs/1.png";
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main content styling */
  .main-content {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 3.5rem;
    max-width: 1200px;
    margin: auto;
  }

  .text-section {
    flex: 1;
    max-width: 600px;
    text-align: left;
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft 1s ease forwards;
  }

  .text-section h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #101010;
    line-height: 1.2;
  }

  .text-section h1 span {
    color: #e63946; /* Highlighted text color */
  }

  .text-section .subtitle {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0.5rem;
  }

  .text-section .subtitle span {
    color: #e63946;
    font-weight: bold;
  }

  .text-section p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-top: 1rem;
  }

  .emergency-btn {
    margin-top: 2rem;
    background-color: #020a2c;
    color: white;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: inline-block;
  }

  .emergency-btn:hover {
    background-color: #29384B;
    transform: scale(1.05);
  }

  .image-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: right;
    opacity: 0;
    transform: translateX(30px);
    animation: slideInRight 1s ease forwards;
    animation-delay: 0.5s;
  }

  .image-section img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }

  .image-section img {
  width: 500px;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-section img:hover {
  transform: scale(1.05);
}

  /* Keyframe animations */
  @keyframes fadeInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Responsive styling */
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      padding-top: 7rem;
    }

    .text-section {
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
      margin-top: 2.5rem; 
    }
  }

  @media (max-width: 480px) {
    .text-section {
      padding-top: 1rem;
    }

    .text-section h1 {
      font-size: 1.8rem;
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

    .image-section img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
</style>

<div class="main-content">
  <div class="text-section">
    <h1>Welcome to <span>ResQ</span></h1>
    <p class="subtitle">Your <span>Lifeline</span> in Times of Crisis</p>
    <p>In emergencies, every second counts. ResQ is here to connect you with the help you need, when you need it most. From natural disasters to urgent situations, we're your trusted source for quick response and vital information. Your safety is our priority, and we're just a tap away.</p>
    <a href="request" class="emergency-btn">Emergency</a>
  </div>

  <div class="image-section">
    <img src={rightImage} alt="Illustration">
  </div>
</div>
