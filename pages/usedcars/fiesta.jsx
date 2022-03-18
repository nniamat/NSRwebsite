import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

function bmw() {

  const bmwcars = [
    { img: "/comingsoon.jpg"},
    { img: "/warranty.jpg"},


]

  return (
      <div className='bg-white text-black' >
          <h1 className='text-4xl  font-semibold flex justify-center pt-10  bg-white shadow-lg py-10 items-center  ' >Ford Fiesta</h1>
    <section className="h-screen grid grid-cols-2 " >
        
        <div className='h-[70vh] pb-24 my-auto' >
        <Swiper
                loop
                navigation={true}
                className='mySwiper flex justify-center items-center overflow-hidden '
                slidesPerView={1}
                autoplay
                spaceBetween={30}
            >
                {
                    bmwcars.map((r,i)=><SwiperSlide key={i} >
                    <img className='hover:scale-105 object-contain transition-all cursor-pointer' src={r.img} />
                </SwiperSlide>)
                }
            </Swiper>
        </div>
        <div className='flex flex-col justify-center ' >
            <section className='h-[50vh]' >
                        <h1 className='text-3xl font-semibold tracking-wider py-6  bg-yellow-200 w-fit px-8 hover:px-12 transition-all cursor-pointer' >Ford Fiesta</h1>
                        <h3 className='text-2xl font-mono my-4 py-4 bg-green-300 w-fit px-8 hover:px-12 transition-all cursor-pointer' > <span className='font-sans font-medium ' >Price : </span> £4,300</h3>
                        <p className=' font-medium text-gray-500 w-[90%] text-lg pt-6 bg-blue-100 p-8 transition-all '  >Lovely Ford Fiesta  1.2. Drives incredibly smooth, very reliable. The vehicle has 12 Month Mot. Bluetooth, AUX, 3x3 point rear seat belts, ABS, CD, Cloth seat trim, Driver`s airbag, Front electric windows, Height adjustable drivers seat, Isofix child seat anchor points, PAS, Passenger`s airbag, Service indicator, Side airbags, Steering wheel rake adjustment, Steering wheel reach adjustment, Traction control, Air conditioning, Alarm, Alloy wheels, Cruise control, Electric mirrors, Front fog lights, Heated mirrors, Remote locking, Smoke free. CAT S professionally repaired. *IDEAL FIRST CAR * CHEAP INSURANCE AND ROAD TAX  * VERY ECONOMICAL * FIRST TO SEE WILL BUY * 

</p><br />
                     
            </section>
        </div>

    </section>
      </div>
  )
}

export default bmw