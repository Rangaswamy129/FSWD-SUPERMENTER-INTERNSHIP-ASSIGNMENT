function About() {
  return (
    <div style={{padding:"20px"}}>

      <h1>About Our Project</h1>

      <img 
        src="https://i.ytimg.com/vi/eE2nC9i0H8E/maxresdefault.jpg"
        alt="about"
        style={{width:"100%", maxWidth:"600px"}}
      />

      <p>
        This project demonstrates how React Router can transform a single React
        application into a multi-page experience.
      </p>

      <h2>Technologies Used</h2>

      <ul>
        <li>React JS</li>
        <li>React Router DOM</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
      </ul>

      <h2>Why React?</h2>

      <p>
        React is one of the most popular JavaScript libraries used for building
        modern user interfaces. It allows developers to create dynamic
        applications that update efficiently when data changes.
      </p>

      <p>
        With React Router, we can create multiple pages like Home, About,
        and Contact while maintaining fast navigation.
      </p>

    </div>
  );
}

export default About;