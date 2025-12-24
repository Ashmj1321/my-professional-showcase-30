import { ExternalLink, Layers, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AlTayer Data & Analytics",
    client: "AlTayer Group",
    company: "Wipro",
    icon: Cloud,
    description:
      "Enterprise-scale data analytics platform migrating from CRM_DWH to AWS cloud infrastructure with modern data stack.",
    technologies: ["AWS Redshift", "dbt Cloud", "Databricks", "Talend Studio", "Data Lake"],
    highlights: [
      "Led CRM_DWH to AWS Redshift migration",
      "Implemented dbt Cloud for data transformations",
      "Built scalable Data Lake pipelines",
      "Optimized SQL queries for performance",
    ],
    color: "from-primary to-primary/50",
  },
  {
    title: "GBI Fraud Analytics",
    client: "Apple Inc",
    company: "Infosys",
    icon: Shield,
    description:
      "AI-powered fraud detection and analytics platform with GDPR compliance for global business intelligence.",
    technologies: ["Teradata", "Snowflake", "DataLake", "Python", "Athena Tool"],
    highlights: [
      "Developed AI-powered Athena tool for fraud detection",
      "Implemented GDPR compliance frameworks",
      "Led Keystone Migration to Snowflake",
      "Built real-time analytics dashboards",
    ],
    color: "from-accent to-accent/50",
  },
  {
    title: "EDW CIH-DP (Customer Intelligence Hub)",
    client: "FedEx",
    company: "Atos Syntel",
    icon: Database,
    description:
      "Enterprise Data Warehouse solution for customer intelligence and revenue analytics with dynamic profiling.",
    technologies: ["Teradata", "UNIX", "SQL", "Autosys", "TPT", "BTEQ"],
    highlights: [
      "Built Dynamic Profile system for customer analytics",
      "Developed revenue tracking and reporting",
      "Automated ETL pipelines with Autosys",
      "Received Best Performer Award",
    ],
    color: "from-primary to-accent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(199_89%_48%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key projects showcasing my expertise in data engineering, cloud migration, 
              and enterprise analytics solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.company}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground text-xs"
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
      </div>
    </section>
  );
};
