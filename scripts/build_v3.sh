#!/bin/sh

yarn const_gen_v3
yarn abi_gen_v3
yarn lint
yarn run tsc
