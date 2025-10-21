import path from "path";
import fs from "fs";
import { logger } from "./logger.js";

const __dirname = import.meta.dirname;

const generateModule = () => {
  const moduleName = process.argv[2];

  if (!moduleName) {
    logger.error("Error: Module name is required!");
    return;
  }

  const modulePath = path.join(__dirname, "..", "src", "modules");

  const newModulePath = path.join(modulePath, moduleName);

  if (fs.existsSync(newModulePath)) {
    logger.error("Error: Module already exists!");
    return;
  }

  // module directory
  fs.mkdirSync(newModulePath);
  // component directory
  fs.mkdirSync(path.join(newModulePath, "components"));
  // enums
  fs.writeFileSync(path.join(newModulePath, "enums.ts"), "");
  // types
  fs.writeFileSync(path.join(newModulePath, "hooks.ts"), "");
  // services
  fs.writeFileSync(path.join(newModulePath, "services.ts"), "");
  // routes
  fs.writeFileSync(path.join(newModulePath, "types.ts"), "");
  // validations
  fs.writeFileSync(path.join(newModulePath, "validations.ts"), "");

  logger.success(`Module ${moduleName} created successfully!`);

  return newModulePath;
};

generateModule();
