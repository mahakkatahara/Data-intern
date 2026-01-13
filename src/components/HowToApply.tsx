import { UserPlus, FileEdit, Search, CheckCircle, Briefcase } from 'lucide-react';

export function HowToApply() {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Register on Data Intern',
      description: 'Create your account with basic information and set up your profile'
    },
    {
      icon: FileEdit,
      number: '02',
      title: 'Complete Your Profile',
      description: 'Add your education, skills, and areas of interest to help us match you'
    },
    {
      icon: Search,
      number: '03',
      title: 'Choose Internship Domain',
      description: 'Browse available domains and select the one that aligns with your goals'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Submit Application',
      description: 'Fill out the application form and submit it for review'
    },
    {
      icon: Briefcase,
      number: '05',
      title: 'Get Shortlisted & Onboarded',
      description: 'Receive confirmation and start your internship journey with us'
    }
  ];

  return (
    <section id="how-to-apply" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Apply
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to kickstart your internship journey with Data Intern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 hover:shadow-lg transition-all border border-blue-100 h-full">
                <div className="text-5xl font-bold text-blue-100 mb-2">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
