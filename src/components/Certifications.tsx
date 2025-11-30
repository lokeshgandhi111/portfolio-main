import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    {
      title: "Cisco NetCad: Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      year: "2023",
      color: "from-primary to-accent",
    },
    {
      title: "C Programming Essentials",
      issuer: "Cisco Networking Academy",
      year: "2023",
      color: "from-accent to-cyan",
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      year: "2023",
      color: "from-cyan to-primary",
    },
    {
      title: "Cambridge English B1.3",
      issuer: "Cambridge Assessment English",
      year: "2025",
      color: "from-primary to-cyan",
    },
    {
      title: "Spanish Language A1",
      issuer: "Skool Of Languages",
      year: "2025",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 card-glass hover-lift group h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Award className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  <span>{cert.year}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
