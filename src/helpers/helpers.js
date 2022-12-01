import { fileURLToPath } from "url";
import { dirname, join } from "path";

/**
 * Формирует путь из данных о пути файла источника и массива дополнительных параметров пути
 * @param {string} url - Путь к файлу источнику
 * @param {string[] | undefined} paths - Массив
 * @returns {string}
 */
export const getPath = (url, paths) => {
  if (!url) throw new Error('Get Path: укажите значение url (тип string)');

  const currFilePath = fileURLToPath(url);
  const currDirPath = dirname(currFilePath);

  return join(currDirPath, ...(paths ? paths : ''));
}
