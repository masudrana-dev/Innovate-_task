import { assets } from "../assets/assets"
import Container from "../Layout/Container"

const Explore = () => {
    return (
        <div className="md:px-5 lg:px-0 pt-[120px] md:pt-[210px] pb-20 md:pb-[300px]">
            <Container>
                <div className="sm:flex-col-reverse flex md:flex-row  justify-between items-center">
                    <div className=" sm:w-[80%] md:w-[50%]">
                        <p className=" sm:pt-12 md:pt-0 sm:text-center md:text-left font-inter text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur autem veniam reprehenderit, et dolorem, at ea fuga in possimus iure soluta dolor magni eius. Sed corrupti possimus labore sapiente asperiores qui. Tempora qui hic veritatis dolorum, quis voluptatum maiores laboriosam accusantium consectetur pariatur eius? Et, eveniet alias architecto cupiditate optio in beatae nesciunt explicabo minima nisi libero. Exercitationem aperiam officia unde nemo provident. Alias quod error mollitia natus impedit veritatis assumenda illum voluptatum, dicta magnam sed odio,  </p>
                        <button className="sm:mt-5 md:mt-10 m-auto block border border- border-[#4000FF] hover:bg-[#4000FF] text-[#4000FF] hover:text-white transition ease-in-out  font-inter font-semibold w-[121px] h-[52px] rounded-xl">Explroe Now</button>
                    </div>
                    <div className="stack ">
                        <div className="bg-[#1F3B68] text-white p-5 h-96 w-96  rounded-xl ">
                            <h1 className="font-inter text-[32px]">MERN Stack Developer</h1>
                            <div className="flex items-center ">
                                <img src={assets.person1} alt="" className="w-12 h-12 rounded-full" />
                                <p className=" pl-2 font-inter font-semibold text-[14px]">David Miller</p>
                            </div>
                            <div className=" bg-gradient-to-r from-slate-500 to-gray-600 p-2 w-80 h-20 absolute bottom-5 rounded-xl ">
                                <h1 className="font-inter text-[20px]">Lawrance Stroll</h1>
                                <p className="font-inter pt-2">Hegifueshho dhfsui foiehhsio</p>
                            </div>
                        </div>
                        <div className="bg-accent text-accent-content grid h-96 w-96 place-content-center rounded">2</div>
                        <div className="bg-secondary text-secondary-content grid h-96 w-96 place-content-center rounded">
                            3
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Explore
