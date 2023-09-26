import spoon from '../assets/images/spoon.png'
import { handleMenu } from '../components/Navbar'

type PropsType = {
  align: 'left' | 'center' | 'right'
  title?: string
  main?: string
  body?: string
  btn?: string
  btnId?: string
}

const Description = ({ align, title, main, body, btn, btnId }: PropsType) => {
  return (
    <div
      className={`flex flex-col font-display items-center  ${
        align === 'left'
          ? 'lg:items-start'
          : align === 'right'
          ? 'lg:items-end'
          : 'lg:items-center'
      } md:mb-[4vh]`}>
      {title && (
        <p className={`font-body flex flex-col text-sm md:text-2xl`}>
          {title}{' '}
        </p>
      )}
      {title && (
        <img
          src={spoon}
          alt='fork-img'
          className={`flex flex-col w-[50px] my-3 ${
            align === 'right' ? 'rotate-180' : 'rotate-0'
          }`}
        />
      )}
      <h2
        className={`text-3xl md:text-5xl 2xl:text-[70px] text-primary lg:leading-[1.1] text-center ${
          align === 'left'
            ? 'lg:text-left'
            : align === 'right'
            ? 'lg:text-right'
            : 'lg:text-center'
        }`}>
        {main}
      </h2>
      <p
        className={`font-body text-sm lg:text-xl text-gray-300 mt-4 whitespace-pre-line text-center ${
          align === 'left'
            ? 'lg:text-left'
            : align === 'right'
            ? 'lg:text-right'
            : 'lg:text-center'
        }`}>
        {body}
      </p>
      {btn && btnId && (
        <button
          onClick={() => handleMenu(btnId)}
          className='w-min px-4 py-2 text-xs bg-primary border-[1px] border-[#c6b77e] text-black font-body mt-4 whitespace-nowrap rounded-sm  hover:opacity-60 duration-500'>
          {btn}
        </button>
      )}
    </div>
  )
}

export default Description
