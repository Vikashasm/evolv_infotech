import {   securityData, securityServiceData } from "../component/Helper"
import InfrastructureCard from "../component/InfrastructureCard"


const Security = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px] py-10 md:py-20">
                    <div className="text-center max-w-[900px] mx-auto">
                        <h2 className=" font-normal text-3xl lg:text-5xl mt-3 lg:mt-4 xl:mt-[30px] text-black  lg:leading-[60px]">
                            Security
                        </h2>
                        <p className=" text-base font-normal mt-3 text-[#7e7e7e]">

                            One of the key challenges faced by enterprises today is cyber threats. We can help you devise a robust strategy and use the best security solutions for effective security risk management, monitoring, analysis and reporting.
                        </p>
                    </div>

                    <div className="flex flex-wrap">
                        {securityData.map((obj, index) => {
                            return (
                                <div key={index} className="w-full sm:w-1/2 px-3 lg:w-1/3  mt-10">
                                    <div className="h-full">
                                        <InfrastructureCard mapData={obj} />
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
            <section>
                <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px] py-10 md:py-20">
                    <div className="text-center max-w-[900px] mx-auto">
                        <h2 className=" font-normal text-3xl lg:text-5xl mt-3 lg:mt-4 xl:mt-[30px] text-black  lg:leading-[60px]">Industries that Benefit the Most from Security Services

                        </h2>
                        <p className=" text-base font-normal mt-3 text-[#7e7e7e]">These sectors are primarily leveraging these latest IT services to unlock their growth potential and uncover newer avenues for their business.</p>
                    </div>

                    <div className="flex flex-wrap">
                        {securityServiceData.map((img, index) => {
                            return (
                                <div key={index} className="w-full sm:w-1/2 px-3 lg:w-1/3  mt-6">
                                    <div className="h-full">
                                        <img className="w-full" src={img.img} alt="" />
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
        </>
    )
}


export default Security
