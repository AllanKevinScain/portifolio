import { ThemeProvider } from "./theme";
import { ClerkProvider } from "@clerk/clerk-react";
interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) return;
  return (
    <ThemeProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>{children}</ClerkProvider>
    </ThemeProvider>
  );
}
