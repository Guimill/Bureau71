import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [buttonFormationDisabled, setButtonIndexDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonPrestationsDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonContactDisabled] = useState(false);
  const [ButtonCompetencesDisabled, setButtonBlogDisabled] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = e => {
    setIsShown(current => !current);
  };

  function Show() {
    if(window.scrollY >= 920) {
      setIsShown(true)
    }else {
      setIsShown(false)
    }
  }

  window.addEventListener("scroll",Show)

  return (
    <>
      <div className={isShown ? "navbar scrolling" : "navbar"}>
        {isShown && (
          <ul>
            <li>
              <Link to={'/'}>
                <button disabled={buttonFormationDisabled}
                  onClick={() => { setButtonIndexDisabled(true); setButtonPrestationsDisabled(false); setButtonContactDisabled(false); setButtonBlogDisabled(false) }}>
                  Acceuil
                </button></Link>
            </li>
            <li>
              <Link to={'/prestations'}>
                <button disabled={buttonExperiencesDisabled}
                  onClick={() => { setButtonPrestationsDisabled(true); setButtonContactDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
                  Prestations
                </button></Link>
            </li>
            <li>
              <Link to={'/blog'}>
                <button disabled={ButtonCompetencesDisabled}
                  onClick={() => { setButtonContactDisabled(false); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(true) }}>
                  Blog
                </button></Link>
            </li>
            <li>
              <Link to={'/contact'}>
                <button disabled={ButtonRealisationDisabled}
                  onClick={() => { setButtonContactDisabled(true); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
                  Contact
                </button></Link>
            </li>
          </ul>
        )}
        <div onClick={handleClick} className={isShown ? "navbar scrolling" : "navbar"}></div>
      </div>
    </>
  );
}