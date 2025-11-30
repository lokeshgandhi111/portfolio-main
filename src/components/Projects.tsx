import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
	const projects = [
		{
			title: "Health Parishkar",
			description:
				"Full-stack healthcare platform enabling seamless appointment scheduling, medical records management, and patient-doctor communication.",
			tech: ["React", "Node.js", "MongoDB", "Express"],
			github: "https://github.com/lokeshgandhi111",
			live: "https://github.com/lokeshgandhi111",
			gradient: "from-primary/20 to-accent/20",
		},
		{
			title: "Job Application Screening",
			description:
				"Machine learning predictive model that analyzes applicant data to determine suitability for positions, improving recruitment efficiency.",
			tech: ["Python", "ML", "Pandas", "Scikit-learn"],
			github: "https://github.com/lokeshgandhi111",
			live: "https://github.com/lokeshgandhi111",
			gradient: "from-accent/20 to-cyan/20",
		},
		{
			title: "Aarogya Parishkar",
			description:
				"Healthcare recommender system using Random Forest algorithm to provide personalized health recommendations and treatment suggestions.",
			tech: ["Python", "Random Forest", "Flask", "ML"],
			github: "https://github.com/lokeshgandhi111",
			live: "https://github.com/lokeshgandhi111",
			gradient: "from-cyan/20 to-primary/20",
		},
		{
			title: "Real-time Market Price Tracker",
			description:
				"MERN-based platform delivering live crop price updates and intelligent recommendations for farmers and agricultural businesses.",
			tech: ["MongoDB", "Express", "React", "Node.js"],
			github: "#",
			live: "#",
			gradient: "from-primary/20 to-cyan/20",
		},
	];

	return (
		<section id="projects" className="py-20 px-6 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
						Featured <span className="gradient-text">Projects</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="p-6 card-glass hover-lift group h-full flex flex-col">
								<div
									className={`w-full h-32 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}
								>
									<div className="text-4xl font-bold gradient-text">
										{project.title.split(" ")[0]}
									</div>
								</div>

								<h3 className="text-2xl font-bold text-foreground mb-3">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4 leading-relaxed flex-1">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, techIndex) => (
										<Badge
											key={techIndex}
											variant="outline"
											className="border-primary/30"
										>
											{tech}
										</Badge>
									))}
								</div>

								<div className="flex gap-3">
									<Button
										variant="outline"
										size="sm"
										className="flex-1 group/btn"
										asChild
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
											Code
										</a>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="flex-1 group/btn"
										asChild
									>
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
											Live Demo
										</a>
									</Button>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
