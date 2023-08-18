import fleur from "../assets/img/headpic.jpg"

export default function Index() {
  return (
    <div class="wrapper">
      <div class="div1"> <img src={fleur} alt="" /> </div>
      <div class="div2"> <img src={fleur} alt="" /></div>
      <div class="div3"> <p> Bureau71 c'est une aventure dans l'univers de l'écologie et l'urbanisme !
        Une référence à la convention Ramsar pionnière dans la protection des zones humides</p> </div>
      <div class="div4"> <p> En tant qu'écologue et cartographe j'interviens en soutien de vos projets via des délimitations de zones humides, de la rédactions de rapport et prochainement des études faunes. </p> </div>
      <div class="div5"> <img src={fleur} alt="" /></div>
      <div class="div6"> <img src={fleur} alt="" /></div>
      <div class="div7"> <p> Ancien guide du prestigieux muséum d'histoire naturelle de Toulouse, je vous propose des activités naturalistes et vous propose mes talents de vulgarisateurs scientifiques ! </p> </div>
      <div class="div8"> <p> Je suis a </p> </div>
      <div class="div9"> <img src={fleur} alt="" /></div>
    </div>
  );
}
