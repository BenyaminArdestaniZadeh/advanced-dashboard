"use client";

import { CounterBox, saveCount, StatsBox } from "@/src/features/dashboard";
import { useEffect, useState } from "react";

// The `lastUpdate` state is defined in this parent component
// to improve accessibility for other components and maintain cleaner architecture.
//
// Although it could have been defined at a lower level,
// doing so would have made the code more cluttered and harder to manage.
//
// With this approach, the architecture remains well-structured,
// and future changes can be handled in a single place (this component)
// instead of being scattered across multiple components.

export default function DashboardPage() {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [count, setCount] = useState<number>(0);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  /**
   * services
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const onIncrement = () => {
    setCount((prev) => prev + 1);
    setLastUpdate(new Date().toISOString());
  };

  const onDecrement = () => {
    setCount((prev) => prev - 1);
    setLastUpdate(new Date().toISOString());
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <h1>Dashboard Page</h1>
      <StatsBox count={count} />
      <CounterBox
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        lastUpdate={lastUpdate}
      />
    </div>
  );
}
