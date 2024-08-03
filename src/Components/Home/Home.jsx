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
      <section id="home" className=" max-w-full w-full h-[900px] font-titleFont ">

        <div className=" w-full h-[800px] " >

          <div className="flex flex-col gap-3 pt-[120px] pl-40 pt-20 absolute z-30 ">
            <h1 className="text-6xl font-bold text-gray font-serif"> Norayr </h1>
            <h1 className="text-6xl font-bold text-gray font-serif " > Arakelyan </h1>
            <h2 className="text-designColor font-bold text-3xl font-serif"> <span>  {text} </span>
              <Cursor
                cursorBlinking="true"
                cursorColor="#e7e5e4"
              />
            </h2>
          </div>

          <div className=" w-full  ">
            <img src={Homeimage} className="w-full h-[800px]" />
          </div>

        </div>

      </section>


    </>);
}

export default Home;
