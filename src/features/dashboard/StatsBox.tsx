type Props = {
  count: number;
};

export const StatsBox = ({ count }: Props) => {
  return <p style={{ fontSize: "16px", fontWeight: "700" }}>{count}</p>;
};
