import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/path/to/the/img",
        title: "Title of the project",
        tags: ["Tags", "Technologies", "Etc."],
        projectLink: "#",
    },
];

export const Work = () => {
    return (
        <section id="work" className="">
            <div className="container">
                <h2 className="headline-2 mb-8">My portfolio highlights</h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
