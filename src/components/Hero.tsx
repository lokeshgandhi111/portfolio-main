import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
				<img
					src={heroBg}
					alt="Tech background"
					className="w-full h-full object-cover opacity-30"
				/>
			</div>

			{/* Floating elements */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			{/* Content */}
			<div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-8 md:px-12 gap-8 md:gap-16">
				{/* Profile Picture - Fixed aspect ratio */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="flex-shrink-0 order-2 md:order-1"
				>
					<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full ring-4 ring-primary/20 shadow-2xl border-4 border-background/50 overflow-hidden">
						<img
							src={profilePic}
							alt="Lokesh Gandhi Modalavalasa"
							className="w-full h-full object-cover object-center"
						/>
					</div>
				</motion.div>

				{/* Text Content - Moved to right */}
				<motion.div
					className="flex flex-col text-center md:text-left max-w-2xl order-1 md:order-2"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<div className="mb-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
							<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
								Lokesh Gandhi
							</span>
						</h1>
						<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
							<span className="bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
								Modalavalasa
							</span>
						</h2>
					</div>

					<p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
						AI/ML Enthusiast | Web Developer | Innovator
					</p>

					<p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
						B.Tech Student in Artificial Intelligence & Machine Learning at SRKR
						Engineering College
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
						<Button variant="hero" size="lg" className="group" asChild>
							<a
								href="/lokesh_gandhi_modalavalasa.pdf"
								download="Lokesh_Gandhi_Resume.pdf"
							>
								<Download className="mr-2 group-hover:animate-bounce" />
								Download Resume
							</a>
						</Button>

						<div className="flex gap-3">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:scale-110 transition-transform size-12"
								asChild
							>
								<a
									href="https://github.com/lokeshgandhi111"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<Github className="h-6 w-6" />
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:scale-110 transition-transform size-12"
								asChild
							>
								<a
									href="https://www.linkedin.com/in/lokesh-gandhi-modalavalasa-9a69a5292/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<Linkedin className="h-6 w-6" />
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:scale-110 transition-transform size-12"
								asChild
							>
								<a
									href="mailto:lokeshgandhimodalavalasa111@gmail.com"
									aria-label="Email"
								>
									<Mail className="h-6 w-6" />
								</a>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.6 }}
			>
				<div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto relative">
					<div className="w-1 h-2 bg-muted-foreground rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
				</div>
			</motion.div>
		</section>
	);
}
