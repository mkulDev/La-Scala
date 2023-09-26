import React from 'react'
import Dish from '../components/Dish'

type DishType = {
  name: string
  description: string
  price: string
}

type DishListProps = {
  id?: string
  title?: string
  data: DishType[]
  imageSrc?: string // Pass the image source as a prop
}

const DishList: React.FC<DishListProps> = ({ data, title, imageSrc, id }) => {
  return (
    <div
      id={id}
      className='w-full flex flex-col items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#272727] to-black my-10'>
      {title && (
        <div className='flex flex-col justify-center items-center w-[80vw] mb-4'>
          <h2 className='text-[50px] lg:text-[90px] mb-1 text-primary font-laScala leading-[1] '>
            {title}
          </h2>
          {imageSrc && (
            <img
              src={imageSrc}
              alt='hero-image'
              className='w-[80%] md:w-[40%] aspect-square mb-2'
            />
          )}
        </div>
      )}
      <div className='flex flex-col lg:flex-row lg:flex-wrap w-[80vw] justify-center items-center lg:justify-between'>
        {data.map((element, index) => (
          <Dish key={index} {...element} />
        ))}
      </div>
    </div>
  )
}

export default DishList
