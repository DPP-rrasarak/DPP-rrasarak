#!/bin/bash

# Check if no arguments were passed
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through each argument provided
for arg in "$@"; do
    mkdir "ex$arg"
done
