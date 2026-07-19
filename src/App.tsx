import React from 'react';
import { DemoProvider } from './context/DemoContext';
import { DemoModal } from './components/DemoModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Facilities } from './components/Facilities';
import { ClassSchedule } from './components/ClassSchedule';
import { PersonalTrainers } from './components/PersonalTrainers';
import { TransformationGallery } from './components/TransformationGallery';
import { BMICalculator } from './components/BMICalculator';
import { MembershipPlans } from './components/MembershipPlans';
import { Testimonials } from './components/Testimonials';
import { FAQs } from './components/FAQs';
import { Blog } from './components/Blog';
import { CTASection } from './components/CTASection';
import { BookingAndContact } from './components/BookingAndContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <DemoProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 font-sans antialiased">
        
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Global Modal for Placeholder Triggers */}
        <DemoModal />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* Services Section */}
          <Services />

          {/* Facilities Section */}
          <Facilities />

          {/* Class Schedule Section */}
          <ClassSchedule />

          {/* Personal Trainers Section */}
          <PersonalTrainers />

          {/* Transformation Gallery Section */}
          <TransformationGallery />

          {/* BMI Calculator Section */}
          <BMICalculator />

          {/* Membership Subscription Plans */}
          <MembershipPlans />

          {/* Client Testimonials Section */}
          <Testimonials />

          {/* FAQs Accordion Section */}
          <FAQs />

          {/* Journal & Blog Section */}
          <Blog />

          {/* Call to Action Section */}
          <CTASection />

          {/* Booking System and Contacts Info */}
          <BookingAndContact />
        </main>

        {/* Premium Directory Footer */}
        <Footer />

      </div>
    </DemoProvider>
  );
}
