import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aravindan R
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            IT Student & Front-End Developer
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8 leading-relaxed">
            Passionate front-end developer with intermediate knowledge of C, C++, and DSA in Java. 
            Currently enhancing Java skills through web development internships while exploring 
            Artificial Intelligence and Machine Learning.
          </p>
          
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:aravindan2005@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/ARAVINDAN11042005"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aravindan-r-864167268/"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-float">
            <a href="#about" className="inline-block">
              <ArrowDown className="h-8 w-8 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;