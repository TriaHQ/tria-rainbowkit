

const QR2 = () => {
    return (
       
        <div className="flex-col justify-start items-center flex rounded-lg">
                <div className="w-80 h-[304px] px-5 py-3 bg-white flex-col justify-start items-center gap-2 inline-flex  shadow-lg  rounded-lg">
                    <div className="w-[280px] h-[280px] relative">
                        <img className="w-[280px] h-[280px] left-0 top-0 absolute" src="/QR.png" />
                        <div className="w-[92px] h-[92px] left-[94px] top-[94px] relative bg-custom-blue  rounded-[23px]">
                            <img className=" w-[92px] h-[92px] left-0 top-0 absolute" src="/icons/ether.png" />
                        </div>
                    </div>
                </div>
                <div className="w-80 h-16 px-5 py-3 bg-white flex-col justify-start items-center gap-2 inline-flex  shadow-lg">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold  leading-tight">Your ethereum address</div>
                            </div>
                            <div className="text-center text-neutral-400 text-sm font-semibold  leading-[16.80px]">xV9BjM...Wnbq</div>
                        </div>
                        <div className="px-3 py-2 bg-zinc-800 rounded-[25px] justify-center items-center flex">
                            <div className="w-[55px] self-stretch px-2.5 justify-start items-center gap-2 flex">
                                <div className="text-center text-white text-sm font-semibold  leading-[16.80px]">copy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-[66px] px-5 py-4 bg-white flex-col justify-start items-center gap-2 inline-flex   shadow-lg font-Montserrat rounded-lg">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-neutral-400 text-sm font-medium  leading-[16.80px]">Use for receiving tokens and NFTs on solana only</div>
                    </div>
                </div>
           
       </div>
    )
}

export default QR2;