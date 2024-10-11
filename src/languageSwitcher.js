import React from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  const languages = [
    {
      code: "fr",
      label: "Français",
      flag: "FRA",
    },
    {
      code: "en",
      label: "English",
      flag: "GBR",
    },
  ];

  return (
    <Box className='language-switcher' sx={{ minWidth: 100 }}>
      <FormControl fullWidth size='small'>
        <Select
          labelId='language-select-label'
          id='language-select'
          value={language}
          label='Language'
          color='primary'
          onChange={changeLanguage}>
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Flag code={language.flag} height='15' />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSwitcher;
