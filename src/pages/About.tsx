import Description from '../components/Description'
import knife from '../assets/images/knife.png'
const About = () => {
  return (
    <div
      id='about'
      className='w-[100vw] md:py-[80px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#272727] to-black flex flex-col md:flex-row  justify-center items-center  animate-fade'>
      <div className='w-[40%] mx-8'>
        <Description
          align={'right'}
          title={'Poznaj'}
          main={'La Scala'}
          body={
            'Najlepsza włoska kuchnia w Świdniku.\n\nNasza restauracja to miejsce, gdzie każdy kęs jest podróżą do serca Włoch. Nasz doświadczony szef kuchni przygotowuje potrawy z pasją i dbałością o każdy detal, byście mogli doświadczyć prawdziwego smaku kuchni włoskiej.'
          }
        />
      </div>
      <img src={knife} alt='la-scala' className='h-[60vh] mx-6 hidden md:block' loading='lazy' />
      <div className='w-[40%] m-6'>
        <Description
          align={'left'}
          title={'Odwiedź'}
          main={'Godziny otwarcia'}
          body={'Istnieje możliwość telefonicznej rezerwacji stolików\n\nponiedziałek-czwartek 13-22\npiątek - sobota 13-23\nniedziela 15-22'}
        />
      </div>
    </div>
  )
}

export default About
