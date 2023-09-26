interface DishProps {
  name: string
  description: string
  price: string
}

const Dish = ({ name, description, price }: DishProps) => {
  return (
    <div className='flex flex-col text-base w-full lg:w-[45%] mb-3 h-auto'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl text-primary leading-[3px]'>{name}</h3>
        <p>{price}</p>
      </div>
      <p className='mb-[2px]'>{description}</p>
    </div>
  )
}

export default Dish
