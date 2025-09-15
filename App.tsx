import React from 'react';
import { Phone, Mail, MapPin, Users, Award, CheckCircle, Building2, Calculator, Truck, FileText, Shield, Globe } from 'lucide-react';

function App() {
  const accountingServices = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accounting & Book Keeping Services",
      description: "Comprehensive financial record management and bookkeeping solutions"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "GST Registration & Filing",
      description: "Complete GST compliance and filing services"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Income Tax Compliances",
      description: "Expert income tax planning and compliance services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Digital Signature Certificate",
      description: "Secure digital signature solutions for businesses"
    }
  ];

  const logisticsServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Import & Export Consultancy",
      description: "Expert guidance for international trade operations"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "MSME Registration",
      description: "Micro, Small & Medium Enterprise registration services"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "IEC Registration",
      description: "Import Export Code registration and compliance"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "APEDA Registration",
      description: "Agricultural and Processed Food Products Export Development Authority registration"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Spices Board Registration",
      description: "Spices Board of India registration and certification"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "FSSAI Registration",
      description: "Food Safety and Standards Authority of India licensing"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "CBLR Classes (F Card & G Card)",
      description: "Customs Broker License Registration services"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Bond Cancellation",
      description: "Customs bond cancellation and related services"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B3A57] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#D4AF7A] rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#1B3A57]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">NAMO CONSULTANCY</h1>
              <p className="text-[#D4AF7A] text-sm">Professional Business Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#D4AF7A] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#D4AF7A] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#D4AF7A] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#D4AF7A] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#1B3A57] to-[#2A4A67] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-6">Welcome to Namo Consultancy</h2>
            <p className="text-xl text-[#D4AF7A] mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive accounting, taxation, and logistics solutions. 
              With decades of expertise, we deliver professional services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="w-12 h-12 text-[#D4AF7A]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">40 Years</h3>
              <p className="text-[#D4AF7A]">Expert in Accounting & Taxation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Truck className="w-12 h-12 text-[#D4AF7A]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">30 Years</h3>
              <p className="text-[#D4AF7A]">Expert in Logistics Solutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-[#D4AF7A] text-[#1B3A57] px-8 py-3 rounded-lg font-semibold hover:bg-[#C19B6A] transition-colors">
              Our Services
            </a>
            <a href="#contact" className="border-2 border-[#D4AF7A] text-[#D4AF7A] px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF7A] hover:text-[#1B3A57] transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B3A57] mb-6">About Namo Consultancy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Led by <strong>Muthulakshmi Venkataramani</strong>, our consultancy brings together decades of experience 
              in accounting, taxation, and logistics to provide comprehensive business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF7A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1B3A57]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF7A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#1B3A57]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">Proven Excellence</h3>
              <p className="text-gray-600">70+ years of combined expertise in our core services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF7A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#1B3A57]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3A57] mb-2">Trusted Partner</h3>
              <p className="text-gray-600">Reliable solutions for all your business compliance needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B3A57] mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions across accounting, taxation, and logistics domains
            </p>
          </div>

          {/* Accounting & Taxation Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1B3A57] mb-8 text-center">Accounting & Taxation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[#D4AF7A]">
                  <div className="text-[#1B3A57] mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#1B3A57] mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics Services */}
          <div>
            <h3 className="text-3xl font-bold text-[#1B3A57] mb-8 text-center">Logistics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logisticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[#D4AF7A]">
                  <div className="text-[#1B3A57] mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#1B3A57] mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#1B3A57] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-[#D4AF7A] max-w-3xl mx-auto">
              Get in touch with our expert team for personalized business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#D4AF7A]">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#D4AF7A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-gray-300">044-3574 4425</p>
                    <p className="text-gray-300">9080156231</p>
                    <p className="text-gray-300">9790914413</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#D4AF7A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">namoconsultancy06@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#D4AF7A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">
                      No. 18, G3, Sai Keerthi Flats,<br />
                      1st Avenue, Prithivipakkam,<br />
                      Ambattur, Chennai - 600053
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-[#D4AF7A]">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF7A]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF7A]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF7A]">
                    <option value="">Select a service</option>
                    <option value="accounting">Accounting & Taxation</option>
                    <option value="logistics">Logistics</option>
                    <option value="both">Both Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF7A]"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#D4AF7A] text-[#1B3A57] py-3 rounded-lg font-semibold hover:bg-[#C19B6A] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2A3F] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#D4AF7A] rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#1B3A57]" />
                </div>
                <h3 className="text-xl font-bold">NAMO CONSULTANCY</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Professional business solutions with decades of expertise in accounting, taxation, and logistics.
              </p>
              <p className="text-sm text-[#D4AF7A]">
                Proprietor: Muthulakshmi Venkataramani
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF7A]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-[#D4AF7A] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#D4AF7A] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#D4AF7A] transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#D4AF7A] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF7A]">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 044-3574 4425</p>
                <p>📱 9080156231</p>
                <p>📱 9790914413</p>
                <p>✉️ namoconsultancy06@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Namo Consultancy. All rights reserved. | Professional Accounting, Taxation & Logistics Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;