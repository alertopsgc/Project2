<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emergency Hotlines</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      background-color: #D92D2D;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }

    .header-title {
      margin: 0;
      font-size: 1.5em;
    }

    .header-subtitle {
      font-size: 1em;
      margin-top: 5px;
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
      padding: 10px;
      text-align: center;
      font-weight: bold;
      font-size: 1em;
      color: #333;
      flex-shrink: 0;
    }

    .hotline-body {
      background-color: #1b3e61;
      color: white;
      padding: 10px;
      text-align: center;
    }

    .hotline-number {
      margin: 0;
      font-size: 0.9em;
      font-weight: bold;
    }

    footer {
      text-align: center;
      background-color: #1b3e61;
      color: white;
      padding: 10px;
      font-size: 0.9em;
      margin-top: 20px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1 class="header-title">Emergency Hotlines</h1>
      <p class="header-subtitle">Fire ● Rescue ● Police ● Medical</p>
      <p>Find the emergency contacts you need, from medical assistance to disaster response. Just a call away, these hotlines are here to provide immediate support in any crisis. Stay safe, stay prepared.</p>
    </header>

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
          <p class="hotline-number">0917-436-5998 | 222-5035</p>
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

    <footer>
      Remember, during emergencies, it&apos;s crucial to stay calm and provide accurate information to ensure you receive the help you need as quickly as possible.
    </footer>      
  </div>
</body>
</html>
