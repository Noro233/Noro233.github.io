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

                <div className=" absolute inset-0  bg-black opacity-40 "> </div>

                    <div className="relative z-10 flex flex-col 
                                    items-center justify-center min-h-screen text-center">

                        <div className=" bottom-20 max-w-[500px] sm:max-w-[450px] md:max-w-[450px] 
                                        lg:max-w-[500px] sm:mt-[520px] 
                                        sm:ml-[350px] text-start ">

                            <h3 className="text-2xl md:text-4xl lg:text-5xl sm:text-[35px] 
                                           font-bold text-designColor ">
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
