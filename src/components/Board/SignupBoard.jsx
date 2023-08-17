import React, {useState} from "react";
import {Link} from "react-router-dom";

const SignupBoard = () => {
    const [form, setForm] = useState({
        name: "",
        password: ""
    });
    
    const setName = (event) => {
        setForm({
            ...form,
            name: event.target.value,
        })
    }
    const setPassword = (event) => {
        setForm({
            ...form,
            password: event.target.value,
        })
    }
  return (
    <>
        <div className="mx-auto py-[65px] px-[79px] loginsheetShadow bg-[#fff] rounded-[10px] mt-[51px] w-[552px]">
            <div className="text-[#38404F] mb-[13px] font-[600] text-[17px]"><label htmlFor="inputName">User ID</label></div>
            <div className="w-full mb-[19px] flex items-center px-[17px] border border-[#949494] bg-[#fff] rounded-[5px]">
                <div className="flex w-fit items-center">
                    <div className="pr-[18px]"><img src="/Images/usericon.svg" className="" alt=""/></div>
                    <div className="input_stroke h-[46px]"></div>
                </div>
                <div className="w-[100%]">
                    <input autoComplete="off" onChange={setName} value={form.name} id="inputName" placeholder="thunder bolt" type="text" className="w-full lowercase leading-[23px] font-[400] text-[18px] px-[5px] py-[8px] placeholder:text-gray-300 focus:outline-none"/>
                </div>
            </div>
            {/* password section */}
            <div className="text-[#38404F] mb-[13px] font-[600] text-[17px]"><label htmlFor="inputPassword">Your Password</label></div>
            <div className="w-full mb-[35px] flex items-center px-[17px] border border-[#949494] bg-[#fff] rounded-[5px]">
                <div className="flex w-fit items-center">
                    <div className="pr-[18px]"><img src="/Images/lockicon.svg" className="" alt=""/></div>
                    <div className="input_stroke h-[46px]"></div>
                </div>
                <div className="w-[100%]">
                    <input autoComplete="off" onChange={setPassword} value={form.password} id="inputPassword" placeholder="" type="password" className="w-full leading-[23px] font-[400] text-[18px] px-[5px] py-[8px] placeholder:text-gray-300 focus:outline-none"/>
                </div>
            </div>
            {/* end password */}
            <button className="uppercase mb-[33px] text-[20px] font-[600] text-[#fff] rounded-[5px] bg-[#2794E3] text-center w-full py-[13px]">
                Create Account
            </button>
            {/* login button */}
            <div className="flex mx-auto w-fit space-x-[9px] items-center">
                <div className="capitalize text-[#62637C] font-[500] text-[15px]">own an account?</div>
                <Link to='/'><div className="text-[15px] cursor-pointer font-[500] text-[#60A3F0] underline capitalize">
                    login
                </div></Link>
            </div>
        </div>
    </>
  );
};

export default SignupBoard;
