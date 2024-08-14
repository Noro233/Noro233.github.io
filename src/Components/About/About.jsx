import { Photo } from "../../Images"



function About() {


    return (
        <>
            <section
                id="about"
                className="flex pl-[45px] pr-[40px] items-center 
                           w-full min-h-screen bg-cover bg-right-bottom 
                           md:bg-center bg-no-repeat text-white overflow-hidden relative"
                style={{ backgroundImage: `url(${Photo})` }}
            >
            <div className="inset-0 bg-black opacity-30 absolute"> </div>


                <div className=" flex flex-col 
                                 items-center justify-center min-h-screen">

                    <div className=" max-w-[250px] sm:max-w-[350px] md:max-w-[500px] 
                                     lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[550px] 
                                     p-4 flex flex-col gap-5
                                     mt-0 sm:mt-[450px] mb:mt-[450px] md:mt-0 ">

                        <h3 className="text-xl md:text-2xl lg:text-3xl sm:text-3xl 
                                       font-bold text-designColor ">
                            About
                        </h3>
                        <p className=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                                       font-serif leading-none " >
                            As a motivated front-end developer, I am eager
                            to contribute
                            my skills and enthusiasm to a dynamic team,
                            where I can continue to expand my knowledge
                            and contribute to
                            the development of the company.
                        </p>

                    </div>
                </div>

            </section >
        </>
    )

}
export default About;
