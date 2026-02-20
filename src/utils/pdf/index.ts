import type { MeuPortifolioType } from "@/data/meu-portifolio";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { generateProjectPart } from "./projects";
import { generateServicesPart } from "./services";
import { generateDifferentialsPart } from "./differentials";
import { generateContactPart } from "./contact";
import { generateHeaderPart } from "./header";
import { generateAvatarPart } from "./avatar";
import { drawGradientBar } from "./styles";
import { selectPdfColorsByTheme } from "./styles/select-colors-by-theme";
import type { ThemeType } from "@/types";

type GeneratePortfolioPDFParamsType = {
  meuPortifolio: MeuPortifolioType;
  theme: ThemeType;
};

export async function generatePortfolioPDF(
  params: GeneratePortfolioPDFParamsType,
) {
  const { meuPortifolio, theme } = params;

  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([595, 842]);
  const { height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const themeColors = selectPdfColorsByTheme(theme);

  const y = height - 50;

  await drawGradientBar({
    page,
    x: 0,
    y: 0,
    fromColor: themeColors.bg,
    toColor: themeColors.bg,
  });

  // Avatar
  await generateAvatarPart({
    page,
    pdfDoc,
    y,
  });

  // Cabeçalho
  const { y: yHeader } = await generateHeaderPart({
    page,
    font,
    fontBold,
    y,
    meuPortifolio,
    themeColors,
  });

  // projetos
  const { y: yProjects } = await generateProjectPart({
    page,
    font,
    fontBold,
    y: yHeader,
    meuPortifolio,
    themeColors,
  });

  // serviços
  const { y: yServices } = await generateServicesPart({
    page,
    font,
    fontBold,
    y: yProjects,
    meuPortifolio,
    themeColors,
  });

  // diferenciais
  const { y: yDifferentials } = await generateDifferentialsPart({
    page,
    font,
    fontBold,
    y: yServices,
    meuPortifolio,
    themeColors,
  });

  // contato
  await generateContactPart({
    page,
    font,
    fontBold,
    y: yDifferentials,
    meuPortifolio,
    themeColors,
  });

  // salvar
  const pdfBytes = (await pdfDoc.save()) as BlobPart;

  const blob = new Blob([pdfBytes], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "portfolio.pdf";
  a.click();

  URL.revokeObjectURL(url);
}
