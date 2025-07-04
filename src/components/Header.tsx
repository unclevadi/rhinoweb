import React from "react";

const Header = () => (
  <header className="w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[480px] gap-6 p-4 rounded-lg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA6VElOvjUrP_Uoc7NGeDUkA_RHq9Z4ocrZ9Fb4_Ktcuk3sJ1TOkZNYab_PHpRpUUdaP8_UJdvqDs1Ytw1Q23nxOFvxLwPxXh-9_QvRPqTMQuuGnR7lVtdwwB6UDqBzObODbt5_GrmJ3Y9bK_uZzDBp8eTUcTN5E0kI7orAeOydBoL5ObIYIRFp0XXPCOzWn1UQdk2tJ7Ho0dj1XSqz4S8cw2oLdezKG86tTXUA2wO4P15116TFb1NxPEGxoDbWakKqqirJm0IrJ_0\")'}}>
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Become a Web3 Rhino</h1>
      <h2 className="text-white text-sm font-normal md:text-base">Learn, Earn, Evolve</h2>
    </div>
    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#19e5cd] text-[#111817] text-sm font-bold md:text-base">
      <span className="truncate">Join the Herd</span>
    </button>
  </header>
);

export default Header;
