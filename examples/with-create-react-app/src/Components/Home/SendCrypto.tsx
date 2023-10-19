import React from 'react'
import Nav from "./Nav";
import Footer from "../Footer";
import {  useNavigate } from 'react-router-dom';

export default function SendCrypto() {
    const navigate = useNavigate();

    function HandleClick(){
        navigate("/home");
    }

    function handleClick(){
        navigate("/home/sendCrypto/cryptoUserDetail")
    }
  return (
    
    <div>
       <div className="flex h-52.5rem items-center justify-center relative   ">
        {/* <div
          style={{ marginLeft: "-150px"  }}
          className="absolute top-0 "
        >
          {" "}
          <HomeBackgroundVector />
        </div> */}

        <div className="w-[100%] h-[840px] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
          <div className="w-[100%] flex-col justify-start items-center flex"></div>
          <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
            <Nav />
            
            <div className="w-[416px] h-[120px] px-5 py-[18px] rounded-2xl flex-col justify-center items-center gap-3 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
      <div className="w-[18px] h-[18px] justify-center items-center flex">
        <div className="w-[18px] h-[18px] relative">
           <button type="button" onClick={HandleClick}> <  img src="/icons/arrow-left.svg"></img> </button>
        </div>
      </div>
      <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold font-'Montserrat' leading-normal">Send</div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
  </div>
  <div className="self-stretch h-12 justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-[34px] px-3 py-2 bg-stone-50 rounded-[30px] justify-start items-center gap-3 flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-stone-950 text-opacity-40 text-sm font-medium font-'Montserrat' leading-[16.80px]">Search</div>
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative">
                <img src="/icons/search-normal.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="w-[416px] h-[30px] px-5 py-2 justify-start items-center gap-4 inline-flex">
  <div className="justify-start items-center gap-4 flex">
    <div className="text-center text-stone-950 text-opacity-60 text-xs font-bold font-'Montserrat' uppercase leading-[14.40px] tracking-tight">recent USERS</div>
  </div>
</div>

<div className='grid grid-cols-2 '>
<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="w-[376px] h-12 justify-start items-center gap-3 inline-flex">
   <button onClick={handleClick}> <img className="w-10 h-10 rounded-[25px]" src="/icons/boy.svg" /></button>
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">gus0sus</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="w-[376px] h-12 justify-start items-center gap-3 inline-flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/boy.svg" />
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">gus0sus</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="h-12 justify-start items-center gap-3 inline-flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/girl.svg" />
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">nancy_dre</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="h-12 justify-start items-center gap-3 inline-flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/girl.svg" />
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">nancy_dre</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="w-[376px] h-14 justify-start items-center gap-3 inline-flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/child.svg" />
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">parth</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 px-5 py-2 bg-white rounded-[21px] flex-col justify-center items-start gap-2 inline-flex">
  <div className="w-[376px] h-14 justify-start items-center gap-3 inline-flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/child.svg" />
    <div className="w-[324px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-'Montserrat' leading-tight">parth</div>
    </div>
  </div>
</div>
</div>
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
