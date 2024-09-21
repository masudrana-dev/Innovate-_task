import { Fade } from 'react-awesome-reveal'
import { assets } from '../assets/assets'
import img from '../assets/Vector-1.png'
import Container from '../Layout/Container'

const Banner = () => {
    return (
        <div className='w-[100%] h-[350px] bg-cover bg-center ' style={{ backgroundImage: `url(${img})` }}>
            <Container>
                <Fade damping={0.1}>
                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 sm:gap-x-5 sm:gap-y-5 lg:gap-x-10 pt-[80px] lg:pt-[129px] ">
                        {/* Image 1 */}
                        <div>
                            <img src={assets.mongo} alt="" className="sm:w-[150px] sm:h-[150px]  md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-md" />
                        </div>
                        <div>
                            <img src={assets.express} alt="" className="sm:w-[150px] sm:h-[150px] md:w-[260px] md:h-[260px] lg:w-[260px] lg:h-[260px] lg:ml-4 lg:mt-5 rounded-md" />
                        </div>
                        <div>
                            <img src={assets.react} alt="" className="sm:w-[150px] sm:h-[150px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-md" />
                        </div>
                        <div className=''>
                            <img src={assets.node} alt="" className="sm:w-[150px] sm:h-[150px] md:w-[260px] md:h-[260px] lg:w-[260px] lg:h-[260px] object-cover lg:mt-5 rounded-md" />
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}

export default Banner
