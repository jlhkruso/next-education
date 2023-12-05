export const fetchData = async (path: string) => {
  if (!path) return { error: { message: "path is missing" } };
  try {
    const res = await fetch(path);
    return res.json();
  } catch (error: any) {
    return { error: { message: error.message } };
  }
};
