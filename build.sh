#!/bin/bash

# Build application
npm run build

# Remove old docs
rm -rf docs

# Change content location and file name
cd dist
mv bonganibg/* .
rm -rf bonganibg
cp ../404.html .

# Change folder name to docs
cd ..
mv dist docs
