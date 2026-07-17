"use client";

import { holostaff } from "@holostaff/sdk";
import React, { useEffect } from "react";

export const HolostaffProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    holostaff.init({
      tenantId: "workspace_urZYaISXD2Pcx2jCgTE57vyYCQu2",
      sourceId: "ks_mrpjsskb_z9cqrl",
    });
  }, []);

  return <>{children}</>;
};
