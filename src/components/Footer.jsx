import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-around bg-[#c21b12] text-white h-[120px] pt-10 items-center font-custom">
      <div className="items-center">
        <p className="bg-[#4a081f] px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-black">&copy; 2024 - All rights reserved</p>
      </div>
      <div className="flex gap-3 align-baseline">
        <img src="/assets/facebook.png" className="w-[47px] h-[46px] transition-transform duration-300 ease-in-out hover:scale-110" alt="Facebook" />
        <img src="/assets/instagram.png" className="w-[47px] h-[46px] transition-transform duration-300 ease-in-out hover:scale-110" alt="Instagram" />
        <img src="/assets/whatsapp.png" className="w-[41px] h-[40px]  transition-transform duration-300 ease-in-out hover:scale-110" alt="WhatsApp" />
      </div>
    </footer>
  );
}

export default Footer;
