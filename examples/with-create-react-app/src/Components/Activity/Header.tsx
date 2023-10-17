const Header = () => {

    return(
<div className="w-[416px] h-[104px] px-5 py-3 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
      <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold font-['Montserrat'] leading-normal">Activities</div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
  </div>
  <div className="self-stretch h-12 justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 h-[34px] px-3 py-2 bg-stone-50 rounded-[30px] justify-start items-center gap-3 flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-stone-950 text-opacity-40 text-sm font-medium font-['Montserrat'] leading-[16.80px]">Search</div>
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
    )
}

export default Header;


