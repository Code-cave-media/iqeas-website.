import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-offshore-1.jpg";
import hero2 from "@/assets/hero-offshore-2.jpg";
import hero3 from "@/assets/hero-offshore-3.jpg";

const projects = [
  {
    id: "qatar-gas",
    title: "Qatar Gas Compression Platform",
    client: "Qatar Gas",
    category: "Oil & Gas",
    tags: ["Digitalization", "As-Built Documentation"],
    challenge: "Accurate as-built documentation and digitalization for a live compression platform.",
    solution: "Performed detailed digital surveys, created as-built models and a documentation pack aligned with client QA standards.",
    outcome: "Delivered with zero failures and full handover to operations.",
    image: hero1,
    scope: ["3D scanning", "Documentation", "Compliance checks", "Coordination with client teams"],
  },
  {
    id: "australian-defence",
    title: "Australian Defence Container Accommodation",
    client: "Australian Defence",
    category: "Defence",
    tags: ["Structural Engineering", "Hot Works"],
    challenge: "Design and deliver complete container accommodation solution meeting strict defense specifications.",
    solution: "Comprehensive structural engineering and hot works execution with full certification compliance.",
    outcome: "Delivered to defense spec on time.",
    image: hero2,
    scope: ["Structural design", "Fabrication support", "Certification", "Installation supervision"],
  },
  {
    id: "imi-saudi",
    title: "IMI Saudi — 120 PAX Platform",
    client: "PMO Global / IMI",
    category: "Offshore",
    tags: ["Accommodation Modules", "Project Management"],
    challenge: "Deliver a 120 PAX accommodation platform meeting all safety and operational requirements.",
    solution: "Full project management from design through commissioning with integrated QA/QC.",
    outcome: "~99% client satisfaction achieved.",
    image: hero3,
    scope: ["Design engineering", "Fabrication oversight", "Commissioning", "Handover"],
  },
  {
    id: "pmo-kamikaze",
    title: "PMO Kamikaze Project",
    client: "PMO",
    category: "Marine",
    tags: ["Engineering", "Project Delivery"],
    challenge: "Complete complex marine project under tight deadlines.",
    solution: "Streamlined project execution with dedicated team and proven methodologies.",
    outcome: "Project completed successfully for PMO.",
    image: hero1,
    scope: ["Engineering design", "Project coordination", "Quality assurance"],
  },
  {
    id: "wheelhouse",
    title: "Wheelhouse Project",
    client: "Affinity",
    category: "Marine",
    tags: ["Marine Engineering", "Delivery"],
    challenge: "Deliver specialized wheelhouse engineering solution.",
    solution: "Custom engineering approach tailored to client specifications.",
    outcome: "Successfully delivered for Affinity.",
    image: hero2,
    scope: ["Design", "Engineering", "Delivery support"],
  },
];

const categories = ["All", "Oil & Gas", "Defence", "Offshore", "Marine"];

export default function Projects() {
  const { projectId } = useParams();

  // Project Detail View
  if (projectId) {
    const project = projects.find((p) => p.id === projectId);
    
    if (!project) {
      return (
        <Layout>
          <div className="pt-32 pb-20 text-center">
            <h1 className="text-2xl">Project not found</h1>
            <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
              Back to Projects
            </Link>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="container-wide relative z-10">
            <Link to="/projects" className="inline-flex items-center text-steel-300 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                  {project.category}
                </span>
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary-foreground/10 text-primary-foreground/80 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-steel-200">Client: {project.client}</p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl border border-border"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Challenge</h3>
                  <p className="text-muted-foreground text-sm">{project.challenge}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Solution</h3>
                  <p className="text-muted-foreground text-sm">{project.solution}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-accent/10 p-6 rounded-xl border border-accent/20"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Outcome</h3>
                  <p className="text-accent font-medium">{project.outcome}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Technical Scope</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy-900">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-steel-300 mb-8">
              Contact us to discuss how we can deliver similar results for you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Get a Quote</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Projects List View
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
              Our Projects
            </h1>
            <p className="text-xl text-steel-200">
              Explore our portfolio of successful project deliveries across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block h-full bg-card rounded-xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.challenge}</p>
                    <div className="flex items-center gap-2 text-accent text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      {project.outcome}
                    </div>
                  </div>
                </Link>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              Let us deliver precision engineering solutions for your next offshore project.
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
