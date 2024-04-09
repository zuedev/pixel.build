"use client";

import React from "react";

const links = [
  {
    name: "About",
    href: "#",
    classes: "cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "Capabilities",
    href: "#",
    classes: "cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "Contact",
    href: "#",
    classes: "cursor-not-allowed",
    title: "Coming soon...",
  },
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

export default function Navigation() {
  let [startMenuOpen, setStartMenuOpen] = React.useState(false);

  return (
    <nav className="fixed bottom-0 left-0 backdrop-blur bg-neutral-800/50 w-full flex justify-between items-center h-16">
      <a
        className="p-2 hover:bg-neutral-800"
        onClick={() => setStartMenuOpen(!startMenuOpen)}
      >
        <img
          id="logo"
          src="/logo.png"
          alt="pixel.build Logo"
          className="h-12"
        />
      </a>

      {startMenuOpen ? (
        <div className="fixed bottom-16 left-0 bg-neutral-800/50 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`p-4 hover:bg-neutral-800 ${link.classes}`}
              title={link.title}
            >
              {link.name}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
