import React from "react";
import { motion } from "framer-motion";
import RefComponent from "./RefComponent";

interface BibliographieProps {}

interface Reference {
  content: string;
  url?: string;
}

const Bibliographie: React.FC<BibliographieProps> = () => {
  const references: Reference[] = [
    {
      content:
        "Autorité des Marchés Financiers (AMF), « La « gamification » tend à augmenter la prise de risque en investissement selon une expérience en finance comportementale réalisée pour l’AMF, AMF, 22 novembre 2023",
      url: "https://www.amf-france.org/fr/actualites-publications/communiques/communiques-de-lamf/la-gamification-tend-augmenter-la-prise-de-risque-en-investissement-selon-une-experience-en-finance",
    },
    {
      content:
        "Autorité des Marchés Financiers (AMF), « Étude des résultats des investisseurs particuliers sur le trading de CFD et de Forex en France », AMF, 13 octobre 2014",
    },
    {
      content:
        "Csikszentmihalyi, Mihaly. « Flow: The Psychology of Optimal Experience. » ResearchGate, 1er Janvier 1990",
      url: "https://www.researchgate.net/publication/224927532_Flow_The_Psychology_of_Optimal_Experience",
    },
    {
      content: "Eyal, Nir. Hoover, Ryan. “Hooked”, Eyrolles, 2018",
    },
    {
      content:
        "Hayes, Lucy et al., “Gaming Trading: How Trading Apps Could Be Engaging Consumers for the Worse.” FCA, 2 janvier 2023",
      url: " https://www.fca.org.uk/publications/research-articles/gaming-trading-how-trading-apps-could-be-engaging-consumers-worse/printable/print",
    },
    {
      content: "Housel, Morgan. « La psychologie de l’argent », Valor, 2022",
    },
    {
      content: "H.Thaler, Richard. R.Sunstein, Cass. « Nudge », Vuibert, 2010",
    },
    {
      content:
        "Maulik, Jain. Dasharathraj, K Shetty. Nithesh, Naik. Balakrishna, S Maddodi. Namesh, Malarout. Nikhil, Perule. “Application of Gamification in the Banking Sector: A Systematic Review”. TEST, 2020",
    },
    {
      content: "Muletier, Clément. « La Gamification », Eyrolles, 2023",
    },
    {
      content:
        "P.Y. Lai, Karen. Langley, Paul. “Playful finance: Gamification and intermediation in FinTech economies”, Geoforum, 2024",
    },
    {
      content:
        "Soutarson, Coraline. « Comment les fintechs favorisent l’engagement grâce à la gamification ». Mind Fintech, 14 septembre 2021",
      url: "https://www.mind.eu.com/fintech/investissement/comment-les-fintech-favorisent-lengagement-grace-a-la-gamification/",
    },
    {
      content:
        "V an der Heide, Arjen. Želinský, Dominik. “Level up your money game: an analysis of gamification discourse in financial services”, Journal of Cultural Economy,2021",
    },
    {
      content:
        "Yu-Kai, Chou. “Gamification to improve our world”, TEDxLausanne, 2012",
    },
  ];

  const handleClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank"); // Ouvre le lien dans un nouvel onglet
    }
  };

  return (
    <div className="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <h2 style={{ margin: "0", marginBottom: "16px" }}>Bibliographie</h2>

        <div className="refContainer">
          {references.map((ref, index) => (
            <div key={index} onClick={() => handleClick(ref.url)}>
              <RefComponent content={ref.content} isClickable={!!ref.url} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Bibliographie;
