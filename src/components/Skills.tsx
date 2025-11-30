import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, MessageSquare } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
      color: "from-primary to-accent",
    },
    {
      title: "Technologies",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Git", "REST APIs"],
      color: "from-accent to-cyan",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Database Design", "Query Optimization"],
      color: "from-cyan to-primary",
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      skills: ["Communication", "Public Speaking", "Leadership", "Team Collaboration"],
      color: "from-primary to-cyan",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 card-glass hover-lift group h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-secondary rounded-lg text-secondary-foreground font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
