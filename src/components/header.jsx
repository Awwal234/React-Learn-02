import React, {useState, useLayoutEffect} from 'react';
import {useLocation} from 'react-router-dom';

const header = () => {
    const [shortName, setShortName] = useState('JJ');
    const [userName, setUserName] = useState('Jonas Johnson');
    const [system, setSystem] = useState(false);
    const Location = useLocation();

    useLayoutEffect(() => {
      if(Location.pathname === '/application-system'){
        setSystem(true);
      } else {
        setSystem(false);
      }
    })
  return (
    <>
        <header className="w-full fixed top-0 left-0">
            <div className="bg-[#fff] border border-[#e7e7e7] px-[110px] w-full pt-[11px] flex justify-between items-center">
                <div className="w-fit h-fit"><img src="/Images/applicationlogo.svg" className="" alt=""/></div>
                <div className="flex space-x-[7px] items-center">
                    <div className="py-[10px] w-[35px] h-[35px] capitalize font-[700] text-[13px] text-[#fff] rounded-[100%] bg-[#2794E3] px-[10px]">
                        {shortName}
                    </div>
                    <div className="text-[#4f4f4f] capitalize font-[600] text-[15px]">
                        {userName}
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] px-[110px] w-full pt-[15px]">
                <div className="flex capitalize space-x-[30px]">
                    <div className={`${system?'border-b-[3px] border-[#2794e3]':'border-[0px]'} text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[700] hover:border-b-[3px] hover:border-[#2794e3]`}>system</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">user Manager</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">document</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">configuration</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">GE Lighting</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">report</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">view</div>
                    <div className="text-[14px] cursor-pointer leading-[190%] pb-[10px] font-[400]">help</div>
                </div>
            </div>
        </header>
    </>
  )
}

export default header