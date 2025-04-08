#!/usr/bin/env node
const { spawn } = require("child_process");

let cleaning = false;

// Função que executa a limpeza dos containers
function cleanup() {
  if (cleaning) return;
  cleaning = true;
  console.log("\nEncerrando os containers...");

  // Use "services:down" (ou "services:stop", se preferir) para encerrar os containers
  const cleanupProcess = spawn("npm", ["run", "services:down"], {
    shell: true,
    stdio: "inherit",
  });

  cleanupProcess.on("close", () => {
    process.exit();
  });
}

// Comando que une toda a sequência original em uma única linha
const command =
  "npm run services:up && npm run services:wait:database && npm run migrations:up && next dev";

// Inicia o processo de desenvolvimento
const devProcess = spawn(command, { shell: true, stdio: "inherit" });

// Captura sinais de encerramento e chama o cleanup
process.on("SIGINT", () => {
  cleanup();
});
process.on("SIGTERM", () => {
  cleanup();
});

// Caso o processo dev termine por qualquer motivo, também dispara o cleanup
devProcess.on("close", (code) => {
  console.log(`Processo dev encerrado com código ${code}`);
  cleanup();
});
