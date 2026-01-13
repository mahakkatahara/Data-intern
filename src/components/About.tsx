import { Target, Users, TrendingUp } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Industry-Focused',
      description: 'Real-world projects aligned with current industry demands and technologies'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals working in top tech companies'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Build your portfolio and accelerate your career with practical experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Data Intern
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data Intern is a private internship platform dedicated to helping students
            gain hands-on industry experience. We focus on data science, analytics, AI,
            web development, and software roles, connecting passionate learners with
            real-world opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
