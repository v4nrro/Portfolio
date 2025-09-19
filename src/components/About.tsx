const aboutItems = [
    {
        label: "Proyectos realizados",
        number: 3,
    },
    {
        label: "Años de desarrollo",
        number: 1,
    },
];

export const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]">
                        Soy Iván Navarro, Técnico en
                        Desarrollo de Aplicaciones Web con experiencia en
                        desarrollo FullStack. Tengo especial interés en el
                        BackEnd, aunque también disfruto creando interfaces
                        intuitivas y dinámicas en el FrontEnd. Mi versatilidad
                        me permite adaptarme a distintos roles y necesidades
                        dentro de un equipo.
                        <br />
                        <br />
                        Mi objetivo es seguir creciendo como desarrollador,
                        explorando nuevas tecnologías y afrontando retos que me
                        permitan aportar valor real a los proyectos en los que
                        participe. 
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">
                                        +
                                    </span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
