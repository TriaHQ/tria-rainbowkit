import React  from "react";

const TransactionListRecent =()=>{
    return(
<>
<div className="grid grid-cols-2 mb-auto ">

<div className="w-[199px] h-16 pl-5 pr-2.5 py-2 bg-blue-600 bg-opacity-5 rounded-[21px] justify-start items-center gap-2 inline-flex">
  <div className="w-[126px] justify-start items-center gap-3 flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/image 8.svg" />
    <div className="w-[74px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">Opensea</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 pl-5 pr-2.5 py-2 bg-blue-600 bg-opacity-5 rounded-[21px] justify-start items-center gap-2 inline-flex">
  <div className="w-[126px] justify-start items-center gap-3 flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/image 8.svg" />
    <div className="w-[74px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">Ultiverse</div>
    </div>
  </div>
</div>

<div className="w-[199px] h-16 pl-5 pr-2.5 py-2 bg-blue-600 bg-opacity-5 rounded-[21px] justify-start items-center gap-2 inline-flex">
  <div className="w-[126px] justify-start items-center gap-3 flex">
    <img className="w-10 h-10 rounded-[25px]" src="/icons/image 8.svg" />
    <div className="w-[74px] self-stretch justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold font-['Montserrat'] leading-tight">1inch.io</div>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default TransactionListRecent;