import type { MeuPortifolioType } from "@/data/meu-portifolio";
import { PDFFont, PDFPage } from "pdf-lib";
import type { PdfThemeColors } from "./styles/select-colors-by-theme";

type GenerateServicesPartParamsType = {
  page: PDFPage;
  font: PDFFont;
  fontBold: PDFFont;
  y: number;
  meuPortifolio: MeuPortifolioType;
  themeColors: PdfThemeColors;
};

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value);
}

export async function generateServicesPart(
  params: GenerateServicesPartParamsType,
) {
  const { page, font, fontBold, meuPortifolio, themeColors } = params;
  let { y } = params;

  page.drawText(meuPortifolio.services_section.title, {
    x: 50,
    y,
    size: 18,
    font: fontBold,
    color: themeColors.text,
  });
  y -= 20;

  page.drawText(meuPortifolio.services_section.description, {
    x: 50,
    y,
    size: 12,
    font,
    maxWidth: 510,
    lineHeight: 15,
    color: themeColors.text,
    opacity: 0.7,
  });
  y -= 45;

  meuPortifolio.services_section.services.forEach((service) => {
    page.drawText(service.title, {
      x: 50,
      y,
      size: 14,
      font: fontBold,
      color: themeColors.text,
    });
    y -= 18;

    page.drawText(service.description, {
      x: 50,
      y,
      size: 12,
      font,
      maxWidth: 510,
      lineHeight: 15,
      color: themeColors.text,
      opacity: 0.7,
    });
    y -= 18;

    page.drawText(
      `Preço inicial: ${formatPrice(service.starting_price, service.currency)}`,
      {
        x: 50,
        y,
        size: 12,
        font,
        color: themeColors.primary,
        opacity: 0.7,
      },
    );
    y -= 25;
  });

  // separa a próxima sessão
  y -= 10;

  return { y };
}
