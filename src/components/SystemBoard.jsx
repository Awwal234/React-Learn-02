import React from 'react'

const SystemBoard = () => {
  return (
    <div className="px-[110px]">
        <div className="w-full mb-[26px] py-[26px] rounded-[5px] px-[51px] bg-[#fff] border bordder-[#e0e0e0]">
            <div className="flex space-x-[15px]">
                <div className="w-[194px] cursor-pointer text-[#fff] text-[13px] leading-[24px] font-[400] text-center py-[8px] bg-[#2794e3] rounded-[5px] border border-[#e7e7e7] capitalize">
                    device view
                </div>
                <div className="w-[194px] cursor-pointer text-[#000] text-[13px] leading-[24px] font-[400] text-center py-[8px] bg-[transparent] rounded-[5px] border border-[#e7e7e7] capitalize">
                    location view
                </div>
            </div>
        </div>
    </div>
  )
}

export default SystemBoard