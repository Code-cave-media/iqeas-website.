import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Why IQEAS", href: "/why" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Offshore Accommodation Engineering",
  "Structural Engineering & Hot Works",
  "As-Built Documentation",
  "Compliance Engineering",
  "Project Management",
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="IQEAS Logo" className="h-14 brightness-0 invert" />
            <p className="text-steel-300 text-sm leading-relaxed">
              Delivering high-precision offshore engineering, accommodation modules, and marine project solutions backed by two decades of industry expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-navy-800 text-steel-300 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-navy-800 text-steel-300 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-steel-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-steel-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:info@iqeas.com"
                  className="text-steel-300 hover:text-accent transition-colors text-sm"
                >
                  info@iqeas.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a
                  href="tel:+97141234567"
                  className="text-steel-300 hover:text-accent transition-colors text-sm"
                >
                  +971 4 XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-steel-300 text-sm">
                  Dubai, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-400 text-sm">
            © {new Date().getFullYear()} IQEAS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-steel-400 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-steel-400 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
