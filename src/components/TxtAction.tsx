import { Link } from "react-router-dom";

interface TxtActionProps {
}

const TxtAction: React.FC<TxtActionProps> = () => {
  return (
    <>
      <p className="txt">
        Passer à l’action dans le trading est un moment clé. Dans le cadre du
        design on cherche à comprendre le processus de décision pour créer un
        Call to action efficace (inciter le passage à l’action de
        l’utilisateur). C’est là que le sentiment d’urgence devient une
        hypothèse viable pour le créer. Ce sentiment peut être illustré par
        trois leviers, la rareté, l’aversion à la perte et les récompenses
        aléatoires. eToro valorise les investisseurs à travers son programme «
        Popular Investor », qui met en avant leur profil en fonction du nombre
        de copieurs (personnes reproduisant leurs investissements), leur
        conférant ainsi une plus grande visibilité et attractivité. Cette rareté
        est renforcée par la difficulté de maintenir des performances constantes
        et par l'exclusivité liée à leur stratégie de trading. La perte en
        trading est un élément omniprésent, l’étude de l’AMF2 le confirme en
        nous montrant que sur 4 années cumulées, 89% des personnes perdent de
        l’argent sur le trading de CFD3 et de Forex4 en France. C’est pourquoi
        la perte devrait être encadrée et représentée clairement. Dans
        KryptoKobalt nous envisageons de notifier l’investisseur lorsque la
        stratégie devient défavorable en fonction de la condition de marché. Une
        simulation globale de la stratégie (montrant une potentielle perte ou un
        gain, en fonction du temps) va aussi aider l’utilisateur à se projeter.
        Dans le cadre des applications de trading, les évènements aléatoires
        sont rarement illustrés, eToro ne propose pas explicitement de
        récompenses incertaines. Il pourrait proposer des annonces réservées aux
        membres des clubs VIP (par exemple accès à de nouvelles fonctionnalités)
        ou participer à des évènements (webinaires, offres) qui amèneraient
        cette imprévisibilité. KryptoKobalt propose déjà une sélection d’avatars
        qui est accessible aux utilisateurs en fonction de leur profil. A
        l’avenir, on envisage de mettre à disposition de nouveaux avatars qui
        seraient débloqués par des évènements temporaires ou aléatoires. Il
        pourrait également être envisageable de les débloquer sous forme de
        quêtes d'apprentissage, à l'image des badges. Cependant, est-il vraiment
        nécessaire d’ajouter de l’aléatoire dans un domaine imprévisible rempli
        d’émotions humaines et de nuances ? Je pense que cette phrase résume en
        parti la réponse : « L’argent c’est le plus grand cirque du monde5».
      </p>
      <p style={{ textAlign: "end" }}>
        <Link
          to="/annexes/4" 
          style={{
            textDecoration: "none",
            color: "#007bff",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          Voir annexe 4
        </Link>
      </p>
    </>
  );
};

export default TxtAction;
