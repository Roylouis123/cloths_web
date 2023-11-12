import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='p-3'>
            <div className='flex justify-between h-24 p-2'>
                <div className=" text-black text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </div>

                <div className="text-center font-quicksand text-black text-xl font-bold uppercase">

                    UPCOMING APPOINMENTS
                </div>

                <div>

                </div>
            </div>


            <div className="w-full h-40 bg-gradient-to-r from-blue-800 to-indigo-950 rounded-2xl flex items-center justify-center gap-5">
                <div className="text-white font-quicksand  font-bold capitalize">new booking in 2 minutes</div>
                <div>
                    <button className="rounded-full border-2 text-white border-white bg-gradient-to-r from-orange-500 via-pink-600 to-purple-800 p-1 h-14 w-32">Book Now</button>
                </div>
            </div>





            <div className=' w-full h-80  bg-neutral-100 rounded-[9px] mt-3 p-5 '>

                <div className="flex justify-between">
                    <button className=" w-20  h-12 text-white bg-gradient-to-r from-orange-500 via-orange-500 to-fuchsia-700 rounded-[50px] shadow">Clinic</button>
                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Test</button>

                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Surgery</button>

                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Medicine</button>


                </div>







                <div className='flex items-center justify-start mt-10 gap-2'>

                    <div className="w-84 h-84 rounded-full overflow-hidden border-4 border-orange-500 border-opacity-40">
                        <Image src={require("../../public/profile.svg")} width={90} height={110} alt="item" />
                    </div>


                    <div>
                        <div className=" h-6 text-black text-lg font-normal font-['Quicksand'] capitalize">17 september 2021, 9.30 PM</div>
                        <div className=" h-6 text-amber-600 text-lg font-normal font-['Quicksand'] capitalize">appointment with doctor arun</div>
                        <div className=" h-6 text-black text-lg font-normal font-['Quicksand'] capitalize">doctor world clinic</div>
                    </div>

                </div>



                <div className='flex justify-between mt-10 align-middle'>

                    <button className=" w-28 h-12 text-white bg-gradient-to-r  from-fuchsia-700 to-blue-950 rounded-[50px] shadow p-1">Reschedule</button>

                    <button className=" w-28 h-12 text-white bg-gradient-to-r  from-fuchsia-700 to-blue-950 rounded-[50px] shadow p-1">Cancel</button>

                    <button className="flex items-center justify-center w-28 h-12 text-black bg-zinc-300 bg-opacity-0 rounded-[27px] border border-neutral-400 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        &nbsp;View
                    </button>

                </div>

            </div>

            <div className=' w-full h-80 bg-neutral-100 rounded-[9px] mt-3 p-5 '>

                <div className="flex justify-between">
                    <button className=" w-20  h-12 text-white bg-gradient-to-r from-orange-500 via-orange-500 to-fuchsia-700 rounded-[50px] shadow">Clinic</button>
                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Test</button>

                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Surgery</button>

                    <button className="w-20  h-12 text-black bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow">Medicine</button>


                </div>







                <div className='flex items-center justify-start mt-10 gap-2'>

                    <div className="w-84 h-84 rounded-full overflow-hidden border-4 border-orange-500 border-opacity-40">
                        <Image src={require("../../public/profile.svg")} width={90} height={110} alt="item" />
                    </div>


                    <div>
                        <div className=" h-6 text-black text-lg font-normal font-['Quicksand'] capitalize">17 september 2021, 9.30 PM</div>
                        <div className=" h-6 text-amber-600 text-lg font-normal font-['Quicksand'] capitalize">appointment with doctor arun</div>
                        <div className=" h-6 text-black text-lg font-normal font-['Quicksand'] capitalize">doctor world clinic</div>
                    </div>

                </div>



                <div className='flex justify-between mt-10 align-middle'>

                    <button className=" w-28 h-12 text-white bg-gradient-to-r  from-fuchsia-700 to-blue-950 rounded-[50px] shadow p-1">Reschedule</button>

                    <button className=" w-28 h-12 text-white bg-gradient-to-r  from-fuchsia-700 to-blue-950 rounded-[50px] shadow p-1">Cancel</button>

                    <button className="flex items-center justify-center w-28 h-12 text-black bg-zinc-300 bg-opacity-0 rounded-[27px] border border-neutral-400 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        &nbsp;View
                    </button>

                </div>

            </div>


           <div className='mt-8'>
           <button className="w-full h-14 bg-gradient-to-r from-zinc-100 to-zinc-100 rounded-[50px] shadow font-bold">Back</button>

           </div>

        </div>
    )
}

export default page