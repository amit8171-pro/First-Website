import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Search, XLg } from 'react-bootstrap-icons';



function Navbar() {

  //code for sticky navbar
const [color,setColor] = useState(false)

function setFixed() {
  if (window.scrollY >= 90){
    setColor(true)
  }
  else{
    setColor(false)
  }
}
window.addEventListener('scroll', setFixed)
  
 
//code for dark and light mode start
  const [theme, setTheme] = useState('light-theme');
const toggleTheme = () =>{
 theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
}
useEffect(() => {
  document.body.className = theme;
}, [theme]);

//code for dark and light mode end
 
//show and hide code for search button start
  const [show, setShow] = useState(false)
  const ShowName = () => {
    setShow(!show);
    if(show == true){
      setShow(false)
    }
    else{
      setShow(true)
    }
  }
  //show and hide code for search button end

  // show and hide while ckicking outside button code start
  const [hide, setHide] = useState(false);

  let menuRef = useRef();

  useEffect(() =>{
   let handler = (e) => {
    if(!menuRef.current.contains(e.target)){
      setHide(false);
      console.log(menuRef.current);
    }

   };
    document.addEventListener("mousedown", handler);

  return() => {
    document.removeEventListener("mousedown", handler);
  }
  });
    // show and hide while ckicking outside button code end
 
  return (
    <header>
<nav className={color ? 'navbar navbar-expand-lg bg-body-tertiary fixed-top fix' : 'navbar navbar-expand-lg bg-body-tertiary fixed-top'}>
  <div className="container">
    <NavLink className="navbar-brand" to="/"><img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <NavLink className="nav-link px-4" to="/category">Men</NavLink>
         </li>
         <li className="nav-item">
         <NavLink className="nav-link px-4" to="/women">Women</NavLink>
         </li>
         <li className="nav-item">
         <NavLink className="nav-link px-4" to="/category">Beauty</NavLink>
         </li>
         <li className="nav-item">
         <NavLink className="nav-link px-4" to="/women">Sport</NavLink>
         </li>
  
      </ul>
      
     
      
<div className=' d-flex gap-4 fs-3 icon'>
<button className='bg-light' onClick={ShowName}>{ show ? (
      <>
         <XLg/> 
      </>
   ) :(
    <>
       <Search/>
    </>
 )}</button> 
    {
      show && (<div className='position-absolute show d-flex bg-light'>
      <i class="bi bi-search fs-5"></i>
      <input class="form-control mx-3 p-0" type="search" placeholder="Type and press enter" aria-label="Search"/>

      </div>)
    }
    <div className='hider' ref={menuRef}>
    <button className='bg-light' onClick={() => {setHide(!hide)}}> <i class="bi bi-person"></i></button> 
   
    {
      hide && (<section className='position-absolute bg-light hide' >
          <div className='d-flex gap-4 my-3'><img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-8.a9a0d423.png&w=128&q=75" alt="" />
          <div>
            <h4>Eden Smith</h4>
            <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-person"></i>
          <p className='fs-6'><Link to="/form" className='text-secondary'> My Account</Link></p>
          </div>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-journal"></i>
          <p className='fs-6'>My Order</p>
          </div>
          <div className='d-flex align-items-center gap-3 pb-3'>
          <i class="bi bi-heart"></i>
          <p className='fs-6'><Link to="/form" className='text-secondary'> Wishlist</Link></p>
          </div>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-lightbulb"></i>
          <p className='fs-6'>Dark theme</p>
         
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round" onClick={() => toggleTheme()}> </span>
        </label>
 
          </div>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-question-octagon"></i>
          <p className='fs-6'>Help</p>
          </div>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-box-arrow-left"></i>
          <p className='fs-6'>Log out</p>
          </div>
             </section>)
    }
     </div>
     <i class="bi bi-cart3"></i>
</div>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Navbar
