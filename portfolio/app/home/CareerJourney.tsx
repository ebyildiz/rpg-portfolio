'use client';

import Job from "./Job";
import hdsi from "@/images/companies/hdsi.png";
import resnet from "@/images/companies/resnet.png";
import sheriff from "@/images/companies/sheriff.png";
import tilkie from "@/images/companies/tilkie.png";

export default function CareerJourney() {
  return (
    <section
      className="
        flex flex-col items-center gap-14
        w-full
        max-w-[550px]
        md:max-w-[900px]
        lg:max-w-[1200px]
        xl:max-w-[1400px]
        mx-auto
        px-5 md:px-10
        pt-16 pb-20
      "
    >
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] underline underline-offset-10">
        Experience
      </h1>

      <Job
        picture={tilkie}
        company="Tilkie Tech"
        position="Frontend Developer"
        linePos="right"
        description="I developed a mobile application from the ground up using React Native with Expo. Implemented BLE provisioning for ESP32 devices using the ESP-IDF provisioning stack. Used Firebase for social authentication."
        DateBegin="March 2025"
        DateEnd="Present"
      />

      <Job
        picture={sheriff}
        company="Sheriff's Office Data Division"
        position="Software Engineer Intern"
        linePos="left"
        description="I contributed to the frontend of an AI-powered chatbot web application using React and TypeScript, enabling deputies to query inmate records through an intelligent search interface."
        DateBegin="Jan 2025"
        DateEnd="Jun 2025"
      />

      <Job
        picture={hdsi}
        company="Halicioglu Data Science Institute"
        position="Instructional Assistant"
        linePos="right"
        description="I hosted weekly office hours for roughly 300 students in a Data Structures and Algorithms course in Java. I graded labs, homework, projects, and exams."
        DateBegin="Mar 2024"
        DateEnd="Jun 2024"
      />

      <Job
        picture={resnet}
        company="UCSD ITS Service Desk"
        position="Technical Support Specialist"
        linePos="left"
        description="I provided technical support to faculty, staff, and students, resolving WiFi, login, software, and remote desktop issues."
        DateBegin="Jun 2023"
        DateEnd="Nov 2024"
      />
    </section>
  );
}
