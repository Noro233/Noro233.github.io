import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../Constant";


const Navbar = () => {


    return (
        <>
            <div className=" w-full h-25 mx-auto bg-black justify-between 
                             items-center sticky top-0 z-40">


                <div className="ml-[800px]">
                              
                    <ul className="flex items-center gap-10  ">
                        {
                            navLinksdata.map(({ id, title, link }) => (

                                <li className=" text-base font-titleFont  text-gray-400 tracking-wide 
                                                cursor-pointer hover:text-designColor duration -300 mt-10"
                                                 key={id}>
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>

            </div>


        </>
    )
}
export default Navbar;