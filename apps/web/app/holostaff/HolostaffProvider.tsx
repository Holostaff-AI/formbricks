"use client";

import { holostaff } from "@holostaff/sdk";
import { useEffect } from "react";

interface HolostaffProviderProps {
  children: React.ReactNode;
}

export const HolostaffProvider = ({ children }: Readonly<HolostaffProviderProps>) => {
  useEffect(() => {
    holostaff.init({
      tenantId: "workspace_urZYaISXD2Pcx2jCgTE57vyYCQu2",
      sourceId: "ks_mrpjsskb_z9cqrl",
    });
    // Run once on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
