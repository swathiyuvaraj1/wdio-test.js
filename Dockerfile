# The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions
# node will serve as the base image
FROM node:18

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD 
# instructions that follow it in the Dockerfile.
WORKDIR /app

# Copying all the source code into the folder
COPY . .

# Installing all the dependecies present in the package.json file
RUN npm i --force

# Tells Docker that your container's service can be connected to on port 5000
EXPOSE 5000

# The main purpose of a CMD is to provide default commands to an executing container
CMD npm run ${SUITE_NAME}