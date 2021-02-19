import React from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();
  if (typeof window !== undefined) {
    router.push("/movies");
  }
}
