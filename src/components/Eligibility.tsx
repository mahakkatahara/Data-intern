import { GraduationCap, Code, Laptop, Wifi } from 'lucide-react';

export function Eligibility() {
  const criteria = [
    {
      icon: GraduationCap,
      title: 'Students or Fresh Graduates',
      description: 'Currently enrolled in college or recently graduated'
    },
    {
      icon: Code,
      title: 'Basic Programming Skills',
      description: 'Fundamental knowledge of coding or data analysis'
    },
    {
      icon: Wifi,
      title: 'Reliable Internet Connection',
      description: 'Stable internet for remote collaboration'
    },
    {
      icon: Laptop,
      title: 'Own Laptop/Computer',
      description: 'Personal device for working on projects'
    }
  ];

  return (
    <section id="eligibility" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who Can Apply?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our internship program is designed for motivated individuals ready to
            kickstart their tech career with hands-on experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
