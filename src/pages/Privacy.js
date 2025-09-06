import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, Heart, Users, FileText, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction and Purpose',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This document sets out Skyline Healthcare Solutions' standards, terms, and conditions relating to privacy, dignity, independence, and choice for every Client receiving home-based care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This policy forms part of the contractual framework between Skyline Healthcare Solutions ("the Company"), its employees and contractors ("Staff"), and the individual in receipt of care or their legally appointed representative ("the Client").
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-900 mb-2">Legal Framework</h4>
            <p className="text-blue-800 text-sm">
              Skyline recognises that privacy and dignity are fundamental human rights, protected by UK and international law, including:
            </p>
            <ul className="text-blue-800 text-sm mt-2 space-y-1">
              <li>• The Human Rights Act 1998</li>
              <li>• The Care Act 2014</li>
              <li>• The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014</li>
              <li>• The UK General Data Protection Regulation (GDPR) 2018</li>
              <li>• The Equality Act 2010</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'commitment',
      title: 'Company Commitment',
      icon: <Heart className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed mb-4">Skyline Healthcare Solutions commits to:</p>
          <div className="grid gap-3">
            {[
              "Providing services in a manner that respects individual identity, cultural diversity, religious beliefs, and personal values",
              "Ensuring Clients retain as much decision-making power, independence, and control as possible in their own homes",
              "Protecting Clients' confidential information in accordance with GDPR and professional codes of conduct",
              "Providing a workforce that is carefully selected, trained, and supervised to deliver care with skill, sensitivity, and respect",
              "Reviewing and improving care practices through audits, inspections, and Client feedback"
            ].map((commitment, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Terms and Guarantees',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">Skyline Healthcare Solutions guarantees the following privacy rights to all Clients:</p>
          <div className="grid gap-4">
            {[
              {
                title: "Personal Space",
                description: "Staff must always knock, announce themselves, and wait for acknowledgement before entering the Client's home or private room. Unauthorized entry is forbidden."
              },
              {
                title: "Confidentiality",
                description: "Personal, medical, or financial information will only be shared with individuals directly involved in the Client's care, or where required by law or safeguarding responsibilities."
              },
              {
                title: "Client Belongings",
                description: "Staff will treat personal belongings with the utmost care. Consent must always be obtained before moving or using a Client's possessions."
              },
              {
                title: "Choice in Visitors",
                description: "Clients have the absolute right to decide who visits them and when, including the right to exclude individuals."
              },
              {
                title: "Safe and Secure Storage",
                description: "Where appropriate, reasonable arrangements will be made to safely store sensitive items, including medication, legal papers, or valuables."
              },
              {
                title: "Private Communication",
                description: "Clients are entitled to make and receive private telephone calls, post, emails, and other correspondence without interference."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#99235c]">
                <h4 className="font-semibold text-[#99235c] mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'dignity',
      title: 'Dignity Terms and Guarantees',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">Skyline Healthcare Solutions ensures that:</p>
          <div className="grid gap-4">
            {[
              {
                title: "Respectful Care",
                description: "All personal care (washing, dressing, continence care, etc.) must always be carried out in private, with sensitivity, and in a manner that does not cause embarrassment or distress."
              },
              {
                title: "Correct Address",
                description: "Clients will always be addressed by their chosen name or title, never by casual or patronising terms unless expressly invited."
              },
              {
                title: "Individuality and Choice",
                description: "Each Client's lifestyle, daily routines, hobbies, and preferences will be respected. Where possible, care is fitted around the Client's way of life, not the other way around."
              },
              {
                title: "Religion and Culture",
                description: "Clients are free to practise their faith, diets, festivals, and customs. Staff must respect religious articles, dietary requirements, and cultural observances."
              },
              {
                title: "Independence and Empowerment",
                description: "Care will be delivered to support independence, enabling Clients to do what they can themselves safely, rather than creating unnecessary dependency."
              },
              {
                title: "Equality and Diversity",
                description: "Skyline prohibits discrimination against Clients on any grounds including age, race, gender, disability, religion, or sexual orientation."
              }
            ].map((item, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                <h4 className="font-semibold text-pink-900 mb-2">{item.title}</h4>
                <p className="text-pink-800 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'staff-responsibilities',
      title: 'Responsibilities of Staff',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed mb-4">All Skyline employees and contractors agree to:</p>
          <div className="grid gap-2">
            {[
              "Strictly uphold confidentiality and data protection obligations",
              "Treat Clients consistently with respect, fairness, and dignity",
              "Avoid gossip, derogatory remarks, or disrespectful behaviour of any kind",
              "Attend and participate in ongoing training programmes",
              "Report any safeguarding concerns, breaches of dignity, or threats to privacy immediately through correct channels",
              "Comply fully with company protocols, the CQC Fundamental Standards, and the Care Certificate Code of Conduct"
            ].map((responsibility, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#99235c] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'client-rights',
      title: 'Rights and Responsibilities of Clients',
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#99235c] mb-3">Client Rights</h4>
            <div className="space-y-2">
              {[
                "Receive care of a professional standard, carried out with dignity, respect, and safeguarding of personal privacy",
                "Be fully informed and give consent regarding all aspects of the care they receive",
                "Access their personal records in accordance with GDPR and request amendments to inaccurate information",
                "Complain or raise concerns using Skyline's Complaints Procedure without fear of reprisal",
                "Cultural, religious, or personal beliefs to be recognised and respected in care provision"
              ].map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{right}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#99235c] mb-3">Client Responsibilities</h4>
            <div className="space-y-2">
              {[
                "Treat staff with courtesy, respect, and non-discriminatory behaviour",
                "Provide accurate and up-to-date information regarding their health, medication, and care needs",
                "Notify Skyline promptly about significant changes in health, environment, or care preferences",
                "Refrain from behaviour that is abusive, threatening, or in breach of law",
                "Respect the contractual obligations of the care agreement"
              ].map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'complaints',
      title: 'Complaints Procedure',
      icon: <Phone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">How to Make a Complaint</h4>
            <p className="text-yellow-800 text-sm mb-2">Clients may submit complaints verbally, in writing, or via a representative.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-800 text-sm">Complaints acknowledged within 3 working days</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-800 text-sm">Investigation completed within 28 days (unless complexity requires extension)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Escalation Options</h4>
            <p className="text-blue-800 text-sm">If dissatisfied with the outcome, clients may escalate complaints to:</p>
            <ul className="text-blue-800 text-sm mt-2 space-y-1">
              <li>• The Care Quality Commission</li>
              <li>• The Local Authority</li>
              <li>• The Local Government Ombudsman</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-[#99235c] text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Skyline Healthcare Solutions</h1>
          </div>
          <p className="text-pink-100 text-lg">Privacy, Dignity & Independence Policy</p>
          <p className="text-pink-200 text-sm mt-2">Protecting your rights in home-based care</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="w-6 h-6 text-[#99235c]" />
              <h3 className="font-semibold text-gray-900">Privacy Protected</h3>
            </div>
            <p className="text-gray-600 text-sm">Your personal space, belongings, and information are safeguarded at all times.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-6 h-6 text-[#99235c]" />
              <h3 className="font-semibold text-gray-900">Dignity Assured</h3>
            </div>
            <p className="text-gray-600 text-sm">Respectful, person-centered care that honors your individuality and choices.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-6 h-6 text-[#99235c]" />
              <h3 className="font-semibold text-gray-900">Independence Supported</h3>
            </div>
            <p className="text-gray-600 text-sm">Care designed to maintain your autonomy and control in your own home.</p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-[#99235c]">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 text-left">{section.title}</h2>
                </div>
                <div className="text-gray-400">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Policy Review</h3>
              <p className="text-gray-600 text-sm mb-2">This document is reviewed annually, or sooner if required by changes in law or regulatory guidance.</p>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#99235c]" />
                <span className="text-sm text-gray-700">Next scheduled review: <strong>29/05/2026</strong></span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#99235c]" />
                  <span className="text-sm text-gray-700">For complaints or concerns, contact us immediately</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#99235c]" />
                  <span className="text-sm text-gray-700">All concerns will be addressed promptly and fairly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;