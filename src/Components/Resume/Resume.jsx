import { Resumeimage } from "../../Images";
import ResumeCards from "./ResumeCards";
import { Htmllogo } from "../../Images";
import { Csslogo } from "../../Images";
import { JavaScriptlogo } from "../../Images";
import { ReactJSlogo } from "../../Images";




function Resume() {

    const ProgressData = [
        { language: "Armenian", percent: 99 },
        { language: "English", percent: 80 },
        { language: "Russian", percent: 57 },

    ];


    return (
        <>
            <section id="resume" className="w-full h-[800px]">

                <div className="w-full absolute h-[700px]">
                    <img src={Resumeimage} className="w-full h-[700px]" />
                </div>


                <div className="flex flex-row  w-full h-[800px] gap-20 ">

                    <div className=" flex-col items-center relative  ">

                        <h3 className="font-bold realtive text-2xl font-serif pl-10 text-designColor ">
                            Education
                        </h3>

                        <div className="border-l-[5px] ml-[40px] pt-[7px] h-[400px] w-[400px]
                                        border-black  border-opacity-30 flex-col gap-5 absolute">
                            <ResumeCards
                                title="    YSU Faculty of Managment and Economics , Managment"
                                years=" 2021-2024" />

                            <ResumeCards
                                title="  Vanadzor special school of profound teaching matemathics
                                 and natural sciences, <Evrika>"
                                years="2017-2020"
                            />
                            <ResumeCards
                                title=" Vanadzor Basic school N25 After Viktor Hambardzumyan"
                                years="2008-2017"
                            />

                            <ResumeCards
                                title=" En Code Academy"
                                years="2023-2024"
                            />
                        </div>


                        <div className=" flex flex-row items-center gap-10">

                            <div className="flex ml-[35px] w-[900px] h-40 bg-black
                                            border-b-4 border-l-4  border-designColor
                                            mt-[450px]  bg-opacity-10 hover:bg-opacity-50 ">
                                <p>
                                I am a dedicated learner with nearly 8 months of focused study at En-Code Academy, 
                                where I gained a solid foundation in programming fundamentals, JavaScript, and React.js. 
                                During this time, I independently delved into tasks involving React Native, further enhancing 
                                my skills and practical knowledge. Currently, I am actively pursuing self-education to expand my
                                programming expertise and improve my proficiency in English. I am passionate about continuous
                                learning and strive to contribute effectively in both technical and
                                communication aspects within the field of programming.
                                 
                                </p>
                            </div>

                        </div>


                    </div>


                    <div className="flex flex-col items-between gap-[20px] 
                                     relative  w-[200px] h-[600px] mt-[30px] ">

                        <div className="flex flex-col items-ceter w-[100px] h-[650px] 
                                        bg-black ml-[150px] bg-opacity-20 hover:bg-opacity-30]">

                            <p className=" font-serif font-bold text-xl text-designColor pl-5"> Skills </p>
                            <img className="hover:opacity-30 p-[20px]" src={Htmllogo} />
                            <img className="hover:opacity-30 p-[20px]  " src={Csslogo} />
                            <img className="hover:opacity-30 p-[20px] " src={JavaScriptlogo} />
                            <img className="hover:opacity-30 p-[20px] " src={ReactJSlogo} />

                        </div>

                        <div className="flex flex-col  gap- w-[250px] h-[200px] bg-black 
                                        bg-opacity-20 hover:bg-opacity-30  ">
                            <p className="font-serif font-bold text-2xl text-designColor"> Languages </p>
                            {ProgressData.map((item, index) => (
                                <div key={index} >
                                    <p className="font-bold realtive font-serif ">{item.language}</p>
                                    <div className="bg-gray-200  rounded-full/2 h-3 mt-1">
                                        <div
                                            className=" bg-gray-500 rounded-full/2 h-3  "
                                            style={{ width: `${item.percent}%` }}
                                        > </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>



                </div>

            </section >
        </>
    )
}
export default Resume;
