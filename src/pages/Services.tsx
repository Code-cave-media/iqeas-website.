import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Wrench, 
  FileCheck, 
  ShieldCheck, 
  ClipboardList, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "accommodation",
    icon: Building2,
    title: "Offshore Accommodation Engineering",
    description: "Design, fabrication support, installation, and commissioning of living quarters and accommodation modules for offshore platforms and vessels.",
    deliverables: [
      "Layouts",
      "HVAC planning",
      "Lifesaving integration",
      "Certification support"
    ],
  },
  {
    id: "structural",
    icon: Wrench,
    title: "Structural Engineering & Hot Works",
    description: "Structural analysis, detailed design, and hot-work execution planning for reinforcement and retrofit.",
    deliverables: [
      "Structural drawings",
      "Welding specs",
      "QA & NDT plans"
    ],
  },
  {
    id: "digitalization",
    icon: FileCheck,
    title: "As-Built Documentation & Digitalization",
    description: "3D scanning, digital as-built models, documentation packs for operation and maintenance.",
    deliverables: [
      "3D models",
      "Digital documentation",
      "Handover packages"
    ],
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Classification Engineering",
    description: "Engineering to meet classification society rules and regulatory requirements.",
    deliverables: [
      "Compliance reports",
      "Class approvals support"
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management & Consulting",
    description: "Planning, scheduling, resource management, QA/QC, and turnkey project oversight.",
    deliverables: [
      "Project plans",
      "Weekly reports",
      "Commissioning assistance"
    ],
  },
  {
    id: "customized",
    icon: Settings,
    title: "Customized Engineering Solutions",
    description: "Tailored engineering solutions focused on unique offshore challenges.",
    deliverables: [
      "Feasibility studies",
      "Detailed engineering",
      "Installation supervision"
    ],
  },
];

const processSteps = [
  { step: 1, title: "Discovery", description: "Understanding your requirements" },
  { step: 2, title: "Design", description: "Engineering solutions" },
  { step: 3, title: "Fabrication/Execution", description: "Quality delivery" },
  { step: 4, title: "QA & Handover", description: "Compliance verification" },
  { step: 5, title: "Support", description: "Ongoing assistance" },
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl text-steel-200">
              Engineering services tailored to offshore reliability and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="text-center px-4 md:px-8">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-accent" />
                )}
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              Contact us to discuss your engineering requirements and receive a customized quote.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
