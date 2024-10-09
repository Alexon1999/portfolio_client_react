import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='language-switcher'>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}>
        <option value='en'>
          <span class='fi fi-gr'></span> <span class='fi fi-gr fis'></span>
        </option>
        <option value='fr'>
          <span class='fi fi-fr'></span> <span class='fi fi-fr fis'></span>
        </option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
