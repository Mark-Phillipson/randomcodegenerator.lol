import Css from "./utils/css";
import JavaScript from "./utils/javascript";
import Python from "./utils/python";

export const Languages = {
  js: "JavaScript",
  css: "CSS",
  python: "Python",
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
    case "python":
      firstLine = `def ${Python.getRandomFunctionName()}():\n\r`;
      
      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];
      
      for (let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }
      
      lastLine = "\n\r}";
      
      return firstLine + fillerLines.join("\n\r") + lastLine;
    default:
      return "lol";
  }
}
