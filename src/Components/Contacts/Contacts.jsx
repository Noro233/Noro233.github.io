import { Booksimage } from "../../Images";
import { Emailicon } from "../../Images";
import { Locationicon } from "../../Images";
import { Phoneicon } from "../../Images";
import { Linkedinicon } from "../../Images";
import { GitHubicon } from "../../Images";



function Contacts() {


  return (
    <>
      <section id="contacts" className="w-full h-[600px]  bg-black ">

        <div className="w-full flex flex-row items-center gap-10   bg-black ">

          <div className=" w-full/2 h-[500px] bg-black  ">
            <img src={Booksimage} className="w-full/2" />
          </div>

          <div className=" flex flex-col items-center gap-5 w-full/2
                            h-[370px] bg-white opacity-30 rounded-lg 
                             border-r-4 border-r-designColor border-b-4 border-b-designColor">

            <div className=" flex flex-col items-center gap-1 ">

              <div className="flex flex-row items-center gap-3">
                <img src={Emailicon} className="h-5 w-5" />
                <p className="font-serif font-bold text-black text-xl "> E-mail </p>
              </div>
              <p className="font-bold hover:text-black hover: cursor-pointer "> arakelyannorayr23@gmail.com</p>

            </div>

            <div className=" flex flex-col items-center gap-1 ">

              <div className="flex flex-row items-center gap-3">
                <img src={Locationicon} className="h-5 w-5" />
                <p className="font-serif font-bold text-black text-xl "> Location </p>
              </div>
              <p className="font-bold hover:text-black hover: cursor-pointer "> Yerevan, Armenia </p>

            </div>

            <div className=" flex flex-col items-center gap-1 ">

              <div className="flex flex-row items-center gap-3">
                <img src={Phoneicon} className="h-5 w-5" />
                <p className="font-serif font-bold text-black text-xl  "> Phone </p>
              </div>
              <p className="font-bold hover:text-black hover: cursor-pointer "> +374 98171995 </p>

            </div>


            <div className="flex flex-col w-[300px] h-[250px] ">

              <div id="linkdein" className="flex flex-row items-center w-[100px] h-[50px] mt-5 gap-5">
                <img src={Linkedinicon} className="w-10 h-10 " />
                <a href="https://www.linkedin.com/in/norayr-arakelyan-6026442a8" target="_blank"
                  rel="noopener noreferrer" className="font-bold hover:text-black hover: cursor-pointer">
                  LinkedIn
                </a>
              </div>

              <div id="GitHub" className="flex flex-row items-center w-[100px] h-[50px] gap-5">
                <img src={GitHubicon} className="w-10 h-10 " />
                <a href="https://github.com/Noro233" target="_blank" rel="noopener noreferrer"
                  className="font-bold hover:text-black hover:cursor-pointer ">
                  GitHub
                </a>
              </div>

            </div>

          </div>


        </div>
        <div id="footer" className="w-full h-[50px] ml-[500px] mt-[50px]  ">
          <p className="font-bold font-serif text-white "> Thanks for watching ! </p>
        </div>



      </section>


    </>
  );
}

export default Contacts;
