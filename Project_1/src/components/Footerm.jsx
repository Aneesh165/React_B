import React from 'react'

function Footerm() {
  return (
    <footer className="w-[80%] mx-auto   pb-8">
          <div className="w-[89%] mx-auto flex  justify-between  py-8">

            <div className="w-[19%] mr-[4%]">
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
                <ul className='text-gray-600 pt-2'>
                  <li><a href="#0">Drag And Drop</a></li>
                  <li><a href="#0">Visual Studio X</a></li>
                  <li><a href="#0">Easy Content</a></li>
                </ul>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>RESOURCES</h6>
                <ul className='text-gray-600 pt-2'>
                  <li><a href="#0">Industries and tools</a></li>
                  <li><a href="#0">Use cases</a></li>
                  <li><a href="#0">Blog</a></li>
                  <li><a href="#0">Online events</a></li>
                </ul>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>COMPANY</h6>
                <ul className='text-gray-600 pt-2'>
                  <li><a href="#0">About us</a></li>
                  <li><a href="#0">Press</a></li>
                  <li><a href="#0">Customer stories</a></li>
                </ul>
              </div>

              <div className="w-[16%]">
                <h6 className=' font-semibold'>SUPPORT</h6>
                <ul className='text-gray-600 pt-2'>
                  <li><a href="#0">Documentation</a></li>
                  <li><a href="#0">Tutorials &amp; guides</a></li>
                  <li><a href="#0">Open-source</a></li>
                </ul>
              </div>
          </div> 
          <div className="w-[89%] mx-auto flex justify-between my-8 py-2">
            <div className="s">
              <span>&copy; 2020 Cruip. All rights reserved.</span>
            </div>
            <div className="c">
                <a href="#0">Terms</a>
                <a href="#0">Privacy</a>
              </div>
              <div className="e flex">
              <a href="#0" aria-label="Twitter"><svg width="24" height="24" viewBox="0 0 32 32"><path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Z"></path></svg></a>
              <a href="#0" aria-label="Github"><svg width="24" height="24" viewBox="0 0 32 32"><path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path></svg></a>
              <a href="#0" aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 32 32"><path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path></svg></a>
              <a href="#0" aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 32 32"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M21 25H11c-2.206 0-4-1.794-4-4V11c0-2.206 1.794-4 4-4h10c2.206 0 4 1.794 4 4v10c0 2.206-1.794 4-4 4zM11 9c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V11c0-1.103-.897-2-2-2H11z"></path></svg></a>
            </div>
          </div>

         </footer>
  )
}

export default Footerm
