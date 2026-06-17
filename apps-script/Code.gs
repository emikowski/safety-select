/**
 * GVS — Configurador FISP 2026 · Backend Google Apps Script
 * Grava cada envio do configurador numa planilha do Google Sheets.
 *
 * COMO INSTALAR (5 min):
 * 1. Crie uma planilha nova no Google Sheets (será o destino dos dados).
 * 2. No menu: Extensões → Apps Script. Apague o conteúdo e cole TODO este arquivo.
 * 3. Troque SHEET_ID abaixo pelo ID da sua planilha (está na URL da planilha,
 *    entre /d/ e /edit). Ou deixe vazio para usar a planilha ativa do projeto.
 * 4. Menu: Implantar → Nova implantação → tipo "App da Web".
 *      - Executar como: Eu
 *      - Quem tem acesso: Qualquer pessoa
 *    Copie a URL gerada (termina em /exec).
 * 5. Cole essa URL no configurador: abra o painel "Tweaks" → campo "URL Apps Script"
 *    (ou na constante APPS_SCRIPT_URL do HTML).
 * Pronto. Cada "Enviar para a GVS" vira uma linha na planilha.
 */

const SHEET_ID = "1EXiQ8RbrsFPZh8O9VGNV8GmL58__Iopvwy5qO8OWBpw";  // planilha de destino
const SHEET_NAME = "Configurações FISP 2026";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    // cabeçalho na primeira execução
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data/Hora", "Protocolo", "Idioma", "Nome", "Empresa", "Cargo",
        "Telefone", "E-mail", "Aceite LGPD", "Observações",
        "Itens (qtd x código - nome)", "Qtd total de itens"
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    const itens = (data.items || [])
      .map(it => `${it.qty}x ${it.code} - ${it.name} [${it.kind === "headtop" ? "Principal" : "Acessório"}]`)
      .join("\n");
    const totalQtd = (data.items || []).reduce((s, it) => s + (Number(it.qty) || 0), 0);

    sheet.appendRow([
      new Date(data.ts || Date.now()),
      data.ref || "", data.lang || "", data.name || "", data.company || "",
      data.role || "", data.phone || "", data.email || "",
      data.lgpd ? "Sim" : "Não", data.notes || "",
      itens || data.config_text || "", totalQtd
    ]);

    return json_({ ok: true, ref: data.ref });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: "GVS Configurador FISP 2026" });
}

function getSheet_() {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
