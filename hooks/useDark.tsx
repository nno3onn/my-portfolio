import { useTheme } from "next-themes";

const useDark = () => {
  const { theme } = useTheme();
  return theme === "dark";
};

export default useDark;
