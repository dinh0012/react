#!/bin/bash
git pull
yarn build
if [ $? -eq 0 ]; then
    rm -rf prod
    cp -R build/ prod
    echo Built successful
else
    echo Built fail
fi

