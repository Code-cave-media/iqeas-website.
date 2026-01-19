import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Award, 
  Users, 
  Target, 
  Wrench, 
  ArrowRight,
  Shield,
  Clock,
  Globe
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    icon: Clock,
    title: "Two Decades of Experience",
    description: "Over 20 years of hands-on expertise in offshore and marine engineering.",
  },
  {
    icon: Shield,
    title: "Zero-Failure Record",
    description: "Proven track record of delivering projects without defects or failures.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Trusted by leading organizations across multiple continents.",
  },
  {
    icon: Wrench,
    title: "Advanced Tools & Methods",
    description: "Utilizing CAD, 3D scanning, and industry best practices.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "High technical accuracy in every project we undertake.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced professionals committed to project success.",
  },
];

const metrics = [
  { value: "7+", label: "Major Projects Completed" },
  { value: "9+", label: "International Partners" },
  { value: "0", label: "Failures" },
  { value: "99%", label: "Client Satisfaction" },
];

const methodologies = [
  "Industry-standard CAD software",
  "3D laser scanning technology",
  "Comprehensive QA/QC protocols",
  "Classification society compliance",
  "Digital documentation systems",
  "Project management frameworks",
];

export default function Why() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Why Choose IQEAS?
            </h1>
            <p className="text-xl text-steel-200">
              Reliability & Precision in Offshore Engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gradient-accent">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Strengths
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets IQEAS apart in offshore engineering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies & Tools */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Methodologies & Tools
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We employ industry-leading tools and proven methodologies to ensure precision, compliance, and exceptional project outcomes.
              </p>
              <ul className="space-y-4">
                {methodologies.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <Award className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Case Studies
              </h3>
              <p className="text-muted-foreground mb-6">
                Our project portfolio demonstrates consistent delivery of zero-failure outcomes and high client satisfaction across diverse offshore engineering challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">Qatar Gas Platform</span>
                  <span className="text-accent text-sm font-medium">Zero failures</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="text-foreground font-medium">IMI Saudi 120 PAX</span>
                  <span className="text-accent text-sm font-medium">99% satisfaction</span>
                </div>
              </div>
              <Link to="/projects" className="inline-flex items-center text-accent font-medium mt-6 hover:gap-2 transition-all">
                View All Projects <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Book a Consultation
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              Discover how IQEAS can deliver precision engineering solutions for your offshore project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Call <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
