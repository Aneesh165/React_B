import React, { useState } from 'react';

function Home() {
  const [modalExpanded, setModalExpanded] = useState(false);

  return (<>
     <div className='w-[80%] h-[690px] mx-auto flex justify-between '>
        <div className='w-[60%] h-[680px]'>f</div>
        <div className="relative w-[40%] h-[680px] flex justify-end overflow-hidden">
  <div className="relative w-[80%]">
    {/* Mockup image inside the phone */}
    <img
      className="absolute top-0 left-4 w-[83%] h-full object-cover rounded-[70px] "
      src="https://preview.cruip.com/appy/images/mockup-image-01.jpg"
      alt="Features illustration"
    />
    
    {/* iPhone mockup image */}
    <img
      className="relative z-10 h-full"
      src="https://preview.cruip.com/appy/images/iphone-mockup.png"
      alt="iPhone mockup"
    />
  </div>
</div>

     </div>
  </>
 
  );
}

export default Home;
