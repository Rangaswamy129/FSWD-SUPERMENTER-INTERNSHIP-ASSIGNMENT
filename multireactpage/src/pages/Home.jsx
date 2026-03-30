function Home() {
  return (
    <div style={{padding:"20px"}}>

      <h1>Welcome to Our Website</h1>

      <img 
        src="https://tse4.mm.bing.net/th/id/OIP.XwxLPFRwpO2KP8qZFiUuBgHaEJ?pid=Api&P=0&h=180" 
        alt="home"
        style={{width:"100%", maxWidth:"600px"}}
      />

      <p>
        This is a modern React Multi-Page Application built using React Router.
        Our website demonstrates how navigation works without reloading the page.
      </p>

      <h2>Our Features</h2>
      <ul>
        <li>Fast and responsive design</li>
        <li>Single Page Application (SPA)</li>
        <li>React Router navigation</li>
        <li>Reusable components</li>
      </ul>

      <p>
        React helps developers build scalable web applications by dividing
        the interface into reusable components.
      </p>

    </div>
  );
}

export default Home;