import { TrackingEvent } from "../types";

export function trackEvent(eventName: TrackingEvent["eventName"], details?: string) {
  try {
    const existingStr = localStorage.getItem("ydvn_events");
    const events: TrackingEvent[] = existingStr ? JSON.parse(existingStr) : [];
    const newEvent: TrackingEvent = {
      id: "evt_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      timestamp: new Date().toISOString(),
      eventName,
      details,
    };
    events.unshift(newEvent);
    // Keep max 200 events
    if (events.length > 200) events.pop();
    localStorage.setItem("ydvn_events", JSON.stringify(events));
  } catch (err) {
    console.error("Tracking error:", err);
  }
}
