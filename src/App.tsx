import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Eligibility } from './components/Eligibility';
import { Benefits } from './components/Benefits';
import { Domains } from './components/Domains';
import { HowToApply } from './components/HowToApply';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { LoginModal } from './components/LoginModal';
import { supabase } from './lib/supabase';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setUser(session?.user ?? null);
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLoginClick={() => setIsLoginModalOpen(true)}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
      />

      <main>
        <Hero
          onRegisterClick={() => setIsRegisterModalOpen(true)}
          onLoginClick={() => setIsLoginModalOpen(true)}
        />
        <About />
        <Eligibility />
        <Benefits />
        <Domains />
        <HowToApply />
        <CTA onRegisterClick={() => setIsRegisterModalOpen(true)} />
      </main>

      <Footer />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
        onLoginSuccess={() => {}}
      />
    </div>
  );
}

export default App;
