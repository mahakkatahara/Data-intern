import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onRegisterClick: () => void;
}

export function CTA({ onRegisterClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Start Your Internship Journey with Data Intern
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of students who are building their careers through real-world
          experience. Your future starts here.
        </p>
        <Button
          onClick={onRegisterClick}
          variant="secondary"
          size="lg"
          className="group"
        >
          Register Now
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
      </div>
    </section>
  );
}
