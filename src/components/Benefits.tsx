import { Award, Users, FileText, DollarSign, Briefcase } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Real-World Projects',
      description: 'Work on actual projects that solve real business problems and build practical skills'
    },
    {
      icon: Users,
      title: 'Industry Mentorship',
      description: 'Get guidance from experienced professionals working in leading tech companies'
    },
    {
      icon: Award,
      title: 'Internship Certificate',
      description: 'Receive an official certificate upon successful completion of your internship'
    },
    {
      icon: DollarSign,
      title: 'Performance Rewards',
      description: 'Earn stipend and performance-based incentives for exceptional work'
    },
    {
      icon: FileText,
      title: 'Career Boost',
      description: 'Enhance your resume and LinkedIn profile with valuable industry experience'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Join Data Intern?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your career with hands-on experience, mentorship, and recognition
            from industry professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
