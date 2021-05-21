#!/bin/sh

find -type f -name messages.json -exec sh -c 'sed -i s/MetaMask/BetterMask/g {}' \;
