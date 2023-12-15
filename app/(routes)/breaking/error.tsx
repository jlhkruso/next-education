"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: Global.IError) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error from /breaking folder", error);
  }, [error]);

  return (
    <div>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
