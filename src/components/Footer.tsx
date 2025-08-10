import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Reviews",
        href: "#reviews",
    },
    {
        label: "Contact me",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://www.github.com/codewithsadee-org",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/codewithsadee",
    },
    {
        label: "Twitter X",
        href: "https://x.com/codewithsadee_",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/codewithsadee",
    },
    {
        label: "CodePen",
        href: "https://codepen.io/codewithsadee",
    },
];

export const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let's work together today!
                        </h2>

                        <ButtonPrimary
                            href="mailto:ivannavarro0105@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div className="mb-2">
                            <p className="">Sitemap</p>

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
                            <p className="mb-2">Socials</p>

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

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="">
                        <img
                            src="/images/logo.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm">
                        &copy; 2025{" "}
                        <span className="text-zinc-200">v4nrro</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
