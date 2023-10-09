

const Nav = () => {
    return (
        <div className="self-stretch h-[92px] py-4 rounded-2xl  flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch p-2 justify-between items-center inline-flex">
              <div className="grow shrink basis-0 h-11 justify-between items-center flex">
                <div className="justify-center items-center flex">
                  <img  src="/icons/user.png" className="w-8 h-8 rounded-[22.50px]" />
                  <div className="px-2 justify-start items-center gap-2 flex">
                  <div className="text-center text-custom-text-color text-opacity-70 text-lg font-montserrat font-semibold leading-6">thekaypo@tria</div>
                  </div>
                  <div className="w-6 h-6 relative">
                  <div className="w-[18px] h-[18px] ">
                      <div className="w-[18px] h-[18px] pt-1">
                      <img src="/icons/arrow-down.png" />
                      </div>
                    </div>
                </div>
                </div>
                <div className="justify-end items-center gap-2 flex">
                  <div className="p-2 bg-white rounded-[45px] border justify-start items-center gap-2 flex">
                    <div className="w-[18px] h-[18px] flex justify-center items-center">
                      <img className="w-8 h-8 " src="/icons/copy.svg" />
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded-[45px] border justify-start items-center gap-2 flex  bg-violet-500">
                    <div className="w-[18px] h-[18px] flex justify-center items-center ">
                    <img className="w-8 h-8" src="/icons/polygon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Nav;