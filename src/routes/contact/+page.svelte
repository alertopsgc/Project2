<script lang="ts">
  import MapPinAltSolid from "flowbite-svelte-icons/MapPinAltSolid.svelte";
  import PhoneOutline from "flowbite-svelte-icons/PhoneOutline.svelte";
  import EnvelopeSolid from "flowbite-svelte-icons/EnvelopeSolid.svelte";

  let name = "";
  let email = "";
  let phone = "";
  let reason = "";
  let success = false;

  // Specify the type of 'event' as 'Event'
  function handleSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission
    // Reset form data
    name = "";
    email = "";
    phone = "";
    reason = "";

    // Show success message
    success = true;

    // Hide success message after 5 seconds
    setTimeout(() => {
      success = false;
    }, 5000);

       // Clear all input fields in the form
       const form = event.target as HTMLFormElement;
    form.reset();
  }
</script>

<!-- svelte-ignore css_unused_selector -->
<style>
  /* Basic Styling */
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: auto;
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .form-section,
  .info-section {
    width: 45%;
  }

  h1 {
    color: #181818;
    font-size: 48px;
    text-align: left;
    margin-bottom: 0px;
    font-weight: bolder;
  }

  p {
    color: #333;
    margin-top: 5px;
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
    background-color: #020a2c;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #29384B;
  }

  .info-section {
    padding-left: 5rem;
    margin-top: 10rem;
  }

  .info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 15px;
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
    color: #181818;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }


  /* Responsive Styles for Tablets and Mobile */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .form-section, .info-section {
      width: 100%;
      padding: 0;
    }

    .info-section {
      padding-left: 0;
      margin-top: 2rem;
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
      font-size: 40px;
    }

    button {
      padding: 0.8rem 1.5rem;
    }
  }

  .success-message {
    background-color: #28a745;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: center;
  }
</style>

<div class="container">
  <!-- Form Section -->
  <div class="form-section">
    <h1>Contact Us</h1>
    <p>Your inquiries are welcome, reach out to us anytime!</p>
      
    <form on:submit={handleSubmit}>
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="Enter your name" required/>

      <label for="email">Email</label>
      <input id="email" type="email" placeholder="example@gmail.com" required/>

      <label for="phone">Phone No.</label>
      <input id="phone" type="tel" placeholder="Enter your phone number" pattern="[0-9]*" inputmode="numeric" required/>      

      <label for="reason">Reason for Contact</label>
      <textarea id="reason" placeholder="Enter your message" required></textarea>

      <div class="button-container">
        <button type="submit">Send</button>
      </div>

      {#if success}
  <div class="success-message">
    <p>Thank you for your message! We will get back to you shortly.</p>
  </div>
{/if}

    </form>
  </div>

  <!-- Information Section -->
  <div class="info-section">
    <div class="info-item">
        <MapPinAltSolid class="w-8 h-8 sm:w-12 sm:h-12 mr-4" />
      <div>
        <h2>Address</h2>
        <p>234 Roosevelt Avenue, San Francisco Del Monte, Quezon City</p>
      </div>
    </div>
    
    <div class="info-divider"></div>
    
    <div class="info-item">
      <PhoneOutline class="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
      <div>
        <h2>Number</h2>
        <p>0993 612 7911<br>047 6239 </p>
      </div>
    </div>
    
    <div class="info-divider"></div>
    
    <div class="info-item">
      <EnvelopeSolid class="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
      <div>
        <h2>Email</h2>
        <p>alertopsgc@gmail.com</p>
      </div>
    </div>
  </div>
</div>
