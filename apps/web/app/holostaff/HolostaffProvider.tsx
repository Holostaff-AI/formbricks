"use client";

import { useEffect } from "react";
import { holostaff } from "@holostaff/sdk";

export const HolostaffProvider = () => {
  useEffect(() => {
    holostaff.init({
      tenantId: "workspace_urZYaISXD2Pcx2jCgTE57vyYCQu2",
      sourceId: "ks_mrpjsskb_z9cqrl",
    });
  }, []);

  return null;
};
