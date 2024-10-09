import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const logEventApp = (event, properties) => {
  logEvent(analytics, event, properties);
};

const logPageViewAnalytics = (pageTitle, location) => {
  logEventApp("page_view", {
    page_path: location.pathname,
    page_title: pageTitle,
    page_location: window.location.href,
    debug_mode: process.env.NODE_ENV === "development",
  });
};

export { logEventApp, logPageViewAnalytics };
