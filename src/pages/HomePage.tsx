import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Scale, Shield, UserCheck, ArrowRight } from 'lucide-react';

function HomePage() {
  const businessPlans = [
    {
      id: 'consulting',
      title: 'Insurance Consulting Firm',
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      description: 'Independent consultancy leveraging 35+ years of expertise to help individuals and businesses optimize their insurance coverage.',
      link: '/consulting'
    },
    {
      id: 'claims',
      title: 'Claims Advocacy Service',
      icon: <Scale className="w-12 h-12 text-blue-600" />,
      description: 'Specialized service helping clients navigate complex insurance claims, maximizing settlements and expediting resolutions.',
      link: '/claims'
    },
    {
      id: 'risk',
      title: 'Risk Assessment Consultancy',
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      description: 'Expert consultancy helping businesses identify, assess, and mitigate risks to optimize insurance costs.',
      link: '/risk'
    },
    {
      id: 'expert',
      title: 'Expert Witness Services',
      icon: <UserCheck className="w-12 h-12 text-blue-600" />,
      description: 'Professional expert witness service providing authoritative testimony in insurance-related legal proceedings.',
      link: '/expert'
    }
  ];

  return (
    <div>
      {/* Parents Introduction Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Father's Section */}
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                {/* Replace the src with your father's image URL */}
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                  alt="Father"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Father's Name</h2>
            <p className="text-gray-600 mb-4">
              35+ years of expertise in insurance industry leadership. Pioneered innovative risk assessment methodologies and led major insurance operations across multiple regions.
            </p>
            <div className="space-y-2 text-left">
              <p className="text-gray-700"><strong>• Achievement 1:</strong> Led regional insurance operations with $500M+ portfolio</p>
              <p className="text-gray-700"><strong>• Achievement 2:</strong> Developed proprietary risk assessment framework</p>
              <p className="text-gray-700"><strong>• Achievement 3:</strong> Advisory board member for major insurance companies</p>
            </div>
          </div>

          {/* Mother's Section */}
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                {/* Replace the src with your mother's image URL */}
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
                  alt="Mother"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Mother's Name</h2>
            <p className="text-gray-600 mb-4">
              Distinguished insurance professional with extensive experience in claims management and client advocacy. Renowned for developing innovative solutions for complex insurance challenges.
            </p>
            <div className="space-y-2 text-left">
              <p className="text-gray-700"><strong>• Achievement 1:</strong> Managed $200M+ in complex claims resolution</p>
              <p className="text-gray-700"><strong>• Achievement 2:</strong> Pioneered client-centric service protocols</p>
              <p className="text-gray-700"><strong>• Achievement 3:</strong> Industry speaker and thought leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessPlans.map((plan) => (
              <Link
                key={plan.id}
                to={plan.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {plan.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{plan.title}</h2>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Business Plans?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Industry Expertise</h3>
              <p>Built on 35+ years of hands-on experience in all aspects of insurance industry operations and management.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Market-Tested Models</h3>
              <p>Business plans refined through real-world implementation and success in various market conditions.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Strategy</h3>
              <p>Detailed roadmaps covering everything from startup to scaling, including financial projections and marketing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
