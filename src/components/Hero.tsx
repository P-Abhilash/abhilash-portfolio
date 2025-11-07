import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Eye, ArrowDown, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                <span className="block">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Abhilash Pannala
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg">
                  Software Engineer with expertise in full-stack development,
                  cloud platforms, and CI/CD automation.
                </p>
                <p className="text-lg text-muted-foreground/80 max-w-md">
                  Passionate about building scalable, secure, and
                  high-performance applications through modern DevOps, clean
                  architecture, and data-driven design.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group relative overflow-hidden px-8 py-6"
              >
                <a
                  href="/ABHILASH_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-2"
                >
                  <Eye className="h-5 w-5" />
                  View Resume
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                onClick={() => (window.location.href = "#projects")}
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/P-Abhilash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/50 border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/abhilashreddy-pannala-b73757181/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/50 border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a href="mailto:abhilash01289@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/50 border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            {/* Quick Stats */}
            <div className="flex justify-center gap-16 pt-8 stats">
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-1 font-semibold">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-1 font-semibold">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Deployed
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-accent/30 to-primary/10 rounded-full blur-3xl opacity-40"></div>

              <div className="relative z-10 group move-up">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl">
                  <ImageWithFallback
                    src="/profile.png"
                    alt="Abhilash Pannala"
                    className="w-full h-auto object-contain transition-transform duration-500 profile-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground scroll-down">
              Scroll to explore
            </span>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
