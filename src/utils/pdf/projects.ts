import type { MeuPortifolioType } from "@/data/meu-portifolio";
import { PDFFont, PDFPage } from "pdf-lib";
import type { PdfThemeColors } from "./styles/select-colors-by-theme";
import { drawUnderlinedText } from "./styles";

type GenerateProjectPartParamsType = {
  page: PDFPage;
  font: PDFFont;
  fontBold: PDFFont;
  y: number;
  meuPortifolio: MeuPortifolioType;
  themeColors: PdfThemeColors;
};

export async function generateProjectPart(
  params: GenerateProjectPartParamsType,
) {
  const { page, font, fontBold, meuPortifolio, themeColors } = params;
  let { y } = params;

  page.drawText(meuPortifolio.projects_section.title, {
    x: 50,
    y,
    size: 18,
    font: fontBold,
    color: themeColors.text,
  });
  y -= 20;

  page.drawText(meuPortifolio.projects_section.description, {
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

  meuPortifolio.projects_section.projects.forEach((project) => {
    page.drawText(project.title, {
      x: 50,
      y,
      size: 14,
      font: fontBold,
      color: themeColors.text,
    });
    y -= 18;

    page.drawText(project.description, {
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

    page.drawText(`Tecnologias: ${project.technologies.join(", ")}`, {
      x: 50,
      y,
      size: 12,
      font,
      maxWidth: 510,
      lineHeight: 15,
      color: themeColors.primary,
    });
    y -= 18;

    drawUnderlinedText({
      page,
      text: `Deploy: ${project.links.deploy}`,
      x: 50,
      y,
      size: 11,
      font: fontBold,
      color: themeColors.secondary,
    });
    y -= 18;

    drawUnderlinedText({
      page,
      text: `Repositório: ${project.links.repository}`,
      x: 50,
      y,
      size: 11,
      font: fontBold,
      color: themeColors.secondary,
    });
    y -= 25;
  });

  // separa a próxima sessão
  y -= 10;

  return { y };
}
