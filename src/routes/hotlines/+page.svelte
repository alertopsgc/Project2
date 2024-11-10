<script>
  const rightImage = "/imgs/2.png";
</script>

<style>
  
   /* Header container styling */
   .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  /* Title and subtitle container */
  .header-text {
    text-align: center;
    margin-right: 1rem;
  }

  .header-text h2 {
    color: #e63946;
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }

  .header-text p.subtitle {
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
    margin: 0.3rem 0;
  }

  .header-text p.description {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 400px;
    margin: 0.5rem auto 0;
  }

  .header img {
    width: 200px; 
    height: auto;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .hotlines-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 20px;
  }

  .hotline-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #e0e0e0;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: 120px;
  }

  .hotline-header {
    background-color: #e0e0e0;
    padding: 10px 18px;
    text-align: left;
    font-weight: bold;
    font-size: 17px;
    color: #333;
    flex-shrink: 0;
  }

  .hotline-body {
    background-color: #3F5570;
    color: white;
    padding: 10px;
    text-align: center;
  }

  footer {
    background-color: #29384B;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
  }
</style>

<div class="container">
  <div class="header">
  <div class="header-text">
    <h2>Emergency Hotlines</h2>
    <p class="subtitle">Fire • Rescue • Police • Medical</p>
    <p class="description">
      Find the emergency contacts you need, from medical assistance to disaster response. Just a call away, these hotlines are here to provide immediate support in any crisis.<br>
      Stay safe, stay prepared.
    </p>
  </div>

    <img src={rightImage} alt="Illustration">

  </div>

  <div class="hotlines-grid">
    <div class="hotline-card">
      <div class="hotline-header">Barretto Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">222-4295</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">City Hall Olongapo</div>
      <div class="hotline-body">
        <p class="hotline-number">222-2565 | 611-4800</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Disaster Management Office</div>
      <div class="hotline-body">
        <p class="hotline-number">0998-536-7121</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">DRRMO / OLONGAPO Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">0998-593-7746</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">East Bajac Bajac Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">0917-436-5998 |  222-5035</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">223-1415</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Gordon Heights Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">223-5497</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">New Cabalan Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">224-5414</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Old Cabalan Quick Emergency Response</div>
      <div class="hotline-body">
        <p class="hotline-number">603-1700</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Philippine RedCross</div>
      <div class="hotline-body">
        <p class="hotline-number">0917-889-2783 | 222-2181</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">SBMA Fire Department</div>
      <div class="hotline-body">
        <p class="hotline-number">252-4830 | 252-4657</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">Sta Rita, Rescue, & Disaster Response</div>
      <div class="hotline-body">
        <p class="hotline-number">0939-956-0009 | 222-9225</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">West Bajac Bajac Fire & Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">222-5713</p>
      </div>
    </div>
    <div class="hotline-card">
      <div class="hotline-header">DRRMO / OLONGAPO Rescue</div>
      <div class="hotline-body">
        <p class="hotline-number">223-1415</p>
      </div>
    </div>
  </div>

</div>

<footer>
  Remember, during emergencies, it's crucial to stay calm and provide accurate information to ensure you receive the help you need as quickly as possible.
</footer>