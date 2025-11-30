import { motion } from "framer-motion";
import { Trophy, Users, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Achievements() {
  const achievements = [
    {
      title: "Executive Body Member - ACE",
      description: "Organized technical workshops and hackathons, fostering innovation and collaboration among students.",
      icon: Users,
      color: "from-primary to-accent",
    },
    {
      title: "Senior Body Member - Language Nest",
      description: "Mentored first-year students in language skills and academic development, helping them navigate college life.",
      icon: Users,
      color: "from-accent to-cyan",
    },
    {
      title: "HACKOVERFLOW 2K24 Participant",
      description: "Competed in intensive 24-hour hackathon, developing innovative solutions under time constraints.",
      icon: Code,
      color: "from-cyan to-primary",
    },
    {
      title: "PRAJWALAN 2K25 Participant",
      description: "Showcased technical projects and innovations at one of the region's premier tech festivals.",
      icon: Trophy,
      color: "from-primary to-cyan",
    },
    {
      title: "HACKSPRINT 2025 Participant",
      description: "Participated in competitive coding challenges, demonstrating problem-solving abilities under pressure.",
      icon: Code,
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 card-glass hover-lift group h-full">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
