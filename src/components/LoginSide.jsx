import React, { useState } from "react";

const LoginSide = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    location: ''
  })
//   state onchange
  function submitPrevent(e){
    e.preventDefault()
  }
  function changeFullname(e){
    setForm({
        ...form,
        fullname: e.target.value
    })
  }
  function changeEmail(e){
    setForm({
        ...form,
        email: e.target.value
    })
  }
  function changePhone(e){
    setForm({
        ...form,
        phone: e.target.value
    })
  }
  function changePassword(e){
    setForm({
        ...form,
        password: e.target.value
    })
  }
  function changeLocation(e){
    setForm({
        ...form,
        location: e.target.value
    })
  }
  return (
    <>
        <div className="md:px-[64px] md:py-[40px] py-[48px] px-[32px]">
            <div className="flex items-center justify-between lg:block">
                <div className="logo text-[24px] leading-[24px] font-[700]">Kreativ</div>
                <div className="flex items-center space-x-[24px] justify-between lg:hidden">
                    <div className="text-[14px] text-[#24445B] leading-[24px] font-[700]">Home</div>
                    <div className="text-[14px] text-[#24445B] leading-[24px] font-[700]">Contact</div>
                </div>
            </div>
            {/* form part */}
            <div className="md:mt-[136px] mt-[64px] w-full mx-auto md:w-[70%] lg:w-[70%]">
                <div className="md:text-[24px] mb-[40px] md:mb-[80px] text-[18px] text-[#24445B] md:text-[#000] leading-[36px] font-[700]">
                    Let&apos;s get you started
                </div>
                {/* form section */}
                <form onSubmit={submitPrevent}>
                    <div className="space-y-[4px] mb-[24px]">
                        <div className="text-[16px] text-[#000] leading-[24px] font-[700]"><label htmlFor="name">Full Name</label></div>
                        <div><input value={form.fullname} onChange={changeFullname} id="name" autoComplete="off" placeholder="Ade Tiger" type="text" className="w-full text-[400] text-[12px] rounded-[4px] py-[12px] px-[16px] border border-[#CCCCCC] placeholder:text-[#CCCCCC] placeholder:leading-[16px]" /></div>
                    </div>
                    {/* email */}
                    <div className="space-y-[4px] mb-[24px]">
                        <div className="text-[16px] text-[#000] leading-[24px] font-[700]"><label htmlFor="email">Email address</label></div>
                        <div><input value={form.email} onChange={changeEmail} id="email" autoComplete="off" placeholder="youremail@gmail.com" type="email" className="w-full text-[400] text-[12px] rounded-[4px] py-[12px] px-[16px] border border-[#CCCCCC] placeholder:text-[#CCCCCC] placeholder:leading-[16px]" /></div>
                    </div>
                    {/* phone number */}
                    <div className="space-y-[4px] mb-[24px]">
                        <div className="text-[16px] text-[#000] leading-[24px] font-[700]"><label htmlFor="phone">Phone number</label></div>
                        <div><input value={form.phone} onChange={changePhone} id="phone" autoComplete="off" placeholder="+234 916 138 2784" type="text" className="w-full text-[400] text-[12px] rounded-[4px] py-[12px] px-[16px] border border-[#CCCCCC] placeholder:text-[#CCCCCC] placeholder:leading-[16px]" /></div>
                    </div>
                    {/* password */}
                    <div className="space-y-[4px] mb-[24px]">
                        <div className="text-[16px] text-[#000] leading-[24px] font-[700]"><label htmlFor="passcode">Create password</label></div>
                        <div><input value={form.password} onChange={changePassword} id="passcode" autoComplete="off" placeholder=". . . . ." type="password" className="w-full text-[400] text-[12px] rounded-[4px] py-[12px] px-[16px] border border-[#CCCCCC] placeholder:text-[#CCCCCC] placeholder:leading-[16px]" /></div>
                        <div className="mt-[8px] text-[12px] text-[#CCCCCC] leading-[16px] font-[400]">Password must contain a minimum of 8 characters</div>
                        <div className="mt-[4px] text-[12px] text-[#CCCCCC] leading-[16px] font-[400]">Password must contain at least one symbol e.g. @, !</div>
                    </div>
                    {/* location */}
                    <div className="space-y-[4px] mb-[24px]">
                        <div className="text-[16px] text-[#000] leading-[24px] font-[700]"><label htmlFor="location">Location <span className="text-[12px] leading-[16px] text-[#C4C4C4] font-[400]">(Optional)</span></label></div>
                        <div><input value={form.location} onChange={changeLocation} id="location" autoComplete="off" placeholder="Lagos" type="text" className="w-full text-[400] text-[12px] rounded-[4px] py-[12px] px-[16px] border border-[#CCCCCC] placeholder:text-[#CCCCCC] placeholder:leading-[16px]" /></div>
                    </div>
                    {/* buttons cta section */}
                    <button className="w-full font-[700] text-[16px] leading-[24px] border border-[#284A5E] text-center py-[8px] text-[#fff] bg-[#284A5E] mt-[22px] rounded-[4px]">
                        Sign up
                    </button>
                    <div className="font-[700] text-[#C4C4C4] text-[16px] leading-[24px] mt-[32px] w-fit mx-auto">
                        <div>Already a user? <span className="underline text-[#476D73] cursor-pointer">Login</span></div>
                    </div>
                    {/* end form vitals */}
                </form>
                {/* end from section */}
            </div>
            {/* end form part */}
        </div>
    </>
  );
};

export default LoginSide;
