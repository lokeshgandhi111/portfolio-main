import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#education", label: "Education" },
		{ href: "#experience", label: "Experience" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
						: "bg-transparent"
				}`}
			>
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-16">
						<a
							href="#"
							className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
						>
							MLG
						</a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() => scrollToSection(link.href)}
									className="text-foreground hover:text-primary transition-colors font-medium relative group"
								>
									{link.label}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
								</button>
							))}
							<ThemeToggle />
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center gap-2">
							<ThemeToggle />
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								aria-label="Toggle menu"
							>
								{isMobileMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</Button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ duration: 0.3 }}
						className="fixed top-16 right-0 bottom-0 w-64 bg-background/95 backdrop-blur-lg border-l border-border z-40 md:hidden"
					>
						<div className="flex flex-col p-6 gap-4">
							{navLinks.map((link, index) => (
								<motion.button
									key={link.href}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => scrollToSection(link.href)}
									className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
								>
									{link.label}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
