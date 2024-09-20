// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import Container from '../Layout/Container'

// const Color = () => {
//     const [toggle, setToggle] = useState(1)

//     function updateToggle(id) {
//         setToggle(id)
//     }
//     return (
//         <div className='w-[100%] h-[420px] bg-cover bg-center pb-[200px]  ' style={{ backgroundImage: `url(${assets.vector})` }}>
//             <Container>
//                 <div >
//                     <div className='w-[450px]'>
//                         <div className='flex'>
//                             <img src={assets.person1} alt="" className='w-80 h-80' />
//                             <div className=' flex flex-col pl-4 gap-y-5 cursor-pointer '>
//                                 <img src={assets.person1} alt="" className='w-16 h-16' onClick={() => updateToggle(1) />
//                                     <img src={assets.person2} alt="" className='w-16 h-16' onClick={() => updateToggle(2) />
//                                         <img src={assets.person3} alt="" className='w-16 h-16' onClick={() => updateToggle(3) />
//                                             <img src={assets.person1} alt="" className='w-16 h-16' onClick={() => updateToggle(1) />
//                             </div>
//                         </div>
//                         <div className='flex  gap-x-12  cursor-pointer pt-2 cursor-pointer '>
//                             <img src={assets.person1} alt="" className='w-16 h-16' onClick={() => updateToggle(1) />
//                                 <img src={assets.person2} alt="" className='w-16 h-16' onClick={() => updateToggle(2) />
//                                     <img src={assets.person3} alt="" className='w-16 h-16' onClick={() => updateToggle(3) />
//                                         <img src={assets.person2} alt="" className='w-16 h-16' onClick={() => updateToggle(1) />
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Color


import { useState } from 'react'
import { assets } from '../assets/assets'
import Container from '../Layout/Container'
import { Fade } from 'react-awesome-reveal'

const Collection = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='w-[100%] h-[390px] bg-cover bg-center pt-[50px] md:pt-[100px]' style={{ backgroundImage: `url(${assets.vector})` }}>
            <Container>
                <Fade>
                    <div className='md:flex justify-between'>
                        <div className='p-4 md:w-[500px]'>
                            <div className='flex'>
                                {/* Display the selected image based on the toggle value */}
                                {toggle === 1 && <img src={assets.person1} alt="" className='w-80 h-80 md:w-96 md:h-96 rounded-xl' />}
                                {toggle === 2 && <img src={assets.person2} alt="" className='w-80 h-80  md:w-96 md:h-96 rounded-xl' />}
                                {toggle === 3 && <img src={assets.person3} alt="" className=' w-80 h-80  md:w-96 md:h-96 rounded-xl' />}

                                <div className='flex flex-col pl-4 gap-y-5 cursor-pointer'>
                                    {/* Thumbnails to toggle images */}
                                    <img src={assets.person1} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(1)} />
                                    <img src={assets.person2} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(2)} />
                                    <img src={assets.person3} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(3)} />
                                    <img src={assets.person1} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(1)} />
                                </div>
                            </div>

                            <div className='flex gap-x-12 md:gap-x-14 pt-2 cursor-pointer'>
                                {/* Another row of thumbnails */}
                                <img src={assets.person1} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(1)} />
                                <img src={assets.person2} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(2)} />
                                <img src={assets.person3} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(3)} />
                                <img src={assets.person2} alt="" className='w-16 h-16 md:w-20 md:h-20 rounded-xl' onClick={() => updateToggle(2)} />
                            </div>
                        </div>

                        <div className='sm:text-center md:w-[40%] pt-10 md:pt-[170px]'>
                            <h1 className='font-inter font-bold text-[28px] lg:text-[32px]'>Collection Featured</h1>
                            <p className='font-inter text-[20px] lg:text-[24px]'>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in  vol uptate velit esse cillumsunt in culpa</p>
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}

export default Collection
