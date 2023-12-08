import { GiHamburgerMenu } from 'react-icons/gi'
import { CSSTransition } from 'react-transition-group'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useState } from 'react'

export const handleMenu = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    let yOffset = element.offsetTop - 100
    window.scrollTo({
      top: yOffset,
      behavior: 'smooth',
    })
  }
}
const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  const handleMobileMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const links = [
    { text: 'Strona Główna', id: 'start' },
    { text: 'O firmie', id: 'about' },
    { text: 'Menu', id: 'menu' },
    { text: 'Kontakt', id: 'Contact' },
  ]
  return (
    <nav className='fixed flex justify-between items-center w-full h-[80px] top-0 left-0 text-gray-100 font-display px-12 bg-[#0e0e0e]  border-b-[1px] border-[#2d2919] z-10'>
      <h1 className='text-6xl font-laScala text-primary'>La Scala</h1>
      <ul className='hidden md:flex text-2xl gap-8 justify-self-end'>
        {links.map((element, index) => (
          <li className='inline-block hover:text-primary transition-colors duration-500' key={index}>
            <button onClick={() => handleMenu(element.id)}>{element.text}</button>
          </li>
        ))}
      </ul>

      <GiHamburgerMenu onClick={handleMobileMenu} className=' block md:hidden' />
      <CSSTransition in={isMenuActive} timeout={1000} classNames='menu' unmountOnExit>
        <div
          className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-[#272727] to-black "`}>
          <h2 className='text-6xl  leading-[40px] font-laScala text-primary mb-[30px]'>La Scala</h2>
          <ul className='flex flex-col gap-4 text-[48px] items-center justify-center '>
            {links.map((element, index) => (
              <li className='inline-block hover:text-primary transition-colors duration-500 text-xl' key={index}>
                <button
                  onClick={() => {
                    handleMenu(element.id)
                    setIsMenuActive(!isMenuActive)
                  }}>
                  {element.text}
                </button>
              </li>
            ))}
          </ul>
          <IoIosCloseCircleOutline onClick={handleMobileMenu} size={40} className='absolute top-12 right-12 cursor-pointer hover:text-primary' />
        </div>
      </CSSTransition>
    </nav>
  )
}

export default Navbar
