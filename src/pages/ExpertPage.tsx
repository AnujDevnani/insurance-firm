import React, { useState } from 'react';
import { UserCheck, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function ExpertPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Case Specializations",
      content: [
        "Insurance Bad Faith Claims",
        "Coverage Disputes",
        "Claims Handling Practices",
        "Industry Standard Practices",
        "Policy Interpretation",
        "Regulatory Compliance",
        "Risk Management Standards"
      ]
    },
    {
      title: "Service Offerings",
      content: [
        "Case Review and Analysis",
        "Expert Report Preparation",
        "Deposition Testimony",
        "Trial Testimony",
        "Consultation with Legal Teams",
        "Document Review and Analysis",
        "Industry Standard Research"
      ]
    },
    {
      title: "Fee Structure",
      content: [
        "Initial Case Review: $2,500-5,000",
        "Expert Report: $7,500-15,000",
        "Deposition: $3,500/day",
        "Trial Testimony: $5,000/day",
        "Travel Time: $250/hour",
        "Research and Preparation: $450/hour"
      ]
    },
    {
      title: "Marketing Strategy",
      content: [
        "Direct outreach to law firms",
        "Legal directory listings",
        "Conference presentations",
        "Published articles and papers",
        "Professional association networking",
        "Online presence and credentials"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Setup",
      duration: "2 months",
      milestones: [
        "Business structure establishment",
        "Marketing materials development",
        "Initial law firm contacts",
        "Systems setup"
      ]
    },
    {
      phase: "Market Entry",
      duration: "6 months",
      milestones: [
        "First 5 cases",
        "Reputation building",
        "Network expansion",
        "Process refinement"
      ]
    },
    {
      phase: "Growth",
      duration: "Year 2",
      milestones: [
        "Case volume increase",
        "Geographic expansion",
        "Service diversification",
        "Team expansion"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <UserCheck className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Expert Witness Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional expert witness service providing authoritative testimony in insurance-related legal proceedings, backed by 35+ years of industry experience.
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
                <p className="text-2xl font-bold text-blue-600">$25,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 1 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$200,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 3 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$800,000</p>
              </div>
              <div>
                <p className="text-gray-600">Breakeven Timeline</p>
                <p className="text-2xl font-bold text-blue-600">6 months</p>
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

export default ExpertPage;