import { useEffect, useState } from "react";

export function useNavitems() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {
    open,
    toggle,
    scrolled,
  };
}
