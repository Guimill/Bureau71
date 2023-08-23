import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [buttonFormationDisabled, setButtonIndexDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonPrestationsDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonContactDisabled] = useState(false);
  const [ButtonCompetencesDisabled, setButtonBlogDisabled] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <>
      <div className="navbar">
        {isShown && (
        <ul>
          <li>
            <Link to={'/'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
              <button disabled={buttonFormationDisabled}
                onClick={() => { setButtonIndexDisabled(true); setButtonPrestationsDisabled(false); setButtonContactDisabled(false); setButtonBlogDisabled(false) }}>
                Acceuil
              </button></Link>
          </li>
          <li>
            <Link to={'/prestations'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
              <button disabled={buttonExperiencesDisabled}
                onClick={() => { setButtonPrestationsDisabled(true); setButtonContactDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
                Prestations
              </button></Link>
          </li>
          <li>
            <Link to={'/blog'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
              <button disabled={ButtonCompetencesDisabled}
                onClick={() => { setButtonContactDisabled(false); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(true) }}>
                Blog
              </button></Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
              <button disabled={ButtonRealisationDisabled}
                onClick={() => { setButtonContactDisabled(true); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
                Contact
              </button></Link>
          </li>
        </ul>
        )}
        <div onClick={handleClick}></div>
      </div>
    </>
  );
}