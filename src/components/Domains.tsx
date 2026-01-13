import { BarChart3, Database, Brain, Globe, Code, Cpu } from 'lucide-react';

export function Domains() {
  const domains = [
    {
      icon: Database,
      title: 'Data Science',
      description: 'Work with data analysis, visualization, and machine learning models to extract insights'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Learn to analyze data, create dashboards, and generate actionable business insights'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Build and deploy ML models, work with neural networks and AI algorithms'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Create modern web applications using latest frameworks and technologies'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Develop scalable software solutions and learn best coding practices'
    },
    {
      icon: Cpu,
      title: 'AI & Deep Learning',
      description: 'Explore artificial intelligence, neural networks, and deep learning projects'
    }
  ];

  return (
    <section id="domains" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Internship Domains
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of tech domains and work on projects that
            match your interests and career goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all border border-gray-200 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <domain.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {domain.title}
              </h3>
              <p className="text-gray-600">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
