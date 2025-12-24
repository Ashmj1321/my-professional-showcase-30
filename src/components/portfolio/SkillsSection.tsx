import { Database, Code, Cloud, Wrench, BarChart3, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Databases",
    icon: Database,
    skills: ["Teradata", "MySQL", "Oracle", "Snowflake", "Amazon Redshift"],
    color: "text-primary",
  },
  {
    title: "Languages & Query",
    icon: Code,
    skills: ["SQL", "Spark SQL", "PySpark", "UNIX Shell", "Python"],
    color: "text-accent",
  },
  {
    title: "ETL & Data Tools",
    icon: Wrench,
    skills: ["Talend Studio", "dbt Cloud", "Databricks", "Airflow", "TPT", "BTEQ"],
    color: "text-primary",
  },
  {
    title: "Cloud & Storage",
    icon: Cloud,
    skills: ["AWS S3", "Azure", "HDFS", "Kafka", "DataLake"],
    color: "text-accent",
  },
  {
    title: "BI & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Data Modeling", "Data Quality", "Performance Tuning"],
    color: "text-primary",
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["GitHub", "Autosys", "ServiceNow", "Jira", "Agile/Scrum"],
    color: "text-accent",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,hsl(199_89%_48%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building enterprise-grade data solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </span>
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
