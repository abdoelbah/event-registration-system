import React from 'react';
import FormDemo from './components/Form';
import CountdownTimer from './components/CountDownTimer';
import Background from './assets/Wallpaper 4K raw.jpg';
import LOGO from './assets/NTD 2025 Logo-04.svg';
import FooterWithLogo from './components/Footer';
import timeStamp from './assets/Date Tag Stamp.png'



function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-white font-tajawal text-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Main content should grow to fill space */}
      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <img src={LOGO} className="w-72 h-72 mb-4" alt="شعار اليوم الوطني للتقنية" />

        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          سجّل حضورك في اليوم الوطني للتقنية
        </h1>

        <CountdownTimer />

        <div className="relative w-full max-w-md rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 z-0 backdrop-blur-md"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            }}
          />
          <div className="relative z-10 p-8 rounded-xl backdrop-blur-sm">
            <FormDemo />
          </div>
        </div>

        <p className="mt-6 text-sm text-white/70">نتطلع لرؤيتك يوم 1 يونيو 2025!</p>
      </main>

      {/* Footer always at the bottom */}
      <footer className="w-full px-20 pb-12">
        <FooterWithLogo />
      </footer>
    </div>
  );
}

export default App;
