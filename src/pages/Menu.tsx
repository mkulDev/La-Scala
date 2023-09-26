import menu from '../assets/images/menu.png'
import card from '../data/lokal-karta-2023.pdf'
import { category } from '../data/category'
import DishList from './DishList'
import pizzaImage from '../assets/images/pizza.png'
import pastaImage from '../assets/images/pasta.png'
import saladImage from '../assets/images/salad.png'
import appetizerImage from '../assets/images/przystawki.png'
import {
  pizzaMenu,
  pastaMenu,
  penneMenu,
  saladMenu,
  appetizerMenu,
} from '../data/dishesData'

const Menu = () => {
  const handleMenu = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      let yOffset = element.offsetTop - 100
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      })
    }
  }

  const handleDownload = () => {
    const newTab = window.open(card, '_blank')
    if (newTab) {
      newTab.focus()
    } else {
      const downloadLink = document.createElement('a')
      downloadLink.href = card
      downloadLink.download = 'La-Scala-Menu'
      downloadLink.click()
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        id='menu'
        className='realtive flex flex-col lg:flex-row gap-[5vh] md:gap-0 justify-center items-center w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#272727] to-black  md:py-[80px]'>
        <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] m-6 flex justify-center'>
          <img
            src={menu}
            alt='hero-image'
            className='w-[90%]  max-w-[400px] lg:max-w-[80%] md:w-full aspect-square '
          />
        </div>
        <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center'>
          <h2 className='text-[50px] lg:text-[90px] mb-1 lg:mb-6 text-primary font-laScala'>
            Menu
          </h2>
          {category.map((element, index) => (
            <p
              className='text-2xl lg:text-4xl hover:text-primary duration-500 cursor-pointer m-1 lg:m-2'
              onClick={() => handleMenu(element)}
              key={index}>
              {element}
            </p>
          ))}
          <p className='mt-2 text-lg md:text-xl'>
            Pełną listę dań możesz pobrać
            <span
              className='text-primary cursor-pointer'
              onClick={handleDownload}>
              {' '}
              tutaj
            </span>
          </p>
        </div>
      </div>
      <DishList
        id='Pizza'
        title='Pizza'
        data={pizzaMenu}
        imageSrc={pizzaImage}
      />
      <DishList
        id='Spaghetti i Penne'
        title='Spaghetti i Penne'
        data={pastaMenu}
        imageSrc={pastaImage}
      />
      <DishList title='Penne' data={penneMenu} />
      <DishList
        id='Sałatki'
        title='Sałatki'
        data={saladMenu}
        imageSrc={saladImage}
      />
      <DishList
        id='Przystawki'
        title='Przystawki'
        data={appetizerMenu}
        imageSrc={appetizerImage}
      />
    </div>
  )
}

export default Menu
