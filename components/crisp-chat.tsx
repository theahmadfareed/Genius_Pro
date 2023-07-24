"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("efae32a9-40f6-41d8-af64-ef61e8142dfb");
  }, []);

  return null;
};
