'use client'

import { useState, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";

export default function StoreProvider(
  { children } : { children : ReactNode}) {
    const [store] = useState<AppStore>(makeStore)
    return <Provider store={store}>
      {children}
    </Provider>
  }