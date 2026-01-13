import { Database, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Database className="text-blue-500" size={28} />
              <span className="text-xl font-bold text-white">Data Intern</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering students to launch their careers in data and tech through
              hands-on internship experiences.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('eligibility')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Eligibility
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-to-apply')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  How to Apply
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Internship Domains</h3>
            <ul className="space-y-2 text-sm">
              <li>Data Science</li>
              <li>Data Analytics</li>
              <li>Machine Learning</li>
              <li>Web Development</li>
              <li>Software Development</li>
              <li>AI & Deep Learning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>contact@dataintern.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Tech Hub, Innovation District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Data Intern. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
