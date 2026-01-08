
import React, { useState } from 'react';
// Added Landmark to the imported icons from lucide-react
import { CheckCircle, Download, FileText, BarChart3, ShieldCheck, UserPlus, Calculator, Landmark } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const servicesList = [
    "Corporate Tax Filing (FIRS/LIRS)",
    "Monthly Bookkeeping & Financial Reporting",
    "Internal Audit & Fraud Prevention",
    "CAC Business Registration & Documentation",
    "Payroll Management"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/1920/1080?business" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Professional Accounting Services Designed for <span className="text-gold">Nigerian Business Growth.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Focus on growing your business while we handle the complicated FIRS taxes, 
              CAC filings, and financial reports. Trusted by over 500+ Nigerian entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => document.getElementById('get-started-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-dark transition-all shadow-xl"
              >
                Request a Quote Now
              </button>
              <button 
                onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Free Tax Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Block */}
      <section id="lead-magnet" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gold flex flex-col md:flex-row">
            <div className="bg-navy p-8 md:w-2/5 flex flex-col justify-center items-center text-center text-white">
              <Download className="h-16 w-16 text-gold mb-4" />
              <h2 className="text-2xl font-bold mb-2">Free Download</h2>
              <p className="text-gold font-semibold text-lg italic">2026 Nigerian Business Tax Calendar</p>
            </div>
            <div className="p-8 md:w-3/5">
              <h3 className="text-2xl font-bold text-navy mb-4">Never Miss a Tax Deadline Again</h3>
              <p className="text-gray-600 mb-6">
                Avoid heavy FIRS and LIRS penalties. Download our complete 2026 calendar showing all VAT, CIT, and PAYE filing dates for Nigerian businesses.
              </p>
              <form 
                action="https://formspree.io/f/obiomaogwuegb69@outlook.com" 
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="Lead_Name" 
                    placeholder="Full Name" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-navy focus:outline-none"
                  />
                  <input 
                    type="email" 
                    name="Lead_Email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-navy focus:outline-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-navy text-white py-3 rounded-md font-bold hover:bg-navy/90 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Me The Calendar</span>
                  <FileText className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Request Form */}
      <section id="get-started-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What do you want our company to do for you?</h2>
            <p className="text-gray-600">Fill this form, and our senior accountant will call you within 24 hours.</p>
          </div>

          <form 
            action="https://formspree.io/f/obiomaogwuegb69@outlook.com" 
            method="POST"
            className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="Full_Name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:outline-none"
                  placeholder="e.g. Adekunle Johnson"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="Company_Name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:outline-none"
                  placeholder="e.g. Lagos Tech Solutions"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="WhatsApp_Number" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:outline-none"
                  placeholder="e.g. 08101485748"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="Email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:outline-none"
                  placeholder="ade@company.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-navy mb-4">Select Services Required:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesList.map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-3 bg-white border rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input 
                      type="checkbox" 
                      name="Services_Requested" 
                      value={service}
                      className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold"
                      onChange={() => toggleService(service)}
                      checked={selectedServices.includes(service)}
                    />
                    <span className="text-sm font-medium text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gold text-navy py-4 rounded-xl font-bold text-xl hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Send Request to Accountant
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Your information is secure. We follow the Nigerian Data Protection Act.
            </p>
          </form>
        </div>
      </section>

      {/* Social Proof Mini Section */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2"><ShieldCheck className="h-8 w-8 text-gold" /> <span className="font-bold">ICAN Verified</span></div>
            <div className="flex items-center space-x-2"><Calculator className="h-8 w-8 text-gold" /> <span className="font-bold">ANAN Registered</span></div>
            <div className="flex items-center space-x-2"><Landmark className="h-8 w-8 text-gold" /> <span className="font-bold">FIRS Accredited Agent</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
