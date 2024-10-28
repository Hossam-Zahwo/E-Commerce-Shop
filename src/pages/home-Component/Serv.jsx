import React from 'react'

export default function Serv({servses}) {
  return (
    <div className=' w-full my-16'>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 m-0'>
      {servses.map((serv, id) => (
      <div className='flex w-full bg-slate-300 justify-center items-center  md:mx-0 shadow-2xl gap-3 h-[100px] p-1   rounded-md ' key={serv.id}>
              <div className='md:text-[35px] text-[20px] text-sky-700 font-bold '>
                  {serv.icon}
                </div>
                <div className=' font-sans flex flex-col justify-center items-start'>
                    <h2 className='md:text-[28px] text-[18px]'>
                      {serv.title}
                    </h2>
                    <p className='md:text-[21px] text-[18px]  text-slate-600'>
                    {serv.desc}
                    </p>
                </div>
      </div>

      ))}

        
    </div>
  </div>
  )
}
