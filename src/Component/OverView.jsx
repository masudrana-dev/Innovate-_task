import React from 'react'
import { assets } from '../assets/assets'
import Container from '../Layout/Container'
import Slider from 'react-slick';
import '../../src/index.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black", width: "50px", height: "30px", position: "absolute", top: "400px", right: "100px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", display: "none", }}
            onClick={onClick}
        />
    );
}

const OverView = () => {

    const settings = {
        centerPadding: "10px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='  relative w-[100%] h-[530px] bg-cover bg-center  md:pt-[342px] ' style={{ backgroundImage: `url(${assets.reactangular})` }}>
            <Container className=" md:absolute  md:top-[-200px] md:right-[50px] ">
                <div className=''>
                    <div className="slider-container  ">
                        <Slider {...settings}>
                            <div>
                                <img src={assets.person1} alt="" className='w-80 h-80 object-cover' />
                            </div>
                            <div>
                                <img src={assets.person2} alt="" className='w-80 h-80 object-cover' />
                            </div>
                            <div>
                                <img src={assets.person3} alt="" className='w-80 h-80 object-cover' />
                            </div>
                            <div>
                                <img src={assets.person1} alt="" className='w-80 h-80' />
                            </div>
                            <div>
                                <img src={assets.person2} alt="" className='w-80 h-80' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
            <div className=' sm:pt-[60px]  md:pt-0 lg:pt-20 sm:text-center lg:text-left md:w-[80%]  lg:w-[30%] absolute md:left-[80px] lg:left-[17%] lg:top-[30%]'>
                <h1 className='font-inter text-[40px] font-bold'>Overveiw</h1>
                <p className='font-inter text-[18px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default OverView