#!/bin/bash
# ÉLORA – Luxury Arabian Perfumes E-Commerce
# Automatic Environment & Dev Server Launcher

# Add local node paths if present
export PATH="/tmp/node-bin/bin:$HOME/.local/bin:$PATH"

if ! command -v node &> /dev/null; then
    echo "Node.js not detected in default PATH. Checking /tmp/node-bin/bin..."
    if [ -f "/tmp/node-bin/bin/node" ]; then
        export PATH="/tmp/node-bin/bin:$PATH"
    fi
fi

echo "=========================================================="
echo "  ÉLORA – Arabian Perfumes (The Essence of Royal Elegance)"
echo "  Starting High-Performance Luxury Ecommerce Server..."
echo "=========================================================="

npm run dev -- --host 127.0.0.1 --port 5173
