"use client";

import { holostaff } from "@holostaff/sdk";
import { useEffect } from "react";

export const HolostaffProvider = () => {
  useEffect(() => {
    holostaff.init({
      tenantId: "workspace_urZYaISXD2Pcx2jCgTE57vyYCQu2",
      sourceId: "ks_mrpjsskb_z9cqrl",
    });
    // Run once on client mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
