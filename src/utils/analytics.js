/**
 * Analytics utility for tracking user interactions
 */

// Store analytics events in localStorage for persistence
const ANALYTICS_KEY = "portfolio_analytics";

/**
 * Get stored analytics data
 */
export const getAnalytics = () => {
  try {
    const data = localStorage.getItem(ANALYTICS_KEY);
    return data ? JSON.parse(data) : { resumeClicks: [] };
  } catch {
    return { resumeClicks: [] };
  }
};

/**
 * Track resume download/view click
 * @param {string} source - Where the click came from (e.g., 'header', 'greeting')
 */
export const trackResumeClick = (source = "unknown") => {
  try {
    const analytics = getAnalytics();
    const event = {
      timestamp: new Date().toISOString(),
      source,
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct",
    };

    analytics.resumeClicks.push(event);
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Resume Click Tracked:", event);
    }

    // If Google Analytics is available, send event
    if (typeof window.gtag === "function") {
      window.gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: source,
        value: 1,
      });
    }

    // If other analytics (e.g., Mixpanel, Amplitude) are available
    if (typeof window.mixpanel !== "undefined") {
      window.mixpanel.track("Resume Downloaded", { source });
    }

    return true;
  } catch (error) {
    console.error("Analytics error:", error);
    return false;
  }
};

/**
 * Get resume click statistics
 */
export const getResumeStats = () => {
  const analytics = getAnalytics();
  const clicks = analytics.resumeClicks || [];

  return {
    totalClicks: clicks.length,
    clicksBySource: clicks.reduce((acc, click) => {
      acc[click.source] = (acc[click.source] || 0) + 1;
      return acc;
    }, {}),
    recentClicks: clicks.slice(-10),
  };
};
