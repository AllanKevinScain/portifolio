import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
