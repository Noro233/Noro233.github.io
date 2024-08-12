import { Photo } from "../../Images"



function About() {


    return (
        <>
            <section
                id="about"
                className="relative flex pl-[50px] pr-[35px] items-center 
                           w-full min-h-screen bg-cover bg-right-bottom 
                           md:bg-center bg-no-repeat text-white"
                style={{ backgroundImage: `url(${Photo})` }}
            >

                <div className=" absolute inset-0 bg-black opacity-50"> </div>
                
                <div className="relative z-10 top--10 flex flex-col
                               items-center justify-center min-h-scr een p-4 text-center">

                    <div className="max-w-[450px] sm:max-w-[450px] md:max-w-[450px] 
                                    lg:max-w-[500px] sm:mt-[530px] 
                                    sm:ml-[300px] text-start mx-auto">
                   
                        <h3 className="text-3xl md:text-4xl lg:text-5xl sm:text-[35px] 
                                       font-bold text-designColor mb-4">
                            About
                        </h3>
                        <p className="text-[10px] sm:text-[18px] md:text-[20px]
                                      lg:text-[30px] font-serif font-bold">
                            As a motivated front-end developer, I am eager to contribute
                            my skills and enthusiasm to a dynamic team,
                            where I can continue to expand my knowledge and contribute to
                            the development of the company.
                        </p>

                    </div>
                </div>

            </section >
        </>
    )

}
export default About;
