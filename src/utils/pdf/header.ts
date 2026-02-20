import type { MeuPortifolioType } from "@/data/meu-portifolio";
import { PDFFont, PDFPage } from "pdf-lib";
import type { PdfThemeColors } from "./styles/select-colors-by-theme";
import { drawGradientText } from "./styles";

type GenerateHeaderPartParamsType = {
  page: PDFPage;
  font: PDFFont;
  fontBold: PDFFont;
  y: number;
  meuPortifolio: MeuPortifolioType;
  themeColors: PdfThemeColors;
};

export async function generateHeaderPart(params: GenerateHeaderPartParamsType) {
  const { page, font, fontBold, meuPortifolio, themeColors } = params;
  let { y } = params;

  await drawGradientText({
    page,
    x: 150,
    y,
    size: 24,
    font: fontBold,
    fromColor: themeColors.primary,
    toColor: themeColors.secondary,
    text: meuPortifolio.profile.name,
  });
  y -= 30;

  page.drawText(meuPortifolio.profile.role, {
    x: 150,
    y,
    size: 14,
    font,
    color: themeColors.text,
  });
  y -= 50;

  page.drawText(meuPortifolio.profile.headline, {
    x: 50,
    y,
    size: 12,
    font,
    maxWidth: 510,
    lineHeight: 15,
    color: themeColors.text,
    opacity: 0.7,
  });

  // separa a próxima sessão
  y -= 50;

  return { y };
}
