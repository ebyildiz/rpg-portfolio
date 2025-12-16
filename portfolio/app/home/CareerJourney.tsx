'use client'
import Job from "./Job"
import hdsi from "@/images/companies/hdsi.png"
import resnet from "@/images/companies/resnet.png"
import sheriff from "@/images/companies/sheriff.png"
import tilkie from "@/images/companies/tilkie.png"

export default function CareerJourney() {
    return (
    <section className="flex flex-col place-items-center gap-10 px-10 w-[550px] md:w-[1000px] md:pt-[100px] md:px-20 pb-20 hidden">
         <h1 className="text-[40px] underline underline-offset-10 mb-[30px]">Experience</h1>
        <Job picture={tilkie} company="Tilkie Tech" position="Frontend Developer" linePos="right"  description="I developed a mobile application from the ground up using React Native with Expo. implemented BLE provisioning for ESP32 devices using the ESP-IDF provisioning stack. Used Firebase for integrating social authentication." DateBegin="March 2025" DateEnd="Present" />
        <Job picture={sheriff} company="Sheriff's Office Data Division" linePos="left" position="Software Engineer Intern" description="I contributed to the frontend of an AI-powered chatbot web application using React and TypeScript, enabling deputies to query inmate records through an intelligent search interface." DateBegin="Jan 2025" DateEnd="Jun 2025" />
        <Job picture={hdsi} company="Halicioglu Data Science Institute" linePos="right" position="Instructional Assistant" description="I hosted weekly office hours for roughly 300 students in a Data Structures and Algorithms course in Java, providing guidance and support. I graded labs, homework, projects, and exams." DateBegin="Mar 2024" DateEnd="Jun 2024" />
        <Job picture={resnet} company="UCSD ITS Service Desk" linePos="left" position="Technical Support Specialist" description="I provided technical support to faculty, staff, and students by resolving WiFi, login, software, and remote desktop issues, while also identifying system outages and network failures." DateBegin="Jun 2023" DateEnd="Nov 2024" />
    </section>)
}