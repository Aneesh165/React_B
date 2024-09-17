import React from 'react'

function Footerm() {
  return (
    <footer className="w-[80%] mx-auto">
          <div className="w-[80%]">

            <div className="footer-logo-block">
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
            <div className="footer-links-blocks">

              <div className="footer-link-block">
                <h6>Products</h6>
                <ul>
                  <li><a href="#0">Drag And Drop</a></li>
                  <li><a href="#0">Visual Studio X</a></li>
                  <li><a href="#0">Easy Content</a></li>
                </ul>
              </div>

              <div className="footer-link-block">
                <h6>Resources</h6>
                <ul>
                  <li><a href="#0">Industries and tools</a></li>
                  <li><a href="#0">Use cases</a></li>
                  <li><a href="#0">Blog</a></li>
                  <li><a href="#0">Online events</a></li>
                </ul>
              </div>

              <div className="footer-link-block">
                <h6>Company</h6>
                <ul>
                  <li><a href="#0">About us</a></li>
                  <li><a href="#0">Press</a></li>
                  <li><a href="#0">Customer stories</a></li>
                </ul>
              </div>

              <div className="footer-link-block">
                <h6>Support</h6>
                <ul>
                  <li><a href="#0">Documentation</a></li>
                  <li><a href="#0">Tutorials &amp; guides</a></li>
                  <li><a href="#0">Open-source</a></li>
                </ul>
              </div>

            </div>
          </div> 
         </footer>
  )
}

export default Footerm
