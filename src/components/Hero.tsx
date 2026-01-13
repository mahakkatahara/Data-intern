import { Button } from './Button';
import { Rocket } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

export function Hero({ onRegisterClick, onLoginClick }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Data Intern – Launch Your Career in{' '}
              <span className="text-blue-600">Data & Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              Platform connecting students with real-world internships in data science,
              analytics, web development, and tech roles. Gain hands-on experience and
              accelerate your career journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={onRegisterClick} size="lg">
                Apply for Internship
              </Button>
              <Button onClick={onLoginClick} variant="outline" size="lg">
                Login
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full flex items-center justify-center">
                <Rocket size={120} className="text-blue-600" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
