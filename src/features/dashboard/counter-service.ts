export const saveCount = async (count: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("saved to server", count);
      resolve(true);
    }, 500);
  });
};
