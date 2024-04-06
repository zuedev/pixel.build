import "./page.css";

const links = [
  // {
  //   name: "About",
  //   href: "#",
  // },
  // {
  //   name: "Capabilities",
  //   href: "#",
  // },
  // {
  //   name: "Contact",
  //   href: "#",
  // },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/zuedev/pixel.build",
    imgSrc: "https://cdn.simpleicons.org/github/fff",
  },
  {
    name: "Discord",
    href: "https://discord.gg/k7VWbAKTCM",
    imgSrc: "https://cdn.simpleicons.org/discord",
  },
];

export default function Home() {
  return (
    <>
      <video playsInline autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <main className="space-y-4">
        <img id="logo" src="/logo.png" alt="pixel.build Logo" />
        <div id="links">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
        <div id="socials" className="space-x-4">
          {socials.map((social) => (
            <a key={social.name} href={social.href}>
              <img src={social.imgSrc} alt={social.name} />
            </a>
          ))}
        </div>
      </main>

      <span id="version">v0.2.1</span>
    </>
  );
}
