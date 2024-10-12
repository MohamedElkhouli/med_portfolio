import AboutMyEx from "../components/AboutMe/AbotMyEx";
import AboutMe from "../components/AboutMe/AboutMe";
import MesCompetences from "../components/AboutMe/MesCompetences";
import { BadgePortfolio } from "../components/MySkills/BadgePortfolio";

export default function Home () {
  return (
    <div>
      <AboutMe/>
      <AboutMyEx/>
      <MesCompetences/>
      <BadgePortfolio></BadgePortfolio>
    </div>
  );
}

