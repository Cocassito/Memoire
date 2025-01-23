// AnnexePrincipal.tsx
import React, { useState } from "react";
import Annexe from "./Annexe";

const Annexes: React.FC = () => {
  const [currentAnnexe, setCurrentAnnexe] = useState<number>(0);

  const annexes = [
    {
      id: 1,
      title: "Annexe 1 : “Octalysis”, 8 Core Drives developed by Yu-kai Chou",
      imageUrl: "/img/octalysis.png",
      altText: "Graphique 1",
    },
    {
      id: 2,

      title: "Annexe 2: Création de stratégies sur KryptoKobalt",
      imageUrl: "/img/kkCreatestrat.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 2: Création de stratégies sur KryptoKobalt",
      imageUrl: "/img/kkHomestrat.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 2: Création de stratégies sur KryptoKobalt",
      imageUrl: "/img/kkCreatestrat2.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 2: “Copy-trading” eToro",
      imageUrl: "/img/etoroCopy.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 2: Fil d’actualités eToro",
      imageUrl: "/img/etoroFil.png",
      altText: "Graphique 2",
    },
    {
      id: 3,

      title: "Annexe 3: Classement des traders eToro",
      imageUrl: "/img/etoroClass.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 3: Dashboard KryptoKobalt",
      imageUrl: "/img/kkDashboard.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 3: Dashboard eToro",
      imageUrl: "/img/etoroDashboard.png",
      altText: "Graphique 2",
    },
    {
      id: 4,

      title: "Annexe 4: “Popular Investor” eToro",
      imageUrl: "/img/etoroPopular.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 4: “Popular Investor” eToro",
      imageUrl: "/img/etoroPopular2.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 4: Simulation des stratégies KryptoKobalt",
      imageUrl: "/img/kkSimubecnh.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 4: Simulation des stratégies KryptoKobalt",
      imageUrl: "/img/kkSimubench2.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 4: Offres Club VIP eToro",
      imageUrl: "/img/etoroOffreclub.png",
      altText: "Graphique 2",
    },
    {
      title: "Annexe 4: Liste d’avatars KryptoKobalt",
      imageUrl: "/img/kkAvatar.png",
      altText: "Graphique 2",
    },
  ];

  const handleNext = () => {
    if (currentAnnexe < annexes.length - 1) {
      setCurrentAnnexe(currentAnnexe + 1);
    }
  };

  const handlePrevious = () => {
    if (currentAnnexe > 0) {
      setCurrentAnnexe(currentAnnexe - 1);
    }
  };

  return (
    <div className="dashboard">
      <Annexe
        title={annexes[currentAnnexe].title}
        imageUrl={annexes[currentAnnexe].imageUrl}
        altText={annexes[currentAnnexe].altText}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0px",
        }}
      >
        <button onClick={handlePrevious} disabled={currentAnnexe === 0}>
          ← Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={currentAnnexe === annexes.length - 1}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
};

export default Annexes;
