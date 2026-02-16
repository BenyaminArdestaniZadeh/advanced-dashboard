type Props = {
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  lastUpdate: string | null;
};

export const CounterBox = ({ onIncrement, onDecrement, lastUpdate }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

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

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "16px" }}>
        <button style={{ padding: "8px 16px" }} onClick={onDecrement}>
          -
        </button>
        <button style={{ padding: "8px 16px" }} onClick={onIncrement}>
          +
        </button>
      </div>
      <p>last update: {lastUpdate ? lastUpdate : "-"}</p>
    </div>
  );
};
