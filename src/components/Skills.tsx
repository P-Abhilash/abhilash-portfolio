import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Globe, Database, TestTube, Cloud } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C"],
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: [
        "AWS",
        "GCP",
        "Render",
        "Docker",
        "Git",
        "VIM",
        "Kubernetes",
        "CI/CD",
        "Terraform",
      ],
    },
    {
      icon: Settings,
      title: "Frameworks & Libraries",
      skills: [
        "Spring Boot",
        "Node.js",
        "React.js",
        "Django",
        "FastAPI",
        "Bootstrap",
        "React Native",
        "Vanilla JS",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      icon: Globe,
      title: "Backend as a Service",
      skills: ["Firebase", "Supabase"],
    },
    {
      icon: TestTube,
      title: "Testing & Security",
      skills: [
        "JUnit",
        "Selenium",
        "Cucumber",
        "Gatling",
        "BlazeMeter",
        "Jest",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, automation,
            and cloud platforms with a focus on scalability, security, and
            performance optimization.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="border border-primary/10 hover:border-primary/30 transition-colors h-full shadow-md hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
