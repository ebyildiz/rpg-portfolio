
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
        <div className="flex flex-col justify-center align-center items-center mb-[50px] bg-[#171617] rounded-[10px] p-5 md:p-20">
            <h1 className="text-[40px] underline underline-offset-10 mb-[30px]">Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row place-items-center md:mt-8">
                    <label htmlFor="name" className="w-24 md:text-[30px]">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 md:w-[250px] md:h-[50px] md:text-[25px] md:p-[10px] border-[1px] border-[#ff85ef]  focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center md:mt-8">
                    <label htmlFor="email" className="w-24 md:text-[30px]">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 md:w-[250px] md:h-[50px] md:text-[25px] md:p-[10px] border-[1px] border-[#ff85ef] focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center md:mt-8">
                    <label htmlFor="title" className="w-24 md:text-[30px]">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 md:w-[500px] md:h-[50px] md:text-[25px] md:p-[10px] border-[1px] border-[#ff85ef]  focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center md:mt-8 ">
                    <label htmlFor="message" className="w-24 md:text-[30px]">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-md md:mx-10 md:w-[500px] md:h-[200px] md:text-[20px] md:p-[10px] border-[1px] border-[#ff85ef] focus:border-[#ed09d6] focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-row place-items-center md:mt-8">
                    <button type="submit" className="flex flex-col place-items-center gradient-button md:text-[25px]">
                        Send
                    </button>
                    {loading && <Spinner color="#ff85ef" className="m-5"/>}
                {successSent == "sent" && loading==false ? <p className="md:mx-10 text-green-500">Message sent successfully!</p> : (successSent == "failed" ? <p className="mt-8 text-red-500">Uh-oh, something went wrong</p> : null)}
                </div>
            </form>
        </div>
    );
}
