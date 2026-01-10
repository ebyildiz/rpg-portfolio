import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/library.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
  });

  const [successSent, setSuccessSent] = useState<null | "sent" | "failed">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessSent(null);

    try {
      await emailjs.send(
        "service_o768lqo",
        "template_4uelcqq",
        formData,
        {
          publicKey: "gsVsvTUu9Cl4KfrXM",
        }
      );
      setSuccessSent("sent");
    } catch (err) {
      setSuccessSent("failed");
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
      } else {
        console.log("ERROR", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        flex flex-col justify-center items-center mb-[50px]
        w-full
        max-w-[430px]
        md:max-w-[800px]
        lg:max-w-[1100px]
        xl:max-w-[1300px]
        h-[700px]
        bg-[#171617]
        rounded-[10px]
        p-5 md:p-20
      "
    >
      <h1 className="text-[40px] underline underline-offset-10 md:mt-1 md:mb-[30px]">
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="p-5 w-full">
        {/* Name */}
        <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5 gap-5">
          <label
            htmlFor="name"
            className="w-[100px] text-[25px] shrink-0"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="
              rounded-md h-[40px] w-full
              text-[20px] md:text-[25px]
              p-[10px]
              border-[1px] border-[#ff85ef]
              focus:border-[#ed09d6] focus:outline-none
            "
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5 gap-5">
          <label
            htmlFor="email"
            className="w-[100px] text-[25px] shrink-0"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="
              rounded-md h-[40px] w-full
              text-[20px] md:text-[25px]
              p-[10px]
              border-[1px] border-[#ff85ef]
              focus:border-[#ed09d6] focus:outline-none
            "
            required
          />
        </div>

        {/* Title */}
        <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5 gap-5">
          <label
            htmlFor="title"
            className="w-[100px] text-[25px] shrink-0"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="
              rounded-md h-[40px] w-full
              text-[20px] md:text-[25px]
              p-[10px]
              border-[1px] border-[#ff85ef]
              focus:border-[#ed09d6] focus:outline-none
            "
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-row place-items-center mt-2 md:mt-1 p-5 gap-5">
          <label
            htmlFor="message"
            className="w-[100px] text-[25px] shrink-0"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="
              rounded-md h-[140px] w-full
              text-[20px]
              p-[10px]
              border-[1px] border-[#ff85ef]
              focus:border-[#ed09d6] focus:outline-none
            "
            required
          />
        </div>

        {/* Submit */}
        <div className="flex flex-row place-items-center mt-10 md:mt-1 p-5 gap-6">
          <button
            type="submit"
            className="flex flex-col place-items-center gradient-button md:text-[25px]"
            disabled={loading}
          >
            Send
          </button>

          {loading && <Spinner color="#ff85ef" />}

          {successSent === "sent" && !loading && (
            <p className="text-green-500">
              Message sent successfully!
            </p>
          )}

          {successSent === "failed" && !loading && (
            <p className="text-red-500">
              Uh-oh, something went wrong
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
