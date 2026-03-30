import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"black", padding:"15px"}}>
      <Link style={{color:"white", marginRight:"20px"}} to="/">Home</Link>
      <Link style={{color:"white", marginRight:"20px"}} to="/about">About</Link>
      <Link style={{color:"white"}} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;