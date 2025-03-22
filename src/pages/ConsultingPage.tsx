import React, { useState } from 'react';
import { Briefcase, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function ConsultingPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Target Client Segments",
      content: [
        "High-net-worth individuals requiring complex coverage solutions",
        "Small to medium-sized businesses (10-500 employees)",
        "Specific industry focus: Healthcare, Manufacturing, Technology",
        "Professional service firms (law, accounting, consulting)",
        "Startups requiring scalable insurance strategies"
      ]
    },
    {
      title: "Service Offerings",
      content: [
        "Comprehensive Insurance Portfolio Analysis",
        "Coverage Gap Assessment and Resolution",
        "Policy Optimization and Cost Reduction Strategies",
        "Custom Insurance Strategy Development",
        "Annual Insurance Review and Updates",
        "Claims History Analysis and Improvement Plans",
        "Risk Management Integration"
      ]
    },
    {
      title: "Revenue Model",
      content: [
        "Initial Consultation: $500-1,500",
        "Comprehensive Analysis: $2,500-7,500",
        "Annual Retainer: $10,000-50,000",
        "Project-based Pricing: Custom quotes based on scope",
        "Success Fee: % of documented cost savings"
      ]
    },
    {
      title: "Marketing Strategy",
      content: [
        "Strategic partnerships with law firms and accounting practices",
        "Industry-specific thought leadership content",
        "Speaking engagements at business conferences",
        "LinkedIn presence and targeted advertising",
        "Referral program for existing clients",
        "Industry association memberships and networking"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Setup",
      duration: "3 months",
      milestones: [
        "Business registration and licensing",
        "Office setup and systems implementation",
        "Website and marketing materials development",
        "Initial partnership agreements"
      ]
    },
    {
      phase: "Launch",
      duration: "6 months",
      milestones: [
        "First 10 client acquisitions",
        "Service delivery refinement",
        "Case study development",
        "Partnership network expansion"
      ]
    },
    {
      phase: "Growth",
      duration: "Year 2",
      milestones: [
        "Team expansion",
        "Service offering expansion",
        "Regional market penetration",
        "Industry vertical specialization"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <Briefcase className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Insurance Consulting Firm</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Independent consultancy leveraging 35+ years of expertise to help individuals and businesses optimize their insurance coverage through comprehensive analysis and strategic recommendations.
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
                <p className="text-2xl font-bold text-blue-600">$250,000</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600">Year 3 Revenue Target</p>
                <p className="text-2xl font-bold text-blue-600">$1,000,000</p>
              </div>
              <div>
                <p className="text-gray-600">Breakeven Timeline</p>
                <p className="text-2xl font-bold text-blue-600">8 months</p>
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

export default ConsultingPage;