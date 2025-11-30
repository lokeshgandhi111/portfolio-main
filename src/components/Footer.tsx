import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/lokeshgandhi111", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/lokeshgandhi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:lokeshgandhimodalavalasa111@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Lokesh Gandhi Modalavalasa</h3>
            <p className="text-muted-foreground">
              AI/ML Enthusiast | Web Developer | Innovator
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Lokesh Gandhi Modalavalasa.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> and React
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
