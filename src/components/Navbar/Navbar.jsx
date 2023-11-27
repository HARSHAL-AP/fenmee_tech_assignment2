import React from 'react'
import "./style.css"
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navbar'>
      <FaGithub className='logico'/>
      <div className='navlinks'>
        <p>Product <MdKeyboardArrowDown /></p>
        <p>Solution <MdKeyboardArrowDown /></p>
        <p>Open Source <MdKeyboardArrowDown /></p>
        <p>Pricing</p>
      </div>
      <div className='logisig'>
          <input type="text" placeholder='Search ro jump tp...' />
          <p>Sign in </p>
          <button>Sign up</button>
      </div>
    </div>
  )
}
export default Navbar