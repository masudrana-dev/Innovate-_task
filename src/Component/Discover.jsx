// import { Fade } from "react-awesome-reveal"
// import { assets, cardData } from "../assets/assets"
// import Container from "../Layout/Container"
// import { IoFilterSharp } from "react-icons/io5";
// import { useState } from "react";

// const Discover = () => {
//     const [toggole, setToggle] = useState([])

//     function updateToggle(id) {
//         setToggle(id)
//     }
//     return (
//         <div>
//             <Container>
//                 <Fade damping={0.1}>
//                     <div>
//                         <h1 className="font-inter font-bold text-[32px] pb-[29px]">DISCOVER MORE</h1>
//                         <div className="flex justify-between items-center pb-[62px]">
//                             <ul className="flex justify-between gap-10">
//                                 <li className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white">All</li>
//                                 <li className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white">New</li>
//                                 <li className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white">MERN</li>
//                                 <li className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white">Database</li>
//                             </ul>
//                             <button className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white flex justify-evenly items-center"><IoFilterSharp />All Filter</button>
//                         </div>
//                         <div className="grid grid-cols-4 gap-4">
//                             {
//                                 cardData.map((item) => (
//                                     // <div className="card bg-base-100 w-56 shadow-xl">
//                                     //     <figure className="px-10 pt-10">
//                                     //         <img
//                                     //             src={item.image}
//                                     //             alt="Shoes"
//                                     //             className="rounded-xl" />
//                                     //     </figure>
//                                     //     <div className="card-body items-center text-center">
//                                     //         <h2 className="card-title">{item.name}!</h2>
//                                     //         <p>{item.price}</p>
//                                     //         <div className="card-actions">
//                                     //             <button className="btn btn-primary">Buy Now</button>
//                                     //         </div>
//                                     //     </div>
//                                     // </div>
//                                     <div key={item.id} className=" relative border border-slate-100 bg-slate w-72 rounded-3xl shadow-xl p-5">
//                                         <img src={item.image} alt="" className="w-[250px] h-[220px] rounded-2xl object-cover" />

//                                         <div className=" absolute avatar-group -space-x-6 rtl:space-x-reverse top-[53%] left-[12%]">
//                                             <div className="avatar">
//                                                 <div className="w-10">
//                                                     <img src={assets.person1} />
//                                                 </div>
//                                             </div>
//                                             <div className="avatar">
//                                                 <div className="w-10">
//                                                     <img src={assets.person2} />
//                                                 </div>
//                                             </div>
//                                             <div className="avatar">
//                                                 <div className="w-10">
//                                                     <img src={assets.person3} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <p className="font-inter pt-6 text-[22px] text-teal-700 font-semibold "> {item.name}</p>
//                                         <div className="flex justify-between py-3 font-inter">
//                                             <p>{item.price}</p>
//                                             <p>1 of 09</p>
//                                         </div>
//                                         <div className="flex justify-between">
//                                             <button className="btn btn-outline btn-info">Read</button>
//                                             <button className="btn btn-outline btn-success">ADD</button>
//                                         </div>
//                                     </div>

//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </Fade>
//             </Container>
//         </div>
//     )
// }

// export default Discover




import { Fade } from "react-awesome-reveal"
import { assets, cardData } from "../assets/assets"
import Container from "../Layout/Container"
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";

const Discover = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory === 'All'
        ? cardData
        : cardData.filter(item => item.category === selectedCategory);

    return (
        <div className="sm:pt-[400px] md:pt-[300px]">
            <Container>
                <Fade damping={0.1}>
                    <div>
                        <h1 className="font-inter font-bold text-[32px] pb-[29px] md:pl-10 lg:pl-0">DISCOVER MORE</h1>
                        <div className=" md:px-10 lg:px-0 flex justify-between items-center pb-[62px]">
                            <ul className="flex justify-between gap-10 cursor-pointer">
                                {/* Category buttons */}
                                <li
                                    onClick={() => handleCategoryChange('All')}
                                    className={`border bg-slate-200 py-2 w-[100px] rounded-xl text-center font-inter font-semibold transition ease-in-out ${selectedCategory === 'All' ? 'bg-[#4000ff] text-white' : 'hover:bg-[#4000ff] hover:text-white'}`}
                                >
                                    All
                                </li>
                                <li
                                    onClick={() => handleCategoryChange('new')}
                                    className={`border bg-slate-200 py-2 w-[100px] rounded-xl text-center font-inter font-semibold transition ease-in-out ${selectedCategory === 'New' ? 'bg-[#4000ff] text-white' : 'hover:bg-[#4000ff] hover:text-white'}`}
                                >
                                    New
                                </li>
                                <li
                                    onClick={() => handleCategoryChange('mern')}
                                    className={`border bg-slate-200 py-2 w-[100px] rounded-xl text-center font-inter font-semibold transition ease-in-out ${selectedCategory === 'MERN' ? 'bg-[#4000ff] text-white' : 'hover:bg-[#4000ff] hover:text-white'}`}
                                >
                                    MERN
                                </li>
                                <li
                                    onClick={() => handleCategoryChange('db')}
                                    className={`border bg-slate-200 py-2 w-[100px] rounded-xl text-center font-inter font-semibold transition ease-in-out ${selectedCategory === 'Database' ? 'bg-[#4000ff] text-white' : 'hover:bg-[#4000ff] hover:text-white'}`}
                                >
                                    Database
                                </li>
                            </ul>
                            <button className="border bg-slate-200 py-2  w-[100px] rounded-xl text-center font-inter font-semibold hover:bg-[#4000ff] transition ease-in-out hover:text-white flex justify-evenly items-center">
                                <IoFilterSharp />All Filter
                            </button>
                        </div>

                        {/* Render filtered data */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredData.map((item) => (
                                <div key={item.id} className=" relative border border-slate-100 bg-slate w-72 rounded-3xl shadow-xl p-5">
                                    <img src={item.image} alt="" className="w-[250px] h-[220px] rounded-2xl object-cover" />

                                    <div className="absolute avatar-group -space-x-6 rtl:space-x-reverse top-[53%] left-[12%]">
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={assets.person1} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={assets.person2} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={assets.person3} />
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-inter pt-6 text-[22px] text-teal-700 font-semibold "> {item.name}</p>
                                    <div className="flex justify-between py-3 font-inter">
                                        <p>{item.price}</p>
                                        <p>1 of 09</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="btn btn-outline btn-info">Read</button>
                                        <button className="btn btn-outline btn-success">ADD</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}

export default Discover;
