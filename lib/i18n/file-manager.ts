// /lib/i18n/file-manager.ts

import { writeFileSync, readdirSync } from "fs";
import { join } from "path";

export interface TranslationFile {
  language: string;
  jsonContent: string;
  isActive: boolean;
}

/**
 * Writes translation JSON content to the appropriate language file
 */
export function writeTranslationFile(file: TranslationFile): void {
  try {
    const i18nDir = join(process.cwd(), "lib", "i18n");
    const filePath = join(i18nDir, `${file.language}.json`);

    // Validate JSON before writing
    const jsonContent = JSON.parse(file.jsonContent);

    // Write the file
    writeFileSync(filePath, JSON.stringify(jsonContent, null, 2), "utf8");

    console.log(`✅ Translation file updated: ${file.language}.json`);
  } catch (error) {
    console.error(
      `❌ Error writing translation file for ${file.language}:`,
      error
    );
    throw new Error(`Failed to write translation file: ${error}`);
  }
}

/**
 * Validates JSON content
 */
export function validateJSON(jsonString: string): boolean {
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets all available translation files
 */
export function getAvailableTranslationFiles(): string[] {
  try {
    const i18nDir = join(process.cwd(), "lib", "i18n");

    return readdirSync(i18nDir)
      .filter((file: string) => file.endsWith(".json"))
      .map((file: string) => file.replace(".json", ""));
  } catch {
    return [];
  }
}
