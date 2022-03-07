#!/bin/sh

yarn run abi-gen --abis 'src/wyvern-v3/build/contracts/@(AuthenticatedProxy|WyvernExchange|WyvernRegistry|WyvernAtomicizer|WyvernStatic|StaticMarket).json' --output src/abi_gen_v3
