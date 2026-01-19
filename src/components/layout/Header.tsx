import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Why IQEAS", href: "/why" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="IQEAS Logo"
            className={cn(
              "transition-all duration-300",
              isScrolled ? "h-10" : "h-14"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === item.href
                  ? isScrolled 
                    ? "text-accent" 
                    : "text-primary-foreground bg-primary-foreground/10"
                  : isScrolled
                    ? "text-foreground hover:text-accent hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <Button variant={isScrolled ? "accent" : "hero"} size="sm">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "text-accent bg-muted"
                  : "text-foreground hover:text-accent hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2">
            <Button variant="accent" className="w-full">
              Get a Quote
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
