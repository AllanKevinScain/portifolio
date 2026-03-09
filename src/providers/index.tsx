import { ThemeProvider } from "./theme";
interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}
