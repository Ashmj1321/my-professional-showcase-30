import { Building2, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Technical Lead",
    company: "Wipro",
    location: "Bangalore",
    period: "Mar 2025 – Present",
    description: "Leading data engineering initiatives and managing end-to-end ETL development for enterprise clients.",
    highlights: [
      "Leading technical team for AlTayer Data & Analytics project",
      "Architecting AWS Redshift and dbt Cloud solutions",
      "Managing CRM_DWH to AWS migration initiatives",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys",
    location: "Bangalore",
    period: "Apr 2021 – Feb 2025",
    description: "Spearheaded data warehouse development and AI-powered analytics solutions for Fortune 500 clients.",
    highlights: [
      "Developed AI-powered Athena tool for fraud detection",
      "Led GDPR compliance initiatives and data security",
      "Managed Keystone Migration to Snowflake platform",
      "Optimized SQL queries improving performance by 40%",
    ],
  },
  {
    role: "Associate Consultant",
    company: "Atos Syntel",
    location: "Chennai",
    period: "Jul 2018 – Feb 2021",
    description: "Designed and implemented ETL solutions for FedEx's enterprise data warehouse.",
    highlights: [
      "Built Dynamic Profile system for customer analytics",
      "Developed revenue analytics dashboards",
      "Automated data pipelines using Autosys and UNIX",
      "Received Best Performer Award for feature implementation",
    ],
  },
  {
    role: "Intern",
    company: "Mindtree",
    location: "Chennai",
    period: "Nov 2017 – May 2018",
    description: "Gained foundational experience in data engineering and software development practices.",
    highlights: [
      "Learned enterprise data management practices",
      "Assisted in ETL development projects",
      "Contributed to data quality initiatives",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,hsl(280_70%_60%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in building data solutions across leading tech companies.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-primary ${
                    index % 2 === 0
                      ? "left-0 md:left-1/2 md:-translate-x-1/2"
                      : "left-0 md:left-1/2 md:-translate-x-1/2"
                  }`}
                />

                {/* Content Card */}
                <Card
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } bg-card/80 border-border hover:border-primary/30 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-2 mb-2 text-primary ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    
                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}, {exp.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
