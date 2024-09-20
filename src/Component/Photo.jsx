import { Zoom } from "react-awesome-reveal"
import { assets } from "../assets/assets"
import Container from "../Layout/Container"

const Photo = () => {
    return (
        <div className="pt-[200px] sm:pt-[400px] md:pt-[350px]  relative">
            <Container>
                <Zoom damping={0.1}>
                    <div className="flex-col  md:flex md:flex-row justify-between items-center">
                        <div className="sm:hidden md:flex justify-between items-center md:gap-5 lg:gap-20">
                            <div >
                                {/* Photo 1 */}
                                <div className="relative ">
                                    <div className="w-[274px] h-[285px] rounded-3xl flex justify-center items-center ">
                                        <img src={assets.webapp} alt="" />
                                    </div>
                                    <img
                                        src={assets.person1}
                                        alt="User 1"
                                        className="absolute w-12 h-12 rounded-full border-2 border-white bottom-[-20px] right-[-20px]"
                                    />
                                </div>
                                {/* Photo-2  */}
                                <div className="relative mt-[77px] ml-[85px] ">
                                    <div className="w-[160px] h-[170px] bg-sky-100 rounded-3xl flex justify-center items-center">
                                        <img src={assets.mern} alt="" />
                                    </div>
                                    <img
                                        src={assets.person2}
                                        alt="User 2"
                                        className="absolute w-12 h-12 rounded-full border-2 border-white bottom-[-15px] right-[0px]"
                                    />
                                </div>
                            </div>
                            {/* photo-3  */}
                            <div className="relative">
                                <div className="w-[200px] h-[205px] bg-sky-100 rounded-3xl flex justify-center items-center ">
                                    <img src={assets.native} alt="" />
                                </div>
                                <img
                                    src={assets.person3}
                                    alt="User 3"
                                    className="absolute w-12 h-12 rounded-full border-2 border-white bottom-[-20px] right-[-20px]"
                                />
                            </div>
                        </div>
                        <div className="sm:pt-[30px]  md:w-[40%] lg:w-[35%]">
                            <p className=" sm:text-center text-left font-inter md:text-[18px] lg:text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam nam, quaerat facilis beatae, enim voluptate accusantium deserunt, sequi dignissimos non fugit vitae iusto tempore consequatur possimus laboriosam consectetur in doloribus quia minus illo! Animi sunt sequi tenetur ipsum laudantium.</p>
                            <button className=" md:lg:mt-10 m-auto block border border- border-[#4000FF] hover:bg-[#4000FF] text-[#4000FF] hover:text-white transition ease-in-out  font-inter font-semibold w-[121px] h-[52px] rounded-xl">Sign Up</button>
                        </div>
                    </div>
                </Zoom>
            </Container>
        </div>
    )
}

export default Photo
