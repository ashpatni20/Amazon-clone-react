import EndFooterList from './../../constant/EndFooterList'; // Adjust the path if necessary

const FooterEnd = () => {
    return (
        <section className="bg-[#131A22] py-6 md:py-8">
            <div className="max-w-5xl mx-auto">
                <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 place-content-center text-gray-400">
                    {EndFooterList.map((section, index) => (
                        <div key={index} className=" md:text-left">
                            <h3 className="text-white text-base md:text-lg font-bold mb-2">{section.title}</h3>
                            <ul className="flex flex-col gap-1 text-sm md:text-base">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="footerLink w-max cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center justify-center mt-6'>
                    <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                        <h3 className='font-semibold text-xs md:text-sm text-[#DDD]'>Condition of Use & Sale</h3>
                        <h3 className='font-semibold text-xs md:text-sm text-[#DDD]'>Privacy Notice</h3>
                        <h3 className='font-semibold text-xs md:text-sm text-[#DDD]'>Interest-Based Ads</h3>
                    </div>
                    <div className='mt-2 text-center md:text-left'>
                        <h3 className="font-semibold p-2 text-xs md:text-sm text-[#DDD]">© 1996-2024, Amazon.com, Inc. or its affiliates</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterEnd;
