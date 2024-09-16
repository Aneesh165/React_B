import React from "react";

function Review() {
  return (
    <>
     <div className="w-[80%] mx-auto flex flex-wrap gap-10 py-16 mt-2">
      <div className="w-[48%] flex flex-col justify-center">
        <div className="w-[20%] mx-auto my-2">
          <img
            className="w-[55%] mx-auto rounded-full"
            src="https://preview.cruip.com/appy/images/testimonial-01.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl text-center text-[#3a3a3c] pb-2 dark:text-white">
            “ This is a great app and the value is amazing. Since I <br />{" "}
            purchased it I have been using it everyday! Highly <br /> recommend
            it. “
          </p>
          <div className="flex justify-center gap-2 font-bold text-[17px]">
            <p className="">—Andy Croll,</p>
            <a href="" className="text-[#3abab4]">
              Appy.com
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[48%] flex flex-col justify-center">
        <div className="w-[20%] mx-auto my-2">
          <img
            className="w-[55%] mx-auto rounded-full"
            src="https://preview.cruip.com/appy/images/testimonial-02.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl text-center text-[#3a3a3c] pb-2 dark:text-white">
            “ This is a great app and the value is amazing. Since I <br />{" "}
            purchased it I have been using it everyday! Highly <br /> recommend
            it. “
          </p>
          <div className="flex justify-center gap-2 font-bold text-[17px]">
            <p className="">—Patricia Lepisov,</p>
            <a href="" className="text-[#3abab4]">
              Nobi Bank
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[48%] flex flex-col justify-center">
        <div className="w-[20%] mx-auto my-2">
          <img
            className="w-[55%] mx-auto rounded-full"
            src="https://preview.cruip.com/appy/images/testimonial-03.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl text-center text-[#3a3a3c] pb-2 dark:text-white">
            “ This is a great app and the value is amazing. Since I <br />{" "}
            purchased it I have been using it everyday! Highly <br /> recommend
            it. “
          </p>
          <div className="flex justify-center gap-2 font-bold text-[17px]">
            <p className="">—Zhenya Ritz,</p>
            <a href="" className="text-[#3abab4]">
              Sync
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[48%] flex flex-col justify-center">
        <div className="w-[20%] mx-auto my-2">
          <img
            className="w-[55%] mx-auto rounded-full"
            src="https://preview.cruip.com/appy/images/testimonial-04.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl text-center text-[#3a3a3c] pb-2 dark:text-white">
            “ This is a great app and the value is amazing. Since I <br />{" "}
            purchased it I have been using it everyday! Highly <br /> recommend
            it. “
          </p>
          <div className="flex justify-center gap-2 font-bold text-[17px]">
            <p className="">—Lisa Champ,</p>
            <a href="" className="text-[#3abab4]">
              Appicu
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className="w-[75%] mx-auto py-2">
        <hr />
    </div>
    </>
  );
}

export default Review;
