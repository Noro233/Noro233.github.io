import { Booksimage } from "../../Images";
import { Emailicon } from "../../Images";
import { Locationicon } from "../../Images";
import { Phoneicon } from "../../Images";
import { Linkedinicon } from "../../Images";
import { GitHubicon } from "../../Images";



function Contacts() {
  return (
    <section id="contacts" className=" w-full min-h-screen bg-black text-white ">


      <div className="flex flex-row items-center flex-wrap mt-[130px]">

        {/* Background Image */}
        <img src={Booksimage}
          alt="Background"
          className="w-90 object-cover inset-0 z-0 " />

        <div className=" flex flex-col md:flex-row 
                        items-center justify-end min-fit p-5 ">


          {/* Contact Information */}
          <div className="flex flex-col items-start md:items-start w-full
                          rounded-lg p-8 
                          border-b-2 border-b-designColor border-r-designColor space-y-6 ">

            <div className="flex items-center space-x-3">
              <img src={Emailicon} alt="Email Icon" className="w-5 h-5 bg-white" />
              <div>
                <p className="text-xl font-serif font-bold text-blue ">E-mail</p>
                <a href="mailto:arakelyannorayr23@gmail.com"
                  className="text-lg text-[12.9px] text-slate-400 hover:text-indigo-300 hover:underline" >
                  arakelyannorayr23@gmail.com </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src={Locationicon} alt="Location Icon" className="w-6 h-6 bg-white" />
              <div>
                <p className="text-xl font-serif font-bold ">Location</p>
                <p className="text-lg text-slate-400 hover:text-indigo-300 ">Yerevan, Armenia</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src={Phoneicon} alt="Phone Icon" className="w-6 h-6 bg-white" />
              <div>
                <p className="text-xl font-serif font-bold">Phone</p>
                <p className="text-lg text-slate-400 hover:text-indigo-300">+374 98171995</p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/in/norayr-arakelyan-6026442a8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:underline">
                <img src={Linkedinicon} alt="LinkedIn Icon" className="w-8 h-8" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Noro233" target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:underline">
                <img src={GitHubicon} alt="GitHub Icon" className="w-8 h-8" />
                <span>GitHub</span>
              </a>
            </div>


          </div>

        </div>

      </div>
      {/* Footer */}
      <div className="absolute w-full bottom-15 bg-black 
                     left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-lg  font-serif font-bold ">Thanks for watching!</p>
      </div>


    </section>
  );
}


export default Contacts;
