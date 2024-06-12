import FooterList from './../../constant/FooterList'; // Adjust the path if necessary
import AmazonImg from './../../assets/logo-09f4bace.png'
import India from './../../assets/download.png'

const FooterMiddle = () => {
    return (
        <section className="bg-[#232F3E] text-white">
            <div className="border-b-[1px] border-gray-500 py-6 md:py-10">
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 px-4 md:px-8">
                        {FooterList.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-white text-base md:text-lg font-bold mb-2">{section.Head}</h3>
                                <ul className="flex flex-col gap-1 text-sm md:text-base">
                                    {section.Links.map((link, idx) => (
                                        <li key={idx} className="footerLink w-max cursor-pointer">{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center py-4 md:py-6'>
                <a href="" className='border boder-1 border-gray-400 hover:border-yellow-300 transition-all duration-150 p-2 px-3'>
                    <img className='w-10 md:w-14 pt-1' src={AmazonImg} alt="" />
                </a>
                <a href="" className='pb-2 border boder-1 border-gray-400 hover:border-yellow-300 transition-all duration-150 p-1 px-3'>
                    <span className='text-sm md:text-lg'>English</span>
                </a>
                <a href="" className='border boder-1 flex items-center border-gray-400 hover:border-yellow-300 transition-all duration-150 p-1 px-2'>
                    <img className='w-5 md:w-7 pt-1' src={India} alt="" />
                    <span className='ml-2 text-sm md:text-lg'>India</span>
                </a>
            </div>
        </section>
    );
}

export default FooterMiddle;
