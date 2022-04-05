FROM node:slim

COPY . /work
WORKDIR /work
RUN apt-get update -y && \
    apt-get -y install libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 && \
    yarn install