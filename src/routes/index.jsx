import fleur from "../assets/img/headpic.jpg"

export default function Index() {
  return (
    <div class="wrapper">
    <div class="div1"> <img src={fleur} alt="logo" /> </div>
    <div class="div2"> <div className="div2__background"></div> </div>
    <div class="div3"> Bureau71 c'est une aventure dans l'univers de l'écologie et l'urbanisme !
        Une référence à la convention Ramsar pionnière dans la protection des zones humides !
        Dans une démarche écocitoyenne mes déplacements sont faible carbonne (train, vélo, VAE) et je réduis au mieux mes impacts sur les écosystèmes étudiés.</div>
    <div class="div4"> En tant qu'écologue et cartographe je vous accompagne sur vos projets par des délimitations de zones humides, de la rédactions de rapport et prochainement des études faunes.</div>
    <div class="div5"> <div className="div5__background"></div> </div>
    <div class="div6"> <div className="div6__background"></div> </div>
    <div class="div7"> Ancien guide du prestigieux muséum d'histoire naturelle de Toulouse, je vous propose des activités naturalistes et vous propose mes talents de vulgarisateurs scientifiques !</div>
    <div class="div8"> Les organismes qui m'ont fait confiance "logo museum d'histoire naturelle de nantes"</div>
    </div>    
  );
}