import React, { useState } from 'react';
import { Shield, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function RiskPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Assessment Methodology",
      content: [
        "Comprehensive Risk Audit Protocol",
        "Industry-Specific Risk Matrices",
        "Quantitative Risk Analysis",
        "Cost-Impact Assessment",
        "Mitigation Strategy Development",
        "Implementation Roadmap Creation",
        "Monitoring and Adjustment Framework"
      ]
    },
    {
      title: "Industry Focus",
      content: [
        "Manufacturing and Industrial",
        "Healthcare Facilities",
        "Technology Companies",
        "Professional Services",
        "Retail and Hospitality",
        "Construction and Real Estate"
      ]
    },
    {
      title: "Service Packages",
      content: [
        "Basic Risk Assessment: $5,000-10,000",
        "Comprehensive Risk Management: $15,000-30,000",
        "Enterprise Risk Program: $50,000+",
        "Ongoing Monitoring: $2,500/month",
        "Custom Solutions Available"
      ]
    },
    {
      title: "Deliverables",
      content: [
        "Detailed Risk Assessment Report",
        "Prioritized Risk Register",
        "Mitigation Recommendations",
        "Cost-Benefit Analysis",
        "Implementation Timeline",
        "Training Materials",
        "Monitoring Tools and Templates"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Development",
      duration: "4 months",
      milestones: [
        "Methodology refinement",
        "Tool development",
        "Team assembly",
        "Initial client pipeline"
      ]
    },
    {
      phase: "Implementation",
      duration: "8 months",
      milestones: [
        "First 5 major clients",
        "Case study creation",
        "Service optimization",
        "Partnership development"
      ]
    },
    {
      phase: "Scaling",
      duration: "Year 2",
      milestones: [
        "Geographic expansion",
        "Service line addition",
        "Team growth",
        "Technology platform development"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Risk Assessment Consultancy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert consultancy helping businesses identify, assess, and mitigate risks to optimize insurance costs and enhance operational resilience.
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
                <p className="text-2xl font-bold text-blue-600">$100,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 1 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$400,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 3 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$1,600,000</p>
              </div>
              <div>
                <p className="text-gray-600">Breakeven Timeline</p>
                <p className="text-2xl font-bold text-blue-600">12 months</p>
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

export default RiskPage;