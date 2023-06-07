import React from "react";

const CreativeSidebar = () => {
  return (
    <>
        <div className="creative_side overflow-x-hidden md:pr-[151px] md:py-[40px] relative h-fit lg:block w-[40%] hidden">
            <div className="flex items-center justify-between">
                <div></div>
                <div className="flex items-center space-x-[24px]">
                    <div className="text-[12px] cursor-pointer text-[#fff] leading-[24px] font-[700]">Home</div>
                    <div className="text-[12px] cursor-pointer text-[#fff] leading-[24px] font-[700]">Contact</div>
                </div>
            </div>
            <div className="font-[700] w-[90%] leading-[96px] text-[#fff] text-[64px] mt-[285px] pl-[95px]">
                “Creativity is intelligence having fun”
            </div>
            <div className="font-[700] mb-[130px] text-[#ffff] text-[16px] leading-[24px] pl-[95px] mt-[18px]">
                - Albert Einstein
            </div>
        </div>
    </>
  );
};

export default CreativeSidebar;
