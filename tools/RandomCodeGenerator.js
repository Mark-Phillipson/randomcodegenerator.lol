import Css from "./utils/css";
import JavaScript from "./utils/javascript";
import CSharp from "./utils/csharp";
import Powershell from "./utils/powershell";

export const Languages = {
  js: "JavaScript",
  css: "CSS",
  csharp: "C#",
  powershell: "Powershell"
};

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomCode(language, lines) {
  let firstLine = "";
  let fillerLineQty = "";
  let fillerLines = [];
  let lastLine = "";

  switch (language) {
    case "css":
      firstLine = `.${Css.getRandomClassName()} {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(
          `    ${Css.getRandomProp()}: ${getRandomInt(0, 500)}${Css.getRandomUnit()};`
        );
      }

      lastLine = "\n\r}";
      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "js":
      firstLine = `function ${JavaScript.getRandomFunctionName()}() {\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "csharp":
      firstLine = `${CSharp.getRandomMethodName()}() \n\r{\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for(let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(` ${CSharp.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "powershell":
      firstLine = `function ${Powershell.getRandomFunctionName()} { \n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for(let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`${Powershell.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    default:
      return "lol";
  }
}
