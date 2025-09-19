import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/projects/Youllusion-img.png",
        title: "Youllusion",
        tags: ["Angular", "NodeJS", "TypeScript", "MongoDB", "Bootstrap"],
        projectLink: "https://github.com/v4nrro/Youllusion",
    },
    {
        imgSrc: "/images/projects/Portfolio-img.png",
        title: "Portfolio",
        tags: ["React", "Tailwind", "TypeScript"],
        projectLink: "https://github.com/v4nrro/Portfolio",
    },
    {
        imgSrc: "/images/projects/SVTickets-img.png",
        title: "SVTickets",
        tags: ["Angular", "TypeScript", "Bootstrap"],
        projectLink: "https://github.com/v4nrro/SVTickets-Angular",
    },
    {
        imgSrc: "/images/projects/PhysioCare-img.png",
        title: "PhysioCare",
        tags: ["NodeJS", "JavaScript", "MongoDB"],
        projectLink: "https://github.com/v4nrro/PhysioCare",
    },
];

export const Work = () => {
    return (
        <section id="work" className="">
            <div className="container mt-8">
                <h2 className="headline-2 mb-8 reveal-up">Mis Proyectos</h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
