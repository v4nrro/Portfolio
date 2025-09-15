import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: "/images/css3.svg",
        label: "CSS3",
        desc: "",
    },
    {
        imgSrc: "/images/html5.png",
        label: "HTML5",
        desc: "",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "",
    },
    {
        imgSrc: "/images/typescript.svg",
        label: "TypeScript",
        desc: "",
    },
    {
        imgSrc: "/images/angular.png",
        label: "Angular",
        desc: "",
    },
    {
        imgSrc: "/images/php.png",
        label: "PhP",
        desc: "",
    },
    {
        imgSrc: "/images/laravel.svg",
        label: "Laravel",
        desc: "",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "",
    },
    {
        imgSrc: "/images/mysql.svg",
        label: "MySQL",
        desc: "",
    },
    {
        imgSrc: "/images/bootstrap.png",
        label: "Bootstrap",
        desc: "",
    },
    {
        imgSrc: "/images/tailwind.png",
        label: "Tailwind",
        desc: "",
    },
    {
        imgSrc: "/images/git.png",
        label: "Git",
        desc: "",
    },
    {
        imgSrc: "/images/bash.png",
        label: "Bash",
        desc: "",
    },
    {
        imgSrc: "/images/linux.png",
        label: "Linux",
        desc: "",
    },
];

export const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Herramientas y tecnologías</h2>

                <p className="text-zinc-400 mt-4 mb-8 max-w-[50ch] reveal-up">
                    Estas son las herramientas y tecnologías que utilizo para
                    mis desarrollos. Tanto en el ámbito profesional como en el
                    personal:
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
