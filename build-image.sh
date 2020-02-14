#!/usr/bin/env bash

VERSION=develop
IMAGE=seria1coder/fabric-starter-rest-serial-coder-extended
# docker build --no-cache -t ${IMAGE}:${VERSION} .
docker build -t ${IMAGE}:${VERSION} .
docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest
