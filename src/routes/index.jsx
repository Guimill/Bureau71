import ise from "../assets/img/ise.png"
import esa from "../assets/img/esa.png"
import hg from "../assets/img/hg.png"
import museum from "../assets/img/museum.png"
import artelia from "../assets/img/artelia.png"
import extia from "../assets/img/extia.png"
import orange from "../assets/img/orange.png"

export default function Index() {
  return (
    <div class="wrapper">
    <div class="div1"> <div className="div1__background"></div> </div>
    <div class="div2"> <div className="div2__background"></div> </div>
    <div class="div3"> Bureau71 c'est une aventure dans l'univers de l'écologie et l'urbanisme !
        Une référence à la convention Ramsar pionnière dans la protection des zones humides !
        Dans une démarche écocitoyenne mes déplacements sont faible carbonne (train, vélo, VAE) et je réduis au mieux mes impacts sur les écosystèmes étudiés.</div>
    <div class="div4"> En tant qu'écologue et cartographe je vous accompagne sur vos projets par des délimitations de zones humides, de la rédactions de rapport et prochainement des études faunes.</div>
    <div class="div5"> <div className="div5__background"></div> </div>
    <div class="div6"> <div className="div6__background"></div> </div>
    <div class="div7"> Ancien guide du prestigieux muséum d'histoire naturelle de Toulouse, je vous propose des activités naturalistes et vous propose mes talents de vulgarisateurs scientifiques !</div>
    <div class="div8"> Les organismes qui m'ont fait confiance :
    <div className="div8__listwrapper"><ul>
    <li><img src={ise} alt="logo ise" /></li>
    <li><img src={esa} alt="logo esa" /></li>
    <li><img src={museum} alt="logo museum" /></li>
    <li><img src={hg} alt="logo haute-garonne" /></li>
    <li><img src={artelia} alt="logo artelia" /></li>
    <li><img src={extia} alt="logo extia" /></li>
    <li><img src={orange} alt="logo orange" /></li>
    </ul></div>
    </div>
    </div>    
  );
}
