"use client"
import { useState } from "react"
import { createPortal } from "react-dom"
import Menu from "@/components/common/Menu/Menu";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuWrapper = () => {

  const [menuVisibility, setMenuVisibility] = useState(false);
  const closeMenu = () => {
    setMenuVisibility(false)
  }

  return (<>
   <div className='fixed top-0 right-0 w-[60px] h-[60px] z-50 bg-black text-white text-4xl flex justify-center items-center cursor-pointer' onClick={() => setMenuVisibility(true)}><GiHamburgerMenu/></div>
   { menuVisibility && createPortal(
      <Menu closeMenu={closeMenu} />, document.body
    )}
  </>
  )
}

export default MenuWrapper;