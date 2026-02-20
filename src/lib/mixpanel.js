import mixpanel from "mixpanel-browser";

let isInitialized = false;

export const initMixpanel = () => {
  if (typeof window === "undefined") return;
  if (isInitialized) return;

  mixpanel.init(
    "2d68ca75efe3d249da240a1e075500cf",
    {
      debug: false,
      track_pageview: false, 
      persistence: "localStorage",
      api_host: "https://api-eu.mixpanel.com",
    }
  );

  isInitialized = true;
};

export const trackEvent = (event, props = {}) => {
  if (!isInitialized) return;
  mixpanel.track(event, props);
};

export default mixpanel;
