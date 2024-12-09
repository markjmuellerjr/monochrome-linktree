import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Briefcase, Linkedin, Youtube } from "lucide-react";

const links = [
  {
    title: "Portfolio",
    url: "https://www.yellowumbrella.co",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Youtube - Coming Soon",
    url: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />
  },
  {
    title: "GitHub",
    url: "https://github.com/markjmuellerjr",
    icon: <Github className="w-5 h-5" />
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/markjmuellerjr",
    icon: <Linkedin className="w-5 h-5" />
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start py-16 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md space-y-8"
      >
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto">
            <img
              src="/profile_image.JPG"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-semibold">Mark Mueller</h1>
          <p className="text-sm text-foreground/60">Digital Creator & Developer</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="link-card block p-4 rounded-lg border border-border/50 bg-secondary/50 
                       hover:bg-secondary transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{link.title}</span>
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-foreground/60 pt-8"
        >
          Made by Yellow Umbrella Creative
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Index;