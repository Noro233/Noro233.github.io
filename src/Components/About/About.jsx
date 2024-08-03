import { Photo } from "../../Images"



function About() {


    return (
        <>
            <section id="about" className="w-full h-[900px] pb-20 ">

                <div className=" flex flex-col gap-[50px] h-[150px] 
                                 w-[500px]  absolute z-30 mt-[100px] ">

                    <div className="ml-[200px]" >
                        <h3 className=" font-serif text-4xl font-bold  text-designColor ">
                            About
                        </h3>
                    </div>

                    <div className="ml-[100px]">
                        <p className="font-serif font-bold text-xl ">
                         As a motivated front-end developer, I am eager to
                         contribute my skills and enthusiasm to a dynamic team,
                         where I can continue to expand my knowledge and 
                         contribute to the development of the company.
                        </p>
                    </div>

                </div>

                <div className=" w-full h-[700px] relative ">
                    <img src={Photo} className="  w-full md:w-full h-[700px] relative" />
                </div>

            </section >
        </>
    )

}
export default About;
