"use client"
import { useRef, useState } from 'react';
import { IoLogoIonic } from "react-icons/io";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

type MessageState = {
    message: string;
}

const ContactPage = () => {

    const [message, setMessage] = useState<MessageState['message']>('');
    const form = useRef<HTMLFormElement>(null);


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;
        // I will make it functional later
        form.current.reset();
        setMessage("Message Send Successfully!");
    }

    return (
        <div className="p-5 container mx-auto " id="contact">
            <div className="pb-16 pt-16 md:pt-0 md:pb-16 flex items-center justify-center gap-5 flex-col">
                <div>
                    <p className="text-[#929292] text-center">Feel free to contact me anytime</p>
                    <h2 className="text-white text-center font-bold text-5xl pb-8 pt-3">Get in Touch</h2>
                    {/* <div className={`w-28 h-1 bg-[#00844e] relative mx-auto ${styles.animatedBar}`}></div> */}
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 pb-10'>
                <div className='w-full md:w-7/12'>
                    <h2 className='text-2xl font-bold text-gray-100'>Message Me</h2>
                    <div className='w-full py-5'>
                        <form ref={form} onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
                            <div className="text-sm text-[#00844e]">{message && message}</div>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <input name='name' className='w-full p-2 bg-[#161616] outline-none border-b-2 border-[#1d1d1d] focus:border-[#00844e] placeholder:text-[#929292]' type="text" placeholder="Name" required />
                                <input name='email' className='w-full p-2 bg-[#161616] outline-none border-b-2 border-[#1d1d1d] focus:border-[#00844e] placeholder:text-[#929292]' type="email" placeholder="Email" required />
                            </div>
                            <div className='flex-1'>
                                <input name='subject' className='w-full p-2 bg-[#161616] outline-none border-b-2 border-[#1d1d1d] focus:border-[#00844e] placeholder:text-[#929292]' type="text" placeholder="Subject" required />
                            </div>
                            <div className='flex-1'>
                                <textarea name='message' className='w-full min-h-36 p-2 bg-[#161616] outline-none border-b-2 border-[#1d1d1d] focus:border-[#00844e] placeholder:text-[#929292]' placeholder='Message' required></textarea>
                            </div>
                            <div>
                                <input className='bg-[#00844e] text-gray-100 rounded-full px-6 cursor-pointer py-2' type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full md:w-5/12'>
                    <h2 className='text-2xl font-bold text-gray-100 pb-3'>Contact Info</h2>
                    <div className='w-full py-5'>
                        <p className='text-[#929292]'>I am always available for work if the right project comes along, Feel free to contact me!</p>
                        <div className='py-5'>
                            <div className="flex gap-5 items-center">
                                <div><IoLogoIonic className="text-4xl text-[#00844e]" /> </div>
                                <div className="border-l-2 border-[#929292] px-5 pb-5">
                                    <h4 className="text-gray-100 font-semibold">Name</h4>
                                    <p className="text-[#929292]">Md. Takbir Gazi</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div><RiMapPinUserFill className="text-4xl text-[#00844e]" /> </div>
                                <div className="border-l-2 border-[#929292] px-5 pb-5">
                                    <h4 className="text-gray-100 font-semibold">Location</h4>
                                    <p className="text-[#929292]">Khulna, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div><MdOutlineWifiCalling3 className="text-4xl text-[#00844e]" /> </div>
                                <div className="border-l-2 border-[#929292] px-5 pb-5">
                                    <h4 className="text-gray-100 font-semibold">Call Me</h4>
                                    <p className="text-[#929292]">+8801811947182</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div><SiMinutemailer className="text-4xl text-[#00844e]" /> </div>
                                <div className="border-l-2 border-[#929292] px-5">
                                    <h4 className="text-gray-100 font-semibold">Email Me</h4>
                                    <p className="text-[#929292]">takbirgazibd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;