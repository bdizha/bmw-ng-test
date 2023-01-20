#!/usr/bin/env bash
docker build -t auth0-angular-sample .
docker run --init -p 5000:5000 -p 3001:3001 -it auth0-angular-sample
