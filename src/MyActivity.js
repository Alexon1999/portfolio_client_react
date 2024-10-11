import React from "react";
import Badge from "react-bootstrap/Badge";
import { useTranslation } from "react-i18next";

function MyActivity() {
  const { t } = useTranslation();

  const activities = t("myActivity.activities", { returnObjects: true });

  return (
    <div className='my_activity'>
      {activities.map((activity, index) => (
        <div
          key={index}
          className={`my_activity__card ${
            index === activities.length - 1 ? "my_activity__card--last" : ""
          }`}>
          <div className='my_activity__icon'>
            <Badge bg={getBadgeColor(index)}>
              <i className={getIconClass(index)}></i>
            </Badge>
          </div>
          <h3 className='my_activity__title'>{activity.title}</h3>
          <p className='my_activity__description'>{activity.description}</p>
        </div>
      ))}
    </div>
  );
}

// Helper functions to get icon classes and badge colors
const getIconClass = (index) => {
  const icons = [
    "fas fa-calendar-alt",
    "fas fa-lightbulb",
    "fas fa-cogs",
    "fas fa-laptop-code",
    "fas fa-tools",
    "fas fa-server",
  ];
  return icons[index] || icons[0];
};

const getBadgeColor = (index) => {
  const colors = ["primary", "warning", "info", "success", "danger", "dark"];
  return colors[index] || "primary";
};

export default MyActivity;
