
import React from 'react';
import { Award, Users, History, CheckCircle, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Trust Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-navy mb-6">Built on Trust and Integrity</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are not just accountants; we are your business partners. 
            Our mission is to help Nigerian businesses survive and thrive for generations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <History className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-navy mb-2">15+</div>
              <div className="text-gray-500 font-medium">Years of Experience</div>
            </div>
            <div className="p-8 border-x border-gray-100">
              <Users className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-navy mb-2">500+</div>
              <div className="text-gray-500 font-medium">Happy Business Clients</div>
            </div>
            <div className="p-8">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-navy mb-2">100%</div>
              <div className="text-gray-500 font-medium">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-20 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Professional Certifications</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our team is led by licensed practitioners recognized by the top accounting bodies in Nigeria. We follow the strict ethical guidelines of our profession.
              </p>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ICAN (Institute of Chartered Accountants of Nigeria)</h4>
                    <p className="text-sm text-gray-400">Fellow Members & Associate Members</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ANAN (Association of National Accountants of Nigeria)</h4>
                    <p className="text-sm text-gray-400">Full Practitioners License</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://picsum.photos/seed/accountant/800/1000" 
                  alt="Professional Accountant" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-gold p-8 rounded-2xl text-navy max-w-xs shadow-xl hidden lg:block">
                  <Quote className="h-8 w-8 mb-2 opacity-50" />
                  <p className="font-bold italic">"In Nigeria, integrity is the most valuable currency in business."</p>
                  <p className="mt-4 font-bold text-sm">— Managing Partner</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">Integrity First</h3>
              <p className="text-gray-600">We do the right thing even when no one is watching. Your financial records are safe and honest with us.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">Client Growth</h3>
              <p className="text-gray-600">We don't just calculate numbers; we look for ways to help your company save money and increase profit.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">Timely Delivery</h3>
              <p className="text-gray-600">In Nigeria, time is money. We meet every deadline so you never pay penalties.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-4">Simple Communication</h3>
              <p className="text-gray-600">We explain complex tax laws in simple English that you can understand easily.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
