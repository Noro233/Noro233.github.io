import { Homeimage } from "../../Images";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Home() {
  const [text] = useTypewriter({
    words: ["Front-End Developer"],
    Lopp: true,
    typeSpeed: 20,
    deLeteSpeed: 30,
    delaySpeed: 2300,
    autoStart: true,
    loop: true
  })


  return (
    <>
      <section id="home" className=" w-full h-screen flex items-center
                                     justify-center bg-black overflow-hidden">

        <div className=" relative w-full h-full 
                         px-3 md:px-8 lg:px-16">


          <div className="relative text-start flex flex-col 
                           pt-[100px] z-10 mb-8">

            <h1 className=" text-2xl sm:text-3xl mb:text-4xl md:text-2xl
                          lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
              Norayr
            </h1>
            <h1 className=" text-2xl sm:text-3xl mb:text-4xl md:text-2xl
                            lg:text-4xl xl:text-5xl  2xl:text-6xl 
                            font-bold text-gray-300 " >
              Arakelyan
            </h1>

            <h2 className="text-2xl sm:text-2xl mb:text-2xl md:text-2xl
                           lg:text-3xl xl:text-4xl 2xl:text-5xl 
                           text-designColor font-bold mt-4">
              <span>  {text} </span>
              <Cursor
                cursorBlinking="true"
                cursorColor="#e7e5e4"
              />
            </h2>
          </div>

          <div className=" w-full ">
            <img src={Homeimage}
              alt="HomeBackground"
              className=" absolute inset-0 w-full h-full 
                          object-cover object-center" />
          </div>

        </div>

      </section>


    </>);
}

export default Home;
