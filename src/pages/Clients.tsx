import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const clients = [
  { name: "Saipem", description: "Global energy services" },
  { name: "McDermott", description: "Engineering & construction" },
  { name: "Drydocks World", description: "Maritime services" },
  { name: "International Maritime Industries", description: "Maritime manufacturing" },
  { name: "Qatar Energy LNG", description: "Energy production" },
  { name: "PMO Global", description: "Project management" },
  { name: "C&T Engineers", description: "Engineering consultancy" },
  { name: "Centurion", description: "Specialist services" },
  { name: "Fulton Hogan", description: "Infrastructure services" },
];

const highlights = [
  {
    client: "Qatar Energy",
    description: "Digitalization & as-built documentation for compression platform.",
    outcome: "Zero failures",
  },
  {
    client: "PMO Global",
    description: "120 PAX accommodation platform delivered for IMI Saudi.",
    outcome: "~99% satisfaction",
  },
  {
    client: "Drydocks World / Fulton Hogan",
    description: "Structural and fabrication support for multiple projects.",
    outcome: "On-time delivery",
  },
];

export default function Clients() {
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
              Clients & Partners
            </h1>
            <p className="text-xl text-steel-200">
              Trusted by the industry's leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
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
              Our Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working with industry leaders in offshore, marine, and oil & gas sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-bold text-muted-foreground group-hover:text-accent transition-colors">
                    {client.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Highlights */}
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
              Client Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Featured collaborations and their successful outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {highlight.client}
                </h3>
                <p className="text-muted-foreground mb-4">{highlight.description}</p>
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {highlight.outcome}
                </div>
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
              Work With Us
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              Join our network of satisfied clients and partners. Let's discuss how we can support your next project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
