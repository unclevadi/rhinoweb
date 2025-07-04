import React from "react";

const Footer = () => (
  <footer className="flex flex-col gap-6 px-5 py-10 text-center items-center">
    <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
      <a className="text-[#9db8b5] text-base font-normal min-w-40" href="#">Courses</a>
      <a className="text-[#9db8b5] text-base font-normal min-w-40" href="#">Community</a>
      <a className="text-[#9db8b5] text-base font-normal min-w-40" href="#">FAQ</a>
      <a className="text-[#9db8b5] text-base font-normal min-w-40" href="#">Log In</a>
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {/* SVG иконки соцсетей можно добавить здесь */}
    </div>
    <p className="text-[#9db8b5] text-base font-normal">@2024 Rhino 1015 Web3 Academy</p>
  </footer>
);

export default Footer;
