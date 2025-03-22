import React, { useState } from 'react';
import { Search, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function FraudPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Detection Methods",
      content: [
        "Advanced data analytics and pattern recognition",
        "Machine learning algorithms for anomaly detection",
        "Cross-reference database analysis",
        "Social network analysis for fraud rings",
        "Predictive modeling for risk scoring",
        "Real-time transaction monitoring",
        "Historical pattern analysis"
      ]
    },
    {
      title: "Service Offerings",
      content: [
        "Claims fraud detection system implementation",
        "Underwriting fraud prevention",
        "Identity verification services",
        "Fraud risk assessments",
        "Investigation support services",
        "Training and education programs",
        "Custom fraud detection solutions"
      ]
    },
    {
      title: "Pricing Structure",
      content: [
        "Basic System Implementation: $25,000-50,000",
        "Enterprise Solution: $100,000+",
        "Monthly Monitoring: $5,000-15,000",
        "Per-Case Investigation: $2,500-7,500",
        "Training Programs: $1,500/session",
        "Annual Support: 15% of implementation cost"
      ]
    },
    {
      title: "Target Markets",
      content: [
        "Insurance carriers",
        "Third-party administrators",
        "Self-insured corporations",
        "Government insurance programs",
        "Healthcare providers",
        "Claims management companies",
        "Insurance brokers"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Development",
      duration: "6 months",
      milestones: [
        "Technology platform development",
        "Algorithm refinement",
        "Database setup",
        "Initial client partnerships"
      ]
    },
    {
      phase: "Launch",
      duration: "6 months",
      milestones: [
        "First 3 enterprise clients",
        "System optimization",
        "Case study development",
        "Team expansion"
      ]
    },
    {
      phase: "Scaling",
      duration: "Year 2",
      milestones: [
        "AI/ML capabilities enhancement",
        "Market expansion",
        "Product line diversification",
        "Strategic partnerships"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <Search className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Fraud Detection Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced fraud detection and prevention services combining cutting-edge technology with deep industry expertise to protect insurance companies and their clients.
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
                <p className="text-2xl font-bold text-blue-600">$200,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 1 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$500,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 3 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$2,500,000</p>
              </div>
              <div>
                <p className="text-gray-600">Breakeven Timeline</p>
                <p className="text-2xl font-bold text-blue-600">18 months</p>
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

export default FraudPage;