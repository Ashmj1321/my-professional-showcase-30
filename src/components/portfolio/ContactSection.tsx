import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "keertimanohar21@gmail.com",
    href: "mailto:keertimanohar21@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7892596582",
    href: "tel:+917892596582",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(199_89%_48%/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out for collaborations 
              or just a friendly hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:keertimanohar21@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Resume Download */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Download Resume</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get my complete resume in document format
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="/Keerthana_Manoharan_Resume.docx" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
