import * as amplitude from '@amplitude/analytics-browser';
export const trackEvent = (eventName: string, eventProperties?: any) => amplitude.track(eventName, eventProperties);
