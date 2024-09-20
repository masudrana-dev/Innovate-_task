import Container from '../Layout/Container'
import { RiSearch2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='py-5 bg-[#363636] '>
            <Container>
                <div className=' md:flex justify-between items-center '>
                    <div className='sm:pl-16'>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className='text-white font-inter text-[18px] flex justify-center items-center'>Home <FaChevronDown className='ml-3' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className='text-white  font-inter text-[18px] flex justify-center items-center ml-12'>Event<FaChevronDown className='ml-3' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className='text-white text-[18px] font-inter flex justify-center items-center ml-12'>Contact<FaChevronDown className='ml-3' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className='text-white text-[18px] font-inter flex justify-center items-center ml-12'>Blog<FaChevronDown className='ml-3' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='relative sm:mt-5'>
                        <input type="text" placeholder='search' className='sm:w-full md:w-[300px] outline-none py-2 px-10 rounded-full' />
                        <RiSearch2Line className='absolute top-[10px] right-[20px] text-[22px] font-bold' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
