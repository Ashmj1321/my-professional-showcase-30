import { Briefcase, MapPin, GraduationCap, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "7+ Years",
    description: "BI & Data Warehousing",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore",
    description: "India",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.E. CSE",
    description: "CGPA: 7.2/10",
  },
  {
    icon: Trophy,
    label: "Awards",
    value: "3+",
    description: "Recognition Awards",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,hsl(199_89%_48%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate Data Engineering professional with expertise in building 
              scalable data solutions and leading technical teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <div className="space-y-6">
              <div className="gradient-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 7 years of experience in Business Intelligence and Data Warehousing, 
                    I specialize in designing and implementing end-to-end ETL solutions that transform 
                    raw data into actionable insights.
                  </p>
                  <p>
                    My expertise spans across multiple cloud platforms including AWS, Snowflake, and 
                    Databricks, with a strong focus on building high-performance data pipelines and 
                    optimizing SQL queries for maximum efficiency.
                  </p>
                  <p>
                    As a Technical Lead, I bring a combination of technical depth and team leadership, 
                    following Agile methodologies to deliver projects on time while mentoring junior 
                    team members.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Agile Methodologies", "Technical Leadership", "ETL Expert", "Cloud Architecture", "SQL Optimization"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={item.label}
                  className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
