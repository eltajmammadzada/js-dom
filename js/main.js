import { Hero } from "./Hero.js";
import { HeroCard } from "./HeroCard.js";
import { HeaderNav } from "./topbar.js";


const app = document.getElementById('app');
app.classList.add('bg-[#161815]')
app.classList.add('text-white')
app.appendChild(HeaderNav());
app.appendChild(Hero())
app.appendChild(HeroCard())