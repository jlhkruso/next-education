"use client";
import { useState } from "react";
export default function Page() {
  const [state, setState] = useState({ a: { b: { c: "BREAKING" } } }) as any;
  return (
    <div>
      <div>{state.a.b.c}</div>
      <div>
        <button onClick={() => setState({})}>Break this</button>
      </div>
    </div>
  );
}
