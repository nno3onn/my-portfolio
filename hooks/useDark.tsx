import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useDark = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "dark";
};

export default useDark;
