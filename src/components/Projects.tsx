import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bookshelfImage from "../assets/DeWatermark.ai_1761350896911_1.jpeg";

export function Projects() {
  const projects = [
    {
      title: "NCR Consumer Marketing (NCM) – Customer Loyalty Platform",
      description:
        "Enterprise-level loyalty and promotions solution for global retailers. Designed and optimized microservices within the Promotion Engine, managing loyalty points, stored value, and coupons at scale. Improved transaction performance by 20% and implemented CI/CD pipelines to enhance automation and reliability.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NCR_Brand_Block_Logo_PNG.png/330px-NCR_Brand_Block_Logo_PNG.png",
      technologies: [
        "Java Spring Boot",
        "React.js",
        "PostgreSQL",
        "GCP",
        "Jenkins CI/CD",
        "Docker",
        "Microservices",
        "REST APIs",
      ],
      explore:
        "https://docs.ncrvoyix.com/retail/ncr-voyix-loyalty/userguide/overview",
    },
    {
      title: "Bookshelf – AI-Powered Book Discovery & Recommendation Assistant",
      description:
        "A data-driven web application developed with FastAPI and Supabase for seamless book discovery and management. Integrates Google Books and NYT APIs for dynamic content, with Chatbase powering AI-driven reading assistance and personalized recommendations.",
      image: bookshelfImage,
      technologies: [
        "FastAPI",
        "Jinja2",
        "Supabase",
        "Google Books API",
        "NYT Books API",
        "Chatbase",
        "Render",
      ],
      github: "https://github.com/P-Abhilash/Bookshelf",
      demo: "https://bookshelf-lq5o.onrender.com/",
    },
    {
      title: "CampExplorer – Map-based Campground Finder",
      description:
        "A full-stack web application that helps users discover and review campgrounds with interactive maps, user authentication, and photo uploads. Built with Node.js, Express, and MongoDB, featuring MapTiler for location mapping and Cloudinary for media management.",
      image:
        "https://res.cloudinary.com/abhilashp/image/upload/v1625901887/CampExplorer/iqrc2avks71hauzvydrr.jpg",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MapTiler",
        "Cloudinary",
        "EJS",
        "Supabase",
        "Render",
      ],
      github: "https://github.com/P-Abhilash/CampExplorer",
      demo: "https://campexplorer.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of AI, full-stack, and cloud-deployed applications that
            demonstrate creativity, scalability, and modern development
            practices.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Details */}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.explore ? (
                    <a
                      href={project.explore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Product
                      </Button>
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
