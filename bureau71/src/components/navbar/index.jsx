import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

  const [buttonFormationDisabled, setButtonIndexDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonPrestationsDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonContactDisabled] = useState(false);
  const [ButtonCompetencesDisabled, setButtonBlogDisabled] = useState(false);


  return (
    <div className="navbar">
      <Link to={'/index'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={buttonFormationDisabled}
          onClick={() => { setButtonIndexDisabled(true); setButtonPrestationsDisabled(false); setButtonContactDisabled(false); setButtonBlogDisabled(false) }}>
          Index
        </button></Link>
      <Link to={'/prestations'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={buttonExperiencesDisabled}
          onClick={() => { setButtonPrestationsDisabled(true); setButtonContactDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
          Prestations
        </button></Link>
      <Link to={'/blog'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={ButtonCompetencesDisabled}
          onClick={() => { setButtonContactDisabled(false); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(true) }}>
          Blog
        </button></Link>
      <Link to={'/contact'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={ButtonRealisationDisabled}
          onClick={() => { setButtonContactDisabled(true); setButtonPrestationsDisabled(false); setButtonIndexDisabled(false); setButtonBlogDisabled(false) }}>
          Contact
        </button></Link>
    </div>
  );
}