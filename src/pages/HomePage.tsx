import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Scale, Shield, UserCheck, Search, RefreshCw, ArrowRight } from 'lucide-react';

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
    },
    {
      id: 'fraud',
      title: 'Fraud Detection Services',
      icon: <Search className="w-12 h-12 text-blue-600" />,
      description: 'Advanced fraud detection and prevention services using cutting-edge technology and industry expertise.',
      link: '/fraud'
    },
    {
      id: 'renewal',
      title: 'Insurance Renewal Services',
      icon: <RefreshCw className="w-12 h-12 text-blue-600" />,
      description: 'Streamlined insurance renewal management service ensuring optimal coverage and competitive rates.',
      link: '/renewal'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Insurance Industry Expert Business Plans
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Leverage 35+ years of comprehensive insurance industry experience across six unique business models designed for maximum market impact and profitability.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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