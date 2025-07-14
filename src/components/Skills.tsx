import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Palette, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Backend",
      icon: Code,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Database,
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 75 },
        { name: "C", level: 80 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Palette,
      skills: [
        { name: "Git", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "MediaPipe", level: 70 },
        { name: "AWS Cloud", level: 65 },
        { name: "Web Optimization", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 70 },
        { name: "Computer Vision", level: 75 },
        { name: "Generative AI", level: 70 },
        { name: "Algorithm Design", level: 80 },
        { name: "Data Structures", level: 85 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "Java", "Python", "C++", "React", "HTML5", "CSS3", 
    "Git", "OpenCV", "MediaPipe", "AWS", "Spring Boot", "Node.js", 
    "Machine Learning", "Computer Vision", "Generative AI", "DSA"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of skills spanning multiple programming languages, frameworks, and emerging technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;