import { Link } from "react-router-dom";

const TxtMotivation = () => {
  return (
    <>
      <p className="txt">
        La motivation joue un rôle principal dans l’engagement des utilisateurs
        sur les applications d’investissement, particulièrement dans un contexte
        gamifié. Elle peut être divisée en deux grandes catégories :
        extrinsèque, orientée vers des objectifs et des récompenses externes, et
        intrinsèque, qui repose sur le plaisir et l’intérêt à l’activité
        elle-même. Dans le cadre du trading, la motivation extrinsèque peut
        s'illustrer par des mécanismes liés à la possession, au développement
        personnel, ou à la gestion de la rareté. La sensation de posséder
        quelque chose motive les individus à l'améliorer, à le protéger et à en
        tirer davantage de valeur. Ce levier est activé dans eToro à travers son
        système de clubs exclusifs, où l'accès à des avantages est conditionné
        par le niveau atteint. Dans KryptoKobalt, cette dynamique est explorée
        en permettant aux utilisateurs de créer leurs propres stratégies
        d’investissement. Ces stratégies sont classées et monétisées, offrant au
        stratégiste de la reconnaissance et un sentiment d’accomplissement. Le
        développement des compétences et la maîtrise sont de puissants moteurs.
        eToro utilise des notifications qui encouragent l’utilisateur selon un
        pourcentage atteint. La tournure des phrases est adaptée pour refléter
        les progrès. Sur KryptoKobalt, le feedback en temps réel est basé sur
        l’efficacité des stratégies créées, donnant aux utilisateurs des
        opportunités d’apprentissage et d’amélioration en continue. L’urgence
        stimule l’action, mais dans le domaine du trading, cette approche doit
        être mesurée en raison des risques de volatilité des marchés. eToro joue
        subtilement avec des formulations comme « plus que X pour atteindre le
        prochain niveau », ce qui incite à agir sans pression excessive. Dans
        notre application, nous réfléchissons à intégrer des éléments de rareté,
        par exemple des opportunités de collaboration entre utilisateurs. Si les
        mécanismes extrinsèques, axés sur les récompenses et les objectifs,
        permettent de stimuler l’action, la motivation intrinsèque, quant à
        elle, assure une implication durable en transformant l’investissement en
        une expérience enrichissante et plaisante. Dans les applications de
        trading, elle se manifeste à travers des mécanismes favorisant
        l’autonomie, la créativité, les relations sociales et la curiosité. La
        capacité à prendre ses propres décisions et à innover engage les
        utilisateurs de manière durable. Dans KryptoKobalt, l’autonomie est au
        cœur de l’expérience : les utilisateurs peuvent 5 combiner différentes
        stratégies pour maximiser leurs performances et recevoir un feedback
        immédiat. Cela transforme l’investissement en un espace
        d’expérimentation, plutôt qu’une quête de profit. Ainsi les utilisateurs
        développent une meilleure compréhension des dynamiques du marché,
        rendant l’expérience non seulement engageante, mais aussi formatrice.
        Les interactions sociales renforcent l’engagement en créant un sentiment
        de communauté. eToro exploite ce levier avec son concept de «
        copy-trading », où les utilisateurs peuvent suivre les stratégies des
        autres et échanger sur leurs choix. Dans KryptoKobalt, nous prévoyons
        d’intégrer des outils de collaboration, permettant aux membres de
        s’inspirer mutuellement et d’échanger des idées tout en cultivant une
        communauté active. Cela pourrait s’illustrer par des forums ou des
        guildes. L’idée de clan pourrait être exploitée pour créer des défis
        internes ou des évènements temporaires. L’incertitude et le suspense
        suscitent une excitation qui maintient les utilisateurs engagés. Ce
        principe est largement utilisé dans les jeux d’argent et doit être
        intégré avec prudence dans les applications de trading. Nous
        envisageons, pour KryptoKobalt, des fonctionnalités telles que des défis
        hebdomadaires ou des événements spéciaux aux résultats imprévisibles, ce
        qui pourrait convenir par exemple aux guildes citées plus haut, tout en
        garantissant que ces éléments restent dans un cadre transparent et non
        manipulatif. La recherche de motivation dans les applications de trading
        doit être pensée de manière équilibrée pour offrir une expérience à la
        fois engageante, éducative et éthique. Dans KryptoKobalt, nous cherchons
        à allier ces dynamiques à des mécanismes qui respectent les
        utilisateurs, en les responsabilisant et en transformant
        l’investissement en une aventure collaborative tout en progressant
        individuellement.
      </p>
      <p style={{ textAlign: "end" }}>
        <Link
          to="/annexes/2" 
          style={{
            textDecoration: "none",
            color: "#007bff",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          Voir annexe 2
        </Link>
      </p>
    </>
  );
};

export default TxtMotivation;
