import Project from "./Project";
import mycutechat from "@/images/projects/mycutechat.png"
import pomodoro from "@/images/projects/pomodoro.png"
import quizlet from "@/images/projects/quizlet.png"
import halloween from "@/images/projects/halloween.png"

export default function Projects() {
    return (
        <section className="flex flex-col place-items-center gap-10 px-10 md:pt-[100px] md:px-20 pb-20">

            <h1 className="text-[40px] underline underline-offset-10 mb-[30px]">Projects</h1>

            <Project name="MyCuteChat" description="A real-time chat application with cute and customizable avatars, built with React, Node.js, and Socket.io." image={mycutechat} imagePos="left" githublink="https://github.com/ebyildiz/chat-app" livelink="https://mycutechat.netlify.app" skills={["React", "CSS", "TypeScript", "Firebase", "Postgres", "Express.js", "Socket.io"]}/>

            <Project name="Pomodoro-Task App" description="A productivity app that helps you manage tasks using the Pomodoro technique. Built with React and TypeScript, it features a timer and task management system." image={pomodoro} imagePos="right" githublink="https://github.com/ebyildiz/pomdoro-task-app" livelink="https://pomodoro-cute.netlify.app/" skills={["React", "CSS", "TypeScript"]}/>

            <Project name="Quizzical" description="A fun and interactive quiz application where users can test their knowledge on various topics. Built with React and Javascript, it includes features like multiple-choice questions and score tracking." image={quizlet} imagePos="left" githublink="https://github.com/ebyildiz/quizzical" skills={["React", "CSS", "Javascript"]} />

            <Project name="Halloween Costume Generator" description="A web app that generates random Halloween costume ideas for inspiration using Claude AI api."
                image={halloween} imagePos="right" githublink="https://github.com/ebyildiz/halloween-ai" skills={["React", "CSS", "Javascript"]} />

        </section>
    )
}