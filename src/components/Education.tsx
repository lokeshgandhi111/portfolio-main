import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "SRKR Engineering College",
      location: "Bhimavaram, Andhra Pradesh",
      year: "2023 - 2027 (Expected)",
      grade: "CGPA: 9.39",
      color: "from-primary to-accent",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Aditya Junior College",
      location: "Andhra Pradesh",
      year: "2023",
      grade: "96.5%",
      color: "from-accent to-cyan",
    },
    {
      degree: "Senior Secondary",
      institution: "Sunshine E.M. School",
      location: "Andhra Pradesh",
      year: "2021",
      grade: "99.3%",
      color: "from-cyan to-primary",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-cyan -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50" />

                <div className="flex-1">
                  <Card className={`p-6 card-glass hover-lift ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} max-w-lg`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color}`}>
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">{edu.year}</span>
                          <span className="text-muted-foreground">•</span>
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <Award className="h-4 w-4" />
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
