import React from "react";
import Nav from "./Nav";
import Footer from "../Footer";

function BuyCrypto() {
  return (
    <>
      <Nav />
        <div className="w-[416px] grow shrink basis-0 flex-col justify-start items-center flex">
          <div className="self-stretch h-[406px] flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[120px] px-5 py-[18px] rounded-2xl flex-col justify-center items-center gap-3 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-xl font-semibold leading-normal">
                    Buy Crypto
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex" />
              </div>
              <div className="self-stretch h-12 justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[34px] px-3 py-2 bg-stone-50 rounded-[30px] justify-start items-center gap-3 flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <input
                        className="focus:border-none w-full text-stone-950 text-opacity-40 text-sm font-medium "
                        placeholder=" Search crypto"
                      ></input>
                      <div className="w-[18px] h-[18px] relative">
                        <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 py-2 justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-3.5 justify-start items-center gap-2 flex">
                <div className="text-center text-stone-950 text-opacity-40 text-xs font-bold uppercase leading-[14.40px] tracking-tight">
                  Popular
                </div>
              </div>
            </div>
            <div className="self-stretch h-60 flex-col justify-center items-center gap-3 flex">
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                          <div className="w-[30px] h-[30px] left-[5.13px] top-[5.39px] absolute" />
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="icons/tether.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              BITCOIN
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 bg-stone-50 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-white rounded-[40px] border-2 border-white backdrop-blur-[5px]">
                            <img
                              className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                              src="/icons/tether.png"
                            />
                          </div>
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="https://via.placeholder.com/15x15"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              ETH
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative rounded-[40px] shadow border-2">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-white rounded-[40px] border-2 border-white backdrop-blur-[5px]">
                            <img
                              className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                              src="/icons/tether.png"
                            />
                          </div>
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="https://via.placeholder.com/15x15"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              tether
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                          <img
                            className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                            src="/icons/tether.png"
                          />
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="https://via.placeholder.com/15x15"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              USDC
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                          <img
                            className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                            src="/icons/tether.png"
                          />
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="https://via.placeholder.com/15x15"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              MATIC
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              POLYGON
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 bg-neutral-50 rounded-[20px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[72px] px-5 py-3 rounded-[21px] flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
                        <div className="w-10 h-10 relative bg-violet-600 rounded-[40px] shadow border-2">
                          <img
                            className="w-[30px] h-[30px] left-[4px] top-[4px] absolute"
                            src="/icons/tether.png"
                          />
                          <div className="left-[24px] top-[25px] absolute justify-start items-center gap-[5.71px] inline-flex">
                            <div className="w-5 h-5 relative bg-white rounded-[20px] border border-white backdrop-blur-[2.50px]">
                              <img
                                className="w-[15.50px] h-[15.50px] left-[2px] top-[2px] absolute"
                                src="https://via.placeholder.com/15x15"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-base font-semibold leading-tight">
                              FILECOIN
                            </div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold leading-[16.80px]">
                              ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[163px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch h-[163px] bg-white flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
              <div className="w-[212px] h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <div className="text-center text-white text-base font-semibold leading-tight">
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default BuyCrypto;
