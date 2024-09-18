import React from 'react'

function Footerm() {
  return (
    <footer className="w-[80%] mx-auto   pb-8">
          <div className="w-[89%] mx-auto flex  justify-between  py-8">

            <div className="w-[19%] mr-[4%] ">
              <a href="index.html" aria-label="Cruip">
                <svg width="32" height="32">
                  <defs>
                    <linearGradient id="flogo_a" x1="26%" y1="100%" x2="100%" y2="100%">
                      <stop stopColor="#3ABAB4"></stop>
                      <stop stopColor="#7F9CF5" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="flogo_b" x1="26%" y1="100%" x2="100%" y2="100%">
                      <stop stopColor="#3ABAB4"></stop>
                      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)"></path>
                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)"></path>
                </svg>
              </a>
            </div>

            <div className="w-[16%] ">
                <h6 className='font-semibold'>PRODUCTS</h6>
                <div className='text-gray-600 text-sm py-2'>
                  <p className='pb-1 '><a href="#0">Drag And Drop</a></p>
                  <p className='pb-1 '><a href="#0">Visual Studio X</a></p>
                  <p className='pb-1 '><a href="#0">Easy Content</a></p>
                </div>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>RESOURCES</h6>
                <div className='text-gray-600 text-sm py-2'>
                  <p className='pb-1'><a href="#0">Industries and tools</a></p>
                  <p className='pb-1'><a href="#0">Use cases</a></p>
                  <p className='pb-1'><a href="#0">Blog</a></p>
                  <p className='pb-1'><a href="#0">Online events</a></p>
                  <p className='pb-1'><a href="#0">Nostrud exercitation</a></p>

                </div>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>COMPANY</h6>
                <div className='text-gray-600 text-sm pt-2'>
                  <p className='pb-1 '><a href="#0">Diversity & inclusion</a></p>
                  <p className='pb-1 '><a href="#0">About us</a></p>
                  <p className='pb-1 '><a href="#0">Press</a></p>
                  <p className='pb-1 '><a href="#0">Customer stories</a></p>
                  <p className='pb-1 '><a href="#0">Online communities</a></p>
                </div>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>SUPPORT</h6>
                <div className='text-gray-600 text-sm pt-2'>
                  <p className='pb-1'><a href="#0">Documentation</a></p>
                  <p className='pb-1'><a href="#0">Tutorials &amp; guides</a></p>
                  <p className='pb-1'><a href="#0">Open-source</a></p>
                </div>
              </div>
          </div> 
          <div className="w-[89%] mx-auto flex justify-between text-sm my-8 py-2">
            <div className=" text-gray-600 my-auto">
              <span>&copy; 2020 Cruip. All rights reserved.</span>
            </div>
            <div className="text-sm text-gray-600 my-auto">
                <a href="#0">Terms . </a>
                
                <a href="#0">Privacy Policy</a>
              </div>
               
          </div>

         </footer>
  )
}

export default Footerm
