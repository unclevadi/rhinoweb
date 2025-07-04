import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111817] overflow-x-hidden">
      <div className="flex-1 flex flex-col items-center">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
