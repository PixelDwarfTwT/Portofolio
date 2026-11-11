import { useEffect } from "react";
import { Github, Instagram, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "Instagram",
    subText: "@dkashzy",
    icon: Instagram,
    url: "https://www.instagram.com/dkashzy?dlrf=MWV0MGlobXQ3ODNpZA==",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    subText: "@PixelDwarfTwT",
    icon: Github,
    url: "https://github.com/PixelDwarfTwT",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 py-8 backdrop-blur-xl">
      <h3
        className="mb-6 flex items-center gap-2 text-xl font-semibold text-white"
        data-aos="fade-down"
      >
        <span className="inline-block h-1 w-8 rounded-full bg-orange-500" />
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name} profile`}
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-500 hover:border-white/20"
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
            />

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-lg opacity-20 transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative rounded-lg p-2">
                <link.icon
                  className="h-5 w-5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            <div className="relative flex min-w-0 flex-col">
              <span className="text-sm font-bold text-gray-200 transition-colors duration-300 group-hover:text-white">
                {link.name}
              </span>
              <span className="truncate text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {link.subText}
              </span>
            </div>

            <ExternalLink className="relative ml-auto h-4 w-4 -translate-x-2 text-gray-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
