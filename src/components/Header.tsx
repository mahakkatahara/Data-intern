import { useState } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Internships', id: 'domains' },
    { label: 'Eligibility', id: 'eligibility' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Apply', id: 'how-to-apply' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Database className="text-blue-600" size={32} />
            <span className="text-xl font-bold text-gray-900">Data Intern</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={onLoginClick} variant="outline" size="sm">
              Login
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={onLoginClick} variant="outline" size="sm" className="w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
