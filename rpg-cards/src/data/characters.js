import novaImage from "../assets/Nova.png";
import kaelImage from "../assets/Kael.png";
import lyraImage from "../assets/Lyra.png";
import theronImage from "../assets/Theron.png";
import wizardSymbol from "../assets/Wizard-symbol.png";
import warriorSymbol from "../assets/Warrior-symbol.png";
import rogueSymbol from "../assets/Rogue-symbol.png";
import paladinSymbol from "../assets/Paladin-symbol.png";

export const characters = [
  {
    name: "Nova",
    role: "Mage",
    hp: 80,
    level: 5,
    image: novaImage,
    roleSymbol: wizardSymbol,
    portraitPosition: "74% top",
    description:
      "A gifted battle mage who commands ancient arcane forces. Knowledge is her greatest weapon.",
    quote: "The arcane sees what others miss.",
  },
  {
    name: "Kael",
    role: "Warrior",
    hp: 140,
    level: 12,
    image: kaelImage,
    roleSymbol: warriorSymbol,
    portraitPosition: "59% top",
    description:
      "A seasoned warrior whose strength and resolve can turn the tide of any battle.",
    quote: "Strength creates opportunities.",
  },
  {
    name: "Lyra",
    role: "Rogue",
    hp: 0,
    level: 4,
    image: lyraImage,
    roleSymbol: rogueSymbol,
    portraitPosition: "51% top",
    description:
      "A silent rogue who strikes from the shadows before her enemies can react.",
    quote: "Silence is a weapon too.",
  },
  {
    name: "Theron",
    role: "Paladin",
    hp: 110,
    level: 3,
    image: theronImage,
    roleSymbol: paladinSymbol,
    portraitPosition: "59% top",
    description:
      "A steadfast paladin who protects his allies with unwavering faith and steel.",
    quote: "Justice endures.",
  },
];
