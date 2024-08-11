import { Resumeimage } from "../../Images";
import ResumeCards from "./ResumeCards";
import { Htmllogo, Csslogo, JavaScriptlogo, ReactJSlogo } from '../../Images';




function Resume() {
    const ProgressData = [
        { language: 'Armenian', percent: 99 },
        { language: 'English', percent: 80 },
        { language: 'Russian', percent: 57 },
    ];

    return (
        <section id="resume" className="relative w-full min-h-screen bg-black text-white">

            <div className="absolute inset-0">
                {/* Background Image */}
                <img src={Resumeimage} alt="Resume Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col items-center
                        justify-center min-h-screen p-4">
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl 
                          mx-auto space-y-10 md:space-y-0 md:space-x-10">

                    {/* Education */}
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl 
                             font-bold text-designColor mb-6">
                            Education
                        </h3>
                        <div className="border-l-4 border-black border-opacity-30 pl-6 space-y-4">
                            <ResumeCards title="YSU Faculty of Management and Economics, Management" years="2021-2024" />
                            <ResumeCards title="Vanadzor Special School of Profound Teaching Mathematics 
                                    and Natural Sciences, Evrika" years="2017-2020" />
                            <ResumeCards title="Vanadzor Basic School N25 After Viktor Hambardzumyan" years="2008-2017" />
                            <ResumeCards title="En Code Academy" years="2023-2024" />
                        </div>
                    </div>

                    {/* Skills and Languages */}
                    <div className="flex-1 space-y-10">
                        {/* Skills */}
                        <div className="bg-black bg-opacity-20 p-4 rounded-lg border-2 border-designColor">
                            <p className="text-xl font-serif font-bold text-designColor mb-4">Skills</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <img src={Htmllogo} alt="HTML Logo" className="w-16 h-16" />
                                <img src={Csslogo} alt="CSS Logo" className="w-16 h-16" />
                                <img src={JavaScriptlogo} alt="JavaScript Logo" className="w-16 h-16" />
                                <img src={ReactJSlogo} alt="React Logo" className="w-16 h-16" />
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-black bg-opacity-20 p-4 rounded-lg border-2 border-designColor">
                            <p className="text-2xl font-serif font-bold text-designColor mb-4">Languages</p>
                            {ProgressData.map((item, index) => (
                                <div key={index} className="mb-4">
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

                {/* Additional Information */}
                <div className="mt-10 bg-black bg-opacity-20 p-4 rounded-lg border-2 border-designColor">
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
        </section>
    );
}

export default Resume;
