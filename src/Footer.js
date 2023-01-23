import React from 'react';
import App from './App';



const footer ={
    backgroundColor: "black",
    color: "white",
    bottom: "0",
    width: "100vw",
    fontSize: '16px',
}
 const copyright ={
    padding: '0.3em 1em',
    backgroundColor: "#25262e",
  }

  const input = {
    fontSize: "1em",
    padding: "1em",
    width: "100%",
    borderRadius: "5px",
    marginBottom: "5px",
  }
  const button = {
    fontSize: "1em",
    padding: "1em",
    width: "100%",
    borderRadius: "5px",
    marginBottom: "5px",
  }
   

function Footer (){
    return(
        <>
            <footer style={{backgroundColor: "black", color: "white", bottom: "0", width: "100vw", fontSize: '16px',}}>
            <div className="row primary">
    <div className="column about">
        <h3>Connect</h3>
        <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i>   Neversettle World Bela Rode Kannauj
        </p>
        <div className="social">
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-github-square"></i>
            <i className="fa fa-linkedin-square"></i>
            <i className="fa fa-instagram"></i>
        </div>
    </div>

    <div className="column link">
        <h3>Links</h3>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#support">Support</a></li>
        </ul>
    </div>

    <div className="column subscribe">
        <h3>Log In to Your Account</h3>
        <div>
           <input style={{fontSize: "1em",padding: "1em",width: "100%",borderRadius: "5px",marginBottom: "5px",}} type="email" placeholder="Email or Number" />
           <button style={{fontSize: "1em",padding: "1em",width: "100%",borderRadius: "5px",marginBottom: "5px",}} className="biut">log in</button>
           <h6 className='mx-4'>Need an Account? <code>Sign-up</code></h6>
        </div>
    </div>
</div>

</footer>

<div className="row copyright" style={{padding: '0.3em 1em',backgroundColor: "#25262e",}}>
  <div className="footer-menu">

  <a href="">Home</a>
  <a href="">F.A.Q</a>
  <a href="">Cookies Policy</a>
  <a href="">Terms Of Service</a>
  <a href="">Support</a>

  </div>
   <p className='mx-15'> Copyright Neversettle67 &copy; 2023</p>
</div>


        </>

    );
}
export default Footer;