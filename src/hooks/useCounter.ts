"use client";

import { useEffect, useState } from "react";
import { saveCount } from "../features/dashboard";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  const increment = () => {
    setCount((prev) => prev + 1);
    setLastUpdate(new Date().toISOString());
  };

  const decrement = () => {
    setCount((prev) => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });

    setLastUpdate(new Date().toISOString());
  };

  useEffect(() => {
    if (count === 0) return;
    const run = async () => {
      setLoading(true);
      await saveCount(count);
      setLoading(false);
    };
    run();
  }, [count]);

  return { count, increment, decrement, loading, lastUpdate };
};
