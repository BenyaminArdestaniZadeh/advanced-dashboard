import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  console.log("Test Layout Render");

  return (
    <div>
      layout
      {children}
    </div>
  );
};

export default layout;
