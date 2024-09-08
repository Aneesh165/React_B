import React, { useState } from 'react';

function Home() {
  const [modalExpanded, setModalExpanded] = useState(false);

  return (<>
     <div className='w-[80%] h-[680px] mx-auto flex justify-between '>
        <div className='w-[60%]'></div>
        <div className="relative w-[40%]  flex justify-end ">
        <div className="relative w-[80%]">
  {/* Mockup image inside the phone */}
  <img
    className="absolute inset-0 right-5 w-[86%] h-full object-contain rounded-[60px]"
    src="https://preview.cruip.com/appy/images/mockup-image-01.jpg"
    alt="Features illustration"
  />
  
  {/* iPhone mockup image */}
  <img
    className="relative z-10 h-[680px] rounded-[60px] overflow-hidden"
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
