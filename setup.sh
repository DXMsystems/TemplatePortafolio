#!/bin/bash
set -e

# ──────────────────────────────────────────
#  Setup script — TemplatePortafolio
# ──────────────────────────────────────────

echo "==> Activando Node 18 via nvm..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
nvm install 18 --no-progress
nvm use 18

echo ""
echo "==> Instalando dependencias del backend..."
cd back-end && npm install
cd ..

echo ""
echo "==> Instalando dependencias del frontend (aplica parches automáticamente)..."
cd my-app && npm install
cd ..

echo ""
echo "==> Verificando archivos requeridos..."

MISSING=0

if [ ! -f "back-end/.env" ]; then
  echo "  [FALTA] back-end/.env  →  copia back-end/.env.example y rellena TOKEN y CHAT_ID"
  MISSING=1
fi

for FILE in hacker.mp4 logo.png minilogo.png info-pic.jpg; do
  if [ ! -f "my-app/src/Pages/materials/$FILE" ]; then
    echo "  [FALTA] my-app/src/Pages/materials/$FILE"
    MISSING=1
  fi
done

if [ $MISSING -eq 0 ]; then
  echo "  Todos los archivos presentes."
fi

echo ""
echo "────────────────────────────────────────"
echo " Setup completo."
echo ""
echo " Para correr en modo DESARROLLO:"
echo "   Terminal 1 → cd back-end && node index.js"
echo "   Terminal 2 → cd my-app   && npm start"
echo ""
echo " Para correr en modo PRODUCCIÓN (puerto 8000):"
echo "   cd my-app && npm run build && cp -r build ../back-end/build"
echo "   cd ../back-end && node index.js"
echo "────────────────────────────────────────"
