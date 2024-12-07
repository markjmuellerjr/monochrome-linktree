import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "Portfolio",
    url: "#",
    icon: "🎨"
  },
  {
    title: "Twitter",
    url: "#",
    icon: "🐦"
  },
  {
    title: "GitHub",
    url: "#",
    icon: "💻"
  },
  {
    title: "LinkedIn",
    url: "#",
    icon: "📱"
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
              src="/placeholder.svg"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-semibold">Your Name</h1>
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
                <span className="text-xl">{link.icon}</span>
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
          Made with ♥️ using Lovable
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Index;