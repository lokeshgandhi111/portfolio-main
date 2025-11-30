import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
	const highlights = [
		{ icon: GraduationCap, text: "B.Tech in AI & ML", color: "text-primary" },
		{ icon: Code, text: "Full-Stack Developer", color: "text-accent" },
		{ icon: Lightbulb, text: "Innovation Focused", color: "text-cyan" },
		{ icon: MapPin, text: "Palakollu, Andhra Pradesh", color: "text-primary" },
	];

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <explanation>
		<section id="about" className="py-20 px-6">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
						About <span className="gradient-text">Me</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card className="p-8 card-glass hover-lift">
							<p className="text-lg text-muted-foreground leading-relaxed mb-6">
								I am a passionate{" "}
								<span className="text-primary font-semibold">
									Computer Science student
								</span>{" "}
								specializing in{" "}
								<span className="text-accent font-semibold">
									Artificial Intelligence and Machine Learning
								</span>{" "}
								at SRKR Engineering College. With a strong foundation in
								full-stack web development and a keen interest in machine
								learning applications, I strive to create innovative solutions
								that make a real-world impact.
							</p>
							<p className="text-lg text-muted-foreground leading-relaxed">
								My journey in technology is driven by curiosity and a commitment
								to{" "}
								<span className="text-cyan font-semibold">
									sustainable innovation
								</span>
								. I believe in leveraging technology to solve complex problems
								and create meaningful experiences for users worldwide.
							</p>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="grid grid-cols-2 gap-4"
					>
						{highlights.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.1 * index }}
								viewport={{ once: true }}
							>
								<Card className="p-6 card-glass hover-lift text-center h-full">
									<item.icon
										className={`h-10 w-10 mx-auto mb-3 ${item.color}`}
									/>
									<p className="text-sm font-medium text-foreground">
										{item.text}
									</p>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
