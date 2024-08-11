import { Booksimage } from "../../Images";
import { Emailicon } from "../../Images";
import { Locationicon } from "../../Images";
import { Phoneicon } from "../../Images";
import { Linkedinicon } from "../../Images";
import { GitHubicon } from "../../Images";



function Contacts() {
  return (
    <section id="contacts" className="relative w-full min-h-screen bg-black text-white ">

      {/* Background Image */}
      <img src={Booksimage}
        alt="Background"
        className="w-90 h-full object-cover absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row 
                      items-center justify-end min-h-screen p-9">


        {/* Contact Information */}
        <div className="flex flex-col items-start md:items-start w-full
                        md:w-1/3 bg-white bg-opacity-30 rounded-lg p-6
                         border-2 border-designColor space-y-6">

          <div className="flex items-center space-x-3">
            <img src={Emailicon} alt="Email Icon" className="w-6 h-6" />
            <div>
              <p className="text-xl font-serif font-bold">E-mail</p>
              <a href="mailto:arakelyannorayr23@gmail.com"
                className="text-lg hover:underline text-[12.9px]" >
                arakelyannorayr23@gmail.com </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <img src={Locationicon} alt="Location Icon" className="w-6 h-6" />
            <div>
              <p className="text-xl font-serif font-bold">Location</p>
              <p className="text-lg">Yerevan, Armenia</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <img src={Phoneicon} alt="Phone Icon" className="w-6 h-6" />
            <div>
              <p className="text-xl font-serif font-bold">Phone</p>
              <p className="text-lg">+374 98171995</p>
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

      {/* Footer */}
      <div className="absolute w-full bottom-15 bg-black 
                     left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-lg  font-serif font-bold">Thanks for watching!</p>
      </div>
    </section>
  );
}


export default Contacts;
