import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer I",
      company: "NCR Voyix",
      location: "Hyderabad, India",
      period: "Jul 2022 – Dec 2023",
      description: [
        "Contributed to NCR’s Customer Marketing Loyalty Solution, a cloud-based multitenant platform powering real-time rewards, discounts, and loyalty management at POS.",
        "Engineered scalable microservices with Spring Boot, Node.js, and GCP, boosting system throughput from hundreds → thousands of requests per second.",
        "Enhanced code quality by refactoring services and increasing Sonar coverage from 85% → 92% with 100+ new tests.",
        "Performed load/stress testing with Gatling & BlazeMeter, reducing response times by 20% and improving scalability.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React.js",
        "GCP",
        "Docker",
        "CI/CD",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Gatling",
        "BlazeMeter",
        "Selenium",
        "Cucumber",
        "JUnit",
      ],
    },
    {
      title: "Software Intern",
      company: "NCR Voyix",
      location: "Hyderabad, India",
      period: "Jan 2022 – Jun 2022",
      description: [
        "Assisted in building Java Spring Boot microservices and integrating REST APIs for enterprise applications. Gained hands-on experience with cloud deployments on GCP and Agile development practices.",
        "Supported feature development, testing, and debugging to improve product reliability.",
      ],
      technologies: [
        "Spring Boot",
        "C++ (Qt)",
        "Java",
        "JUnit",
        "Jenkins",
        "PostgreSQL",
        "MongoDB",
        "Agile",
        "GCP",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proven track record of building scalable enterprise applications,
            optimizing performance, and delivering secure, cloud-native
            solutions across the software lifecycle.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-primary/10 hover:border-primary/30 transition-colors shadow-md hover:shadow-lg rounded-2xl"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Description as bullet points */}
              <CardContent>
                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-2 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
