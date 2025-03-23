import React, { useState } from 'react';
import { Scale, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

function ClaimsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Specialization Areas",
      content: [
        "Complex medical claims and coverage disputes",
        "Property damage and business interruption",
        "Professional liability claims",
        "Workers' compensation challenges",
        "Multi-policy claim coordination"
      ]
    },
    {
      title: "Service Process",
      content: [
        "Initial claim assessment and strategy development",
        "Documentation compilation and organization",
        "Claim filing and tracking",
        "Negotiation with insurance companies",
        "Appeals and dispute resolution",
        "Settlement maximization",
        "Post-claim analysis and recommendations"
      ]
    },
    {
      title: "Fee Structure",
      content: [
        "Initial Assessment: $750-1,500",
        "Basic Claims: 15% of additional settlement",
        "Complex Claims: 20-25% of additional settlement",
        "Monthly Retainer Option: $2,500-5,000",
        "Custom Enterprise Solutions Available"
      ]
    },
    {
      title: "Client Acquisition",
      content: [
        "Direct outreach to businesses with complex insurance needs",
        "Partnership with insurance brokers",
        "Legal firm referral network",
        "Industry association presence",
        "Educational workshops and seminars",
        "Online presence and targeted advertising"
      ]
    }
  ];


  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <Scale className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Claims Advocacy Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized service helping clients navigate complex insurance claims, leveraging deep industry knowledge to maximize settlements and expedite resolutions.
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
        

export default ClaimsPage;
