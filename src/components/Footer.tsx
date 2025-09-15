import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: "Inicio",
        href: "#home",
    },
    {
        label: "Sobre mí",
        href: "#about",
    },
    {
        label: "Proyectos",
        href: "#work",
    },
    {
        label: "Contacto",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://www.github.com/v4nrro",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/v4nrro",
    },
];

export const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Colaboremos juntos ahora!
                        </h2>

                        <ButtonPrimary
                            href="mailto:ivannavarro0105@gmail.com"
                            label="Empezar proyecto"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div className="mb-2">
                            <p className="">Rutas</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="mb-2">Redes</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
