import React from "react";

// Components
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Airlines } from "./pages/Airlines";

const AirlinesInformation = () => {
  return (
    <div className="airlines-information">
      <Header />
      <Airlines />
      <Footer />
    </div>
  );
};

export default AirlinesInformation;
