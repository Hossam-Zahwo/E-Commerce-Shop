import React from 'react'

export default function HomeProduct({products}) {
  return (
    <div className='container:m-0 w-full my-5'>
                  <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-4 mx-5'>
                    {products.map((product, id) => (
                      <div className='flex flex-col justify-center items-center ' key={product.id}>
                          <div className='bg-slate-300 overflow-hidden rounded-full w-[200px] h-[200px] shadow-2xl  flex justify-center items-center p-5 cursor-pointer'>
                              <img src={product.image} alt="mobile" className='w-[180px] transition-all duration-300 hover:scale-[1.2] ' />
                          </div>
                          <div className='mt-3'>
                            <p className='text-[20px] text-slate-500'>{product.title}</p>
                          </div>
                      </div>
  ))}

                  </div>
            </div>
  )
}
