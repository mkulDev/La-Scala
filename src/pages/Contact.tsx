import Description from '../components/Description'
import map from '../assets/images/map_1.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Contact = () => {
  return (
    <div
      id='Contact'
      className='gap-10 w-[100vw] min-h-[600px] py-[60px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#272727] to-black flex flex-col justify-center items-center'>
      <div className='w-[80vw] lg:w-[60%]'>
        <Description
          title='Kontakt'
          main='Zapraszamy do naszego lokalu'
          body='ul. Wojska Polskiego 32 21-040 Świdnik
          Zamówienia, Rezerwacja stolików i odbiór własny pod numerem 508-486-039'
          align='center'
        />

        <h2 className='text-[20px] lg:text-[50px] mb-1 text-primary font-display text-center'>
          Godziny otwarcia
        </h2>
        <p className='text-sm lg:text-xl whitespace-pre-line text-center font-body text-gray-300'>
          {
            'poniedziałek-czwartek 13-22\npiątek - sobota 13-23\nniedziela 15-22'
          }
        </p>
      </div>
      <div className='w-full lg:w-[60%]'>
        <Zoom>
          <img src={map} alt='la-scala' className='w-full rounded-lg' />
        </Zoom>
        <p className='text-base lg:text-lg  text-center '>
          Kliknij na mapę aby powiększyć
        </p>
      </div>
    </div>
  )
}

export default Contact
