import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
	const experiences = [
		{
			title: "Software Development Engineer Intern",
			company: "VILS.AI",
			period: "September 2025 - October 2025",
			description:
				"Built a dynamic blog platform using ReactJS, developed responsive UI components, and enhanced user experience through modern web technologies.",
			skills: ["ReactJS", "UI/UX", "Frontend Development"],
			color: "from-primary to-accent",
		},
		{
			title: "Backend Developer",
			company: "SRKR CSE Department Website",
			period: "January 2025 - Present",
			description:
				"Contributed to MERN-based website development, enhanced SEO performance, and improved overall user experience and site functionality.",
			skills: ["MERN Stack", "Backend", "SEO"],
			color: "from-accent to-cyan",
		},
		{
			title: "Green Intern",
			company: "1M1B Foundation",
			period: "May 2025 - June 2025",
			description:
				"Supported social innovation projects focused on sustainability, conducted data analysis, and developed web tools for environmental initiatives.",
			skills: ["Data Analysis", "Web Development", "Sustainability"],
			color: "from-cyan to-primary",
		},
	];

	return (
		<section id="experience" className="py-20 px-6">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
						<span className="gradient-text">Experience</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
				</motion.div>

				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="p-6 card-glass hover-lift group">
								<div className="flex flex-col md:flex-row md:items-start gap-6">
									<div
										className={`p-4 rounded-xl bg-gradient-to-br ${exp.color} shrink-0 group-hover:scale-110 transition-transform`}
									>
										<Briefcase className="h-8 w-8 text-white" />
									</div>

									<div className="flex-1">
										<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
											<div>
												<h3 className="text-xl font-bold text-foreground mb-1">
													{exp.title}
												</h3>
												<p className="text-primary font-semibold">
													{exp.company}
												</p>
											</div>
											<div className="flex items-center gap-2 text-muted-foreground text-sm">
												<Calendar className="h-4 w-4" />
												{exp.period}
											</div>
										</div>

										<p className="text-muted-foreground mb-4 leading-relaxed">
											{exp.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{exp.skills.map((skill, skillIndex) => (
												<Badge
													key={skillIndex}
													variant="secondary"
													className="hover:scale-105 transition-transform"
												>
													{skill}
												</Badge>
											))}
										</div>
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
