#!/bin/bash

for PACKAGE in $(ls)
do
    echo "=>> $PACKAGE"
    cd $PACKAGE
    if [ -ne './node_modules' ]
    then
        npm i
        npm run docs
    fi
    cd ..
    echo "docs generated for : $PACKAGE"
done