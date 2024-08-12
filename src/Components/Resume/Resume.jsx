import { Resumeimage } from "../../Images";
import ResumeCards from "./ResumeCards";
import { Htmllogo, Csslogo, JavaScriptlogo, ReactJSlogo } from '../../Images';




function Resume() {
    const ProgressData = [
        { language: 'Armenian', percent: 100 },
        { language: 'English', percent: 80 },
        { language: 'Russian', percent: 70 },
    ];

    return (
        <section id="resume" className="relative w-full min-h-screen bg-black text-white ">

            <div className="absolute inset-0">
                {/* Background Image */}
                <img src={Resumeimage} alt="Resume Background" className="w-full h-full " />
            </div>






            <div className="relative z-10 w-full flex flex-row
                            items-center justify-center flex-wrap 
                             min-h-screen gap-10 p-4  "
                           >
              
              
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-col w-full/2 max-w-6xl 
                               mx-auto space-y-5 md:space-y-5 md:space-x-5 gap-5 ">

                    {/* Education */}
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl 
                             font-bold text-designColor mb-2">
                            Education
                        </h3>
                        <div className="border-l-4 border-black border-opacity-30 ">
                            <ResumeCards title="YSU Faculty of Management and Economics, Management"
                                years="2021-2024" />
                            <ResumeCards title="En Code Academy , Front-End 
                                                  Web Development Course"
                                years="2023-2024" />
                            <ResumeCards title="Vanadzor Special School of Profound 
                                                Teaching Mathematics 
                                                and Natural Sciences, Evrika"
                                years="2017-2020" />
                            <ResumeCards title="Vanadzor Basic School N25 After Viktor Hambardzumyan"
                                years="2008-2017" />

                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-[400px] mb-[50px] bg-black bg-opacity-20
                                    p-4 rounded-lg border-2 border-designColor
                                    cursor-pointer hover:opacity-70
                            ">
                        <p>
                            I am a dedicated learner with nearly 8 months of focused study at En-Code Academy,
                            where I gained a solid foundation in programming fundamentals, JavaScript, and React.js.
                            During this time, I independently delved into tasks involving React Native,
                            further enhancing my skills and practical knowledge. Currently, I am actively
                            pursuing self-education to expand my programming expertise and improve my proficiency
                            in English. I am passionate about continuous learning and strive to contribute
                            effectively in both technical and communication aspects within the field of programming.
                        </p>
                    </div>
                </div>






                {/* Skills and Languages */}
                <div className="flex flex-col items-center gap-20 mt-[50px] 
                                ">
                   
                    {/* Skills */}
                    <div className="flex flex-col flex-wrap
                                    w-fit mt-2 bg-black bg-opacity-20 
                                    p-5 gap-2 rounded-lg border-2 border-designColor">
                       
                        <p className="text-xl font-serif font-bold text-designColor">Skills</p>
                       
                        <div className="flex   gap-4 justify-center sm:flex-col 
                                          ">
                            <img src={Htmllogo} alt="HTML Logo"
                                className="w-16 h-16 cursor-pointer hover:opacity-70" />
                            <img src={Csslogo} alt="CSS Logo"
                                className="w-16 h-16 cursor-pointer hover:opacity-70" />
                            <img src={JavaScriptlogo} alt="JavaScript Logo"
                                className="w-16 h-16 cursor-pointer hover:opacity-70" />
                            <img src={ReactJSlogo} alt="React Logo"
                                className="w-16 h-16 cursor-pointer hover:opacity-70" />
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="bg-black bg-opacity-20 p-4 h-fit rounded-lg border-2 
                                    border-designColor cursor-pointer hover:opacity-70">
                        <p className="text-2xl font-serif font-bold text-designColor mb-4">Languages</p>
                        {ProgressData.map((item, index) => (
                            <div key={index} className="mb-4 sm:min-w-screen sm:max-w-screen md:min-w-screen
                            md:max-w-screen">
                                <p className="font-bold font-serif">{item.language}</p>
                                <div className="bg-gray-200 rounded-full h-3 mt-1">
                                    <div
                                        className="bg-gray-500 rounded-full h-3"
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Resume;
