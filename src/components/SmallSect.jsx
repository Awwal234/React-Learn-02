import React, {useState} from 'react';
import SystemBoard from "./SystemBoard"

const SmallSect = (props) => {
    const [monitorName, setMonitor] = useState('Username');
    const [userLevel, setLevel] = useState('Level 1');
  return (
    <>
        <div className="px-[110px] pt-[200px] mb-[29px]">
            <div className="text-[#08445c] mb-[15px] font-[700] text-[14px]">
                {props.smallsectTitle}
            </div>
            <div className="flex space-x-[15px]">
                <div className="w-[205px] text-[#000] text-[13px] font-[400] border bg-[#fff] rounded-[5px] border-[#e7e7e7] h-[40px] py-[8px] px-[16px]">
                    <text className="leading-[24px] text-[13px] font-[400]">{monitorName}</text>
                </div>
                <div className="w-[138px] text-center text-[#000] text-[13px] font-[400] border bg-[transparent] rounded-[5px] border-[#e7e7e7] h-[40px] py-[8px] px-[16px]">
                    <text className="leading-[24px] text-[13px] font-[400]">Userlevel: {userLevel}</text>
                </div>
            </div>
        </div>

        <SystemBoard/>
    </>
  )
}

export default SmallSect