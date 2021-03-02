#!/bin/bash
set -e

if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

echo "stop & remove old docker and starting new instance of [$PROJECT_NAME]"
(docker kill $PROJECT_NAME || :) && \
  (docker rm $PROJECT_NAME || :) && \
  docker run --name $PROJECT_NAME \
  -e POSTGRES_USER=$UNAME \
  -e POSTGRES_PASSWORD=$PWORD \
  -e PGPASSWORD=$PWORD \
  -p 5432:5432 \
  -d postgres

echo "wait for pg-server [$PROJECT_NAME] to start";
sleep 3;

echo "CREATE DATABASE $DBASE ENCODING 'UTF-8';" | docker exec -i $PROJECT_NAME psql -U $UNAME

echo "\l" | docker exec -i $PROJECT_NAME psql -U $UNAME
