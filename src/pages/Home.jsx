import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioModal from '../components/PortfolioModal';
import Toast from '../components/Toast';

import HeroSection from '../sections/HeroSection';
import TrustMetricsSection from '../sections/TrustMetricsSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import ProductsSection from '../sections/ProductsSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import WhyUsSection from '../sections/WhyUsSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';
import CtaSection from '../sections/CtaSection';

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null
  });

  const [toastState, setToastState] = useState({
    isVisible: false,
    message: ''
  });

  const handleOpenModal = (data) => {
    setModalState({
      isOpen: true,
      data
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      data: null
    });
  };

  const handleShowToast = (msg) => {
    setToastState({
      isVisible: true,
      message: msg
    });

    setTimeout(() => {
      setToastState({
        isVisible: false,
        message: ''
      });
    }, 4000);
  };

  return (
    <>
      <Navbar />
      <main className="relative pt-24">
        <HeroSection />
        <TrustMetricsSection />
        <ServicesSection />
        <PortfolioSection onOpenModal={handleOpenModal} />
        <ProductsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <WhyUsSection />
        <FaqSection />
        <ContactSection onShowToast={handleShowToast} />
        <CtaSection />
      </main>
      <Footer />

      <PortfolioModal 
        isOpen={modalState.isOpen}
        modalData={modalState.data}
        onClose={handleCloseModal}
      />

      <Toast 
        isVisible={toastState.isVisible}
        message={toastState.message}
      />
    </>
  );
}
