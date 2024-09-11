#!/bin/bash

echo "$(pwd)"
echo "$(ls)"
mv ./simple-be-api/docs ./simple-be-api/wrapper/be-docs
mv ./simple-fe-webapp/docs ./simple-be-api/wrapper/fe-docs 