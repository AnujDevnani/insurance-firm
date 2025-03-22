import React, { useState } from 'react';
import { RefreshCw, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function RenewalPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Service Components",
      content: [
        "Policy review and optimization",
        "Market analysis and benchmarking",
        "Coverage gap identification",
        "Premium negotiation",
        "Risk profile updates",
        "Documentation management",
        "Renewal timeline management"
      ]
    },
    {
      title: "Client Benefits",
      content: [
        "Reduced administrative burden",
        "Premium cost optimization",
        "Enhanced coverage accuracy",
        "Timely renewals",
        "Competitive market rates",
        "Risk-appropriate coverage",
        "Compliance assurance"
      ]
    },
    {
      title: "Fee Structure",
      content: [
        "Basic Renewal Service: $1,500-3,000",
        "Premium Package: $3,500-7,500",
        "Enterprise Solution: Custom pricing",
        "Success Fee: 20% of premium savings",
        "Monthly Retainer: $500-2,500",
        "Volume Discounts Available"
      ]
    },
    {
      title: "Target Clients",
      content: [
        "Multi-policy businesses",
        "Professional service firms",
        "Property management companies",
        "Manufacturing facilities",
        "Healthcare providers",
        "Retail chains",
        "Construction companies"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Setup",
      duration: "3 months",
      milestones: [
        "Process development",
        "Technology implementation",
        "Team training",
        "Initial client acquisition"
      ]
    },
    {
      phase: "Operations",
      duration: "6 months",
      milestones: [
        "First 50 renewals",
        "Process optimization",
        "Client feedback integration",
        "Service expansion"
      ]
    },
    {
      phase: "Growth",
      duration: "Year 2",
      milestones: [
        "Market expansion",
        "Automated solutions",
        "Partnership development",
        "Service diversification"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <RefreshCw className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Insurance Renewal Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamlined insurance renewal management service ensuring optimal coverage, competitive rates, and hassle-free processes for businesses of all sizes.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Business Details */}
        <div className="lg:col-span-2 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-lg p-6">
              <h2 
                className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
              >
                {section.title}
              </h2>
              <div className={`space-y-3 ${activeSection === section.title ? 'block' : 'hidden'}`}>
                {section.content.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Financials & Timeline */}
        <div className="space-y-8">
          {/* Financials */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
              Financial Overview
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-gray-600">Startup Costs</p>
                <p className="text-2xl font-bold text-blue-600">$50,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 1 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$300,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 3 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$1,200,000</p>
              </div>
              <div>
                <p className="text-gray-600">Breakeven Timeline</p>
                <p className="text-2xl font-bold text-blue-600">9 months</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Implementation Timeline
            </h2>
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {phase.phase} ({phase.duration})
                  </h3>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenewalPage;