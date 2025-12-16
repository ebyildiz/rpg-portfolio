
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Spinner from 'react-activity/dist/Spinner'
import "react-activity/dist/library.css"

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", title: "" });
    const [successSent, setSuccessSent] = useState<null | "sent" | "failed">(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_o768lqo',
                'template_4uelcqq',
                formData,
                {
                    publicKey: 'gsVsvTUu9Cl4KfrXM',
                },
            );
            setSuccessSent("sent");
        } catch (err) {
            setSuccessSent("failed");
            if (err instanceof EmailJSResponseStatus) {
                console.log('EMAILJS FAILED...', err);
                return;
            }

            console.log('ERROR', err);
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div className="flex flex-col justify-center align-center items-center mb-[50px] w-[430px] md:w-[800px] h-[700px] bg-[#171617] rounded-[10px] p-5 md:p-20 hidden">
            <h1 className="text-[40px] underline underline-offset-10 md:mt-1 md:mb-[30px]">Contact Me</h1>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5">
                    <label htmlFor="name" className="w-25 text-[25px] md:text-[25px]">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 h-[40px] w-[280px] md:w-[500px] text-[20px] md:text-[25px] p-[10px] md:p-[10px] border-[1px] border-[#ff85ef]  focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5">
                    <label htmlFor="email" className="w-25 text-[25px] md:text-[25px]">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-[10px] rounded-md md:mx-10 h-[40px] w-[280px]  text-[20px] md:w-[500px] md:text-[25px] border-[1px] border-[#ff85ef] focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5">
                    <label htmlFor="title" className="w-25 text-[25px] md:text-[25px]">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 w-[280px] h-[40px] md:w-[500px] text-[20px] md:text-[25px] p-[10px] border-[1px] border-[#ff85ef]  focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5">
                    <label htmlFor="message" className="w-25 text-[25px] md:text-[25px]">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 w-[280px] h-[140px] md:w-[500px] text-[20px] p-[10px] border-[1px] border-[#ff85ef] focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center mt-10 md:mt-1 p-5">
                    <button type="submit" className="flex flex-col place-items-center gradient-button md:text-[25px]">
                        Send
                    </button>
                    {loading && <Spinner color="#ff85ef" className="m-5"/>}
                {successSent == "sent" && loading==false ? <p className="mx-5 md:mx-10 text-green-500">Message sent successfully!</p> : (successSent == "failed" ? <p className="mt-8 text-red-500">Uh-oh, something went wrong</p> : null)}
                </div>
            </form>
        </div>
    );
}
