import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation(); // Access translations

  return (
    <div className='container not_found'>
      <div className='icon-container'>
        <i className='fas fa-exclamation-triangle'></i> {/* FontAwesome icon */}
      </div>

      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.description")}</p>
      <Link to='/'>{t("notFound.homeLinkText")}</Link>
    </div>
  );
};

export default NotFoundPage;
