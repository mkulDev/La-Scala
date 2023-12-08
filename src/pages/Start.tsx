import heroImage from '../assets/images/welcome.png'
import scroll from '../assets/images/scroll.png'
import Description from '../components/Description'

const message = {
  title: 'W poszukiwaniu wyjątkowych smaków',
  main: 'Najlepsza Kuchnia Włoska\nw Świdniku',
  body: 'Serdecznie zapraszamy do pizzerii La Scala. Oferujemy Państwu bogatą ofertę dań kuchni włoskiej, m.in. pyszną pizzę wg oryginalnej receptury, ze składnikami jakich nie znajdziecie w okolicy, różnorodne pasty oraz sałatki.',
  btn: 'Zobacz menu',
  btnId: 'menu',
}

const Start = () => {
  return (
    <div
      id='start'
      className='realtive flex flex-col lg:flex-row gap-[5vh] md:gap-0 justify-center items-center w-full h-[100vh] min-h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#272727] to-black animate-fade '>
      <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] m-6'>
        <Description align={'left'} title={message.title} main={message.main} body={message.body} btn={message.btn} btnId={message.btnId} />
      </div>
      <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex justify-center'>
        <img src={heroImage} alt='hero-image' className='w-[90%]  max-w-[400px] lg:max-w-[80%] md:w-full aspect-square' loading='lazy' />
      </div>

      <div className='absolute hidden md:flex md:flex-col justify-center items-center bottom-[5vh] right-[5vw]'>
        <img src={scroll} alt='scroll-img' className='w-[4px] mb-2' />
        <p className=' text-primary text-xl font-display font-bold '>SCROLL</p>
      </div>
    </div>
  )
}

export default Start
