import React from "react";

const Main = () => (
  <main className="flex flex-col items-center w-full max-w-[960px] mx-auto px-4">
    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 text-center">
      Rhino 1015 Web3 Academy is an AI-powered educational platform designed to help you master Web3 technologies. Earn XP, collect NFT certifications, and join a thriving community of Web3 enthusiasts.
    </p>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Features</h2>
    <div className="space-y-4 w-full">
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-transparent p-4">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-white text-base font-bold leading-tight">AI-Personalized Courses</p>
          <p className="text-[#9db8b5] text-sm font-normal leading-normal">Our AI-driven platform tailors learning paths to your individual needs, ensuring efficient and effective knowledge acquisition.</p>
        </div>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDD6bWC75JHGnCXwUBlQ0jpTmobZ1hHy9Hhb9d_aKScS9L5SbhNzZzMGDCwolbbWPXNRLUeYefoMaeJWlG2KDd9FMQ7UxcE1pgqipvUBLP1-PYxjeGQ-rL5ZscR7aCR8yThW-rUmZf65_VcWJqh0K3STok6OoqLyyXUf8uA0VgVdXEEw7wsDBX0ku6I5AxVJPMeq2Vsw927fwwg-6Ro_2o3A2ihvigzgqsFR3-ThF1ipyUPEWhMd1vyD3UhxVUHiVF-l5mwUdy-kNs)'}}></div>
      </div>
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-transparent p-4">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-white text-base font-bold leading-tight">XP Gamification System</p>
          <p className="text-[#9db8b5] text-sm font-normal leading-normal">Engage with our interactive XP system, leveling up your skills and earning rewards as you progress through the curriculum.</p>
        </div>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAdreevR_QK-s5WMctsagJCFY6qXSPCLNNHKODgRxJiQIEb3f1h5RZJcQrksykzgu11LTxFZpZP4xKAdT2jh28EPyslpcdYLwkLlB1SGFKl96HMC62hXpNoiH1TKaa2sQxN_7h_t12e4gDgYPWjsipPSM4J59P_bLh9QycM-UfjnvVYnP-1c5bUg3C947E8MIqLSetWSUZVDKItc1vrEygTitNVzt79Qa80q9xNDnCa0gmOHb9z9_HYFjGCw4qwL_hDMaLtIrSchO0)'}}></div>
      </div>
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-transparent p-4">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-white text-base font-bold leading-tight">Soulbound NFT Badges</p>
          <p className="text-[#9db8b5] text-sm font-normal leading-normal">Showcase your achievements with unique, soulbound NFT badges, representing your mastery of Web3 concepts and technologies.</p>
        </div>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBuIk2ERMFyVCPG5IyhO_bf_ckYwblducVp-bfuwm81GWUPIO5cRNgoEJjw6euKlZACPG4L96DRFlTMS-nd3jz7kHvI78y9ma3JWoTaE_2hsO6C6nL5BfFfo-KazmxKy__R-A9uRCUoE59bibRWvpnKaRKODVe5dutkP4BTZcajREHX_V6WTuG2uPa735NiIMRQTiZ0NTcmqAfEVu1oaMdGprSHclR5BQ8CnVHmvua9j-1smUqa-sk1IfIJEjgXb4i8n2ghDoJFJ4g)'}}></div>
      </div>
    </div>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">How it Works</h2>
    <div className="grid grid-cols-[40px_1fr] gap-x-2 w-full">
      {/* Здесь блоки "How it Works" с иконками и описанием */}
    </div>
    <div className="flex flex-col justify-end gap-6 py-10 md:gap-8 md:px-10 md:py-20 w-full">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black max-w-[720px] mx-auto">Start your Web3 journey today</h1>
      </div>
      <div className="flex flex-1 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#19e5cd] text-[#111817] text-sm font-bold md:text-base grow">
          <span className="truncate">Join the Herd</span>
        </button>
      </div>
    </div>
  </main>
);

export default Main;
