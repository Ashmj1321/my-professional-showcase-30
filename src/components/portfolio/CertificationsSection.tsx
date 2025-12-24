import { Award, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Snowflake Developer", icon: "❄️", issuer: "Infosys Certified" },
  { name: "Teradata Developer", icon: "🗄️", issuer: "Infosys Certified" },
  { name: "Big Data Developer", icon: "📊", issuer: "Infosys Certified" },
  { name: "Python Developer", icon: "🐍", issuer: "Infosys Certified" },
  { name: "Spark Professional", icon: "⚡", issuer: "Infosys Certified" },
  { name: "SQL Developer", icon: "🔍", issuer: "Infosys Certified" },
];

const awards = [
  {
    title: "Best Performer Award",
    description: "For exceptional new feature implementation at FedEx client",
    icon: Trophy,
  },
  {
    title: "Spot Recognition Award",
    description: "For excellence in performance tuning and optimization",
    icon: Star,
  },
  {
    title: "Value Award",
    description: "For on-time delivery of macro to BTEQ conversion project",
    icon: Award,
  },
];

export const CertificationsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(280_70%_60%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="gradient-text">Certifications</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Awards & <span className="gradient-text">Recognition</span>
              </h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <award.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{award.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
