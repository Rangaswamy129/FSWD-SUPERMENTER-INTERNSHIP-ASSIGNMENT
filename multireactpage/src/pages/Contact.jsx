function Contact() {
  return (
    <div style={{padding:"20px"}}>

      <h1>Contact Us</h1>

      <img 
        src="https://s3u.tmimgcdn.com/800x0/u78414015/2d5bff92f298973eb585a757ea8eb463.png"
        alt="contact"
        style={{width:"100%", maxWidth:"600px"}}
      />

      <p>
        If you have any questions about our React project, feel free to contact us.
      </p>

      <h2>Contact Information</h2>

      <p><b>Email:</b> example@email.com</p>
      <p><b>Phone:</b> +91 9876543210</p>
      <p><b>Address:</b> Bangalore, India</p>

      <h2>Send Message</h2>

      <form>
        <input type="text" placeholder="Your Name" /><br/><br/>
        <input type="email" placeholder="Your Email" /><br/><br/>
        <textarea placeholder="Your Message"></textarea><br/><br/>
        <button type="submit">Send</button>
      </form>

    </div>
  );
}

export default Contact;