"use client";
import { useMemo, useState } from "react";

export default function DashboardPage() {
  const [count, setCount] = useState(0);
  console.log("DashboardPage page rendered");
  const random = useMemo(() => Math.random(), [count]);
  console.log("🚀 ~ DashboardPage ~ random:", random);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
    </div>
  );
}
