import { CiSearch } from "react-icons/ci"
import logo from '../assets/Logo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <header className='flex justify-between items-center py-5 my-6 px-3 max-w-4xl mx-auto'>
                <div>
                    <img src={logo} alt="logo" onClick={() => navigate("/")} />
                </div>
                <div className=" flex gap-8 items-center">
                    <ul className='flex space-x-8'>
                        <li className="cursor-pointer font-semibold 
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/")}>
                            Home
                        </li>
                        <li className="cursor-pointer font-semibold
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/pages")}>
                            Pages
                        </li>
                        <li className="cursor-pointer font-semibold
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/services")}>
                            Services
                        </li>
                        <li className="cursor-pointer font-semibold
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/project")}>
                            Project
                        </li>
                        <li className="cursor-pointer font-semibold
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/blog")}>
                            Blog
                        </li>
                        <li className="cursor-pointer font-semibold
                        transform transition duration-700 hover:scale-110"
                            onClick={() => navigate("/contact")}>
                            Contact
                        </li>
                    </ul>
                    <CiSearch className="cursor-pointer text-lg" />
                </div>
            </header>
        </div>
    )
}

export default Header