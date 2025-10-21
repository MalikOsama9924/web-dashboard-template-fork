import { EVENT_BUS_EVENTS } from "./event-constants";
import EventBus from "./index";

/**
 * Emits a logout event
 */
export const emitLogoutEvent = () => {
  EventBus.emit(EVENT_BUS_EVENTS.LOGOUT);
  emitShowGlobalLoader("Logging out...");
};

export const emitShowGlobalLoader = (loadingMsg = "") => {
  EventBus.emit(EVENT_BUS_EVENTS.SHOW_GLOBAL_LOADER, loadingMsg);
};

export const emitHideGlobalLoader = () => {
  EventBus.emit(EVENT_BUS_EVENTS.HIDE_GLOBAL_LOADER);
};
