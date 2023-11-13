'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [selected2Button, setSelected2Button] = useState(1);
    const [selected3Button, setSelected3Button] = useState(2);
    const [selected4Button, setSelected4Button] = useState(0);

    const buttons = ['Clinic', 'Test', 'Surgery', 'Medicine'];

    const handleClick = (index) => {
        setSelectedButton(index);
    };


    const buttonss = [
        { name: 'Reschedule', type: false, class: true },
        { name: 'Cancel', type: false, class: false },
        { name: 'View', type: true, class: false },
    ];

    const handleClickSecond = (index) => {
        setSelected2Button(index);
    };

    const handleClickFourth = (index) => {
        setSelected4Button(index);
    };

    const handleClickThird = (index) => {
        setSelected3Button(index);
    };

    return (
        <div className='p-3 font-Quicksand'>
            <div className='flex justify-between h-20 p-2'>
                <div className=" text-black text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </div>

                <div className="text-center text-black text-[15px] font-bold font-Quicksand capitalize">
                    UPCOMING APPOINMENTS
                </div>

                <div>

                </div>
            </div>


            <div className="w-full h-28 bg-gradient-to-r from-blue-800 to-indigo-950 rounded-2xl flex items-center justify-center gap-5">
                <div className="text-white font-Quicksand  font-bold capitalize">new booking in 2 minutes</div>
                <div>
                    <button className="rounded-full border-2 text-white border-white bg-gradient-to-r from-orange-500 via-pink-600 to-purple-800 p-1 h-14 w-32">Book Now</button>
                </div>
            </div>





            <div className=' w-full h-80  bg-neutral-100 rounded-[9px] mt-3 p-5 '>

<div className="flex justify-between">
    {buttons.map((button, index) => (
        <button
            key={index}
            onClick={() => handleClick(index)}
            style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)' }}
            className={`text-sm w-16 h-10 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-500 hover:to-fuchsia-700 ${selectedButton === index ? 'text-white text-sm bg-gradient-to-r from-orange-500 via-orange-500 to-fuchsia-700' : ' text-sm text-black bg-gradient-to-r from-zinc-100 to-zinc-100 '} outline-none`}        >
            {button}
        </button>
    ))}
</div>








<div className='flex items-center justify-between mt-10 gap-2'>

    <div className="w-84 h-84 rounded-full overflow-hidden border-4 border-orange-500 border-opacity-40">
        <Image src={require("../../public/profile.svg")} width={90} height={110} alt="item" />
    </div>


    <div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">17 september 2021, 9.30 PM</div>
        <div className=" h-6 text-amber-600 text-sm font-normal font-Quicksand capitalize">appointment with doctor arun</div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">doctor world clinic</div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">test :  X-ray test</div>
    </div>

</div>



<div className="flex justify-between mt-5">
    {buttonss.map((button, index) => (
        <button
            key={index}
            onClick={() => handleClickSecond(index)}

            className={button.class ? `w-28 text-sm flex justify-center item-center p-3 gap-3 h-12 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-blue-950 ${selected2Button === index ? 'text-white bg-gradient-to-r   from-fuchsia-700 to-blue-950' : 'text-black bg-gradient-to-r from-zinc-100 to-zinc-100'}` :
            `w-24 text-sm flex justify-center item-center p-3 gap-3 h-12 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-blue-950 ${selected2Button === index ? 'text-white bg-gradient-to-r   from-fuchsia-700 to-blue-950' : 'text-black bg-gradient-to-r from-zinc-100 to-zinc-100'}`}
        >
            {button.name}
            {button.type && (<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg></span>)}
        </button>
    ))}
</div>












</div>



            <div className=' w-full h-80  bg-neutral-100 rounded-[9px] mt-3 p-5 '>

<div className="flex justify-between">
    {buttons.map((button, index) => (
        <button
            key={index}
            onClick={() => handleClickThird(index)}
            style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)' }}
            className={`text-sm w-16 h-10 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-500 hover:to-fuchsia-700 ${selected3Button === index ? 'text-white text-sm bg-gradient-to-r from-orange-500 via-orange-500 to-fuchsia-700' : ' text-sm text-black bg-gradient-to-r from-zinc-100 to-zinc-100 '} outline-none`}        >
            {button}
        </button>
    ))}
</div>








<div className='flex items-center justify-between mt-10 gap-2'>

    <div className="w-84 h-84 rounded-full overflow-hidden border-4 border-orange-500 border-opacity-40">
        <Image src={require("../../public/profile.svg")} width={90} height={110} alt="item" />
    </div>


    <div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">17 september 2021, 9.30 PM</div>
        <div className=" h-6 text-amber-600 text-sm font-normal font-Quicksand capitalize">appointment with doctor arun</div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">doctor world clinic</div>
        <div className=" h-6 text-black text-sm font-normal font-Quicksand capitalize">test :  X-ray test</div>
    </div>

</div>



<div className="flex justify-between mt-5">
    {buttonss.map((button, index) => (
        <button
            key={index}
            onClick={() => handleClickFourth(index)}

            className={button.class ? `w-28 text-sm flex justify-center item-center p-3 gap-3 h-12 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-blue-950 ${selected4Button === index ? 'text-white bg-gradient-to-r   from-fuchsia-700 to-blue-950' : 'text-black bg-gradient-to-r from-zinc-100 to-zinc-100'}` :
            `w-24 text-sm flex justify-center item-center p-3 gap-3 h-12 rounded-[50px] shadow hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-blue-950 ${selected4Button === index ? 'text-white bg-gradient-to-r   from-fuchsia-700 to-blue-950' : 'text-black bg-gradient-to-r from-zinc-100 to-zinc-100'}`}
        >
            {button.name}
            {button.type && (<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg></span>)}
        </button>
    ))}
</div>












</div>




            <div className='mt-8'>
                <button className="w-full h-14 bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow font-bold">Back</button>

            </div>

        </div>
    )
}

export default page