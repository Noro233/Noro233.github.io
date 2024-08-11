import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../Constant";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-black sticky top-0 z-20">
            <div className="max-w-6xl mx-auto px-4 py-4 flex
                        items-center justify-between">
                <div className="text-white text-2xl font-bold">
                    {isMenuOpen ? <a></a> : <a href="#home">Norayr</a>}
                </div>

                {/* Navigation Links for Desktop */}
                <ul className="hidden md:flex md:items-center md:gap-8">
                    {navLinksdata.map(({ id, title, link }) => (
                        <li
                            key={id}
                            className="text-base font-titleFont text-gray-400 tracking-wide
                           cursor-pointer hover:text-designColor duration-300"
                        >
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
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 h-[20px] w-[370px] 
                          text-white flex justify-start  items-center p-7 
                          transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                          transition-transform duration-300 ease-in-out z-10`}
            >
                {navLinksdata.map(({ id, title, link }) => (
                    <Link
                        key={id}
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                        className="w-full py-2 text-right hover:bg-gray-800"
                    >
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;