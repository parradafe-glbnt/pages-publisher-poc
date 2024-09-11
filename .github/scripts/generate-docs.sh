#!/bin/bash

for PACKAGE in $(ls)
do
    echo "=>> $PACKAGE"
    cd $PACKAGE
    if [ -e './node_modules' ]
    then
        npm run docs
    fi
    cd ..
    echo "docs generated for : $PACKAGE"
done