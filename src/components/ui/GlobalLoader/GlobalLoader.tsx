"use client";

import EventBus from "@/event-emitter/index";
import styles from "./styles.module.scss";

import React, { useEffect, useState } from "react";
import { EVENT_BUS_EVENTS } from "@/event-emitter/event-constants";
import Spinner from "../Spinner/Spinner";

const GlobalLoader = () => {
  // state
  const [isVisible, setIsVisible] = useState(false);
  const [loaderText, setLoaderText] = useState<string | null>(null);

  useEffect(() => {
    EventBus.on(EVENT_BUS_EVENTS.SHOW_GLOBAL_LOADER, showLoader);
    EventBus.on(EVENT_BUS_EVENTS.HIDE_GLOBAL_LOADER, hideLoader);

    return () => {
      EventBus.off(EVENT_BUS_EVENTS.SHOW_GLOBAL_LOADER, showLoader);
      EventBus.off(EVENT_BUS_EVENTS.HIDE_GLOBAL_LOADER, hideLoader);
    };
  }, []);

  const showLoader = (loadingMsg: string) => {
    setIsVisible(true);
    if (loadingMsg) {
      setLoaderText(loadingMsg);
    }
  };

  const hideLoader = () => {
    setIsVisible(false);
    setLoaderText(null);
  };

  if (!isVisible) return null;

  return (
    <div
      id="global-loader"
      className={styles.container}
    >
      <Spinner
        customText={loaderText || undefined}
        showText
        size={12}
      />
    </div>
  );
};

export default GlobalLoader;
