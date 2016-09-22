#!/bin/bash

echo "Provisioning america api virtual machine..."

set -e # Exit script immediately on first error
set -x # Print commands and their arguments as they are executed
 
# Update package index
sudo apt-get update

# Install n to manage node versions
sudo npm install -g n

# Install global node modules that can be run from the command line
sudo npm install knex -g
sudo npm install nodemon -g
sudo npm install babel-cli -g
sudo npm install mocha -g

# Set database credentials (replace these with your own )
user=$VAGRANT_SSH_USER 
password=$VAGRANT_SSH_PASSWORD 

# Create databases
mysql -u$user -p$password -e "CREATE DATABASE IF NOT EXISTS api_america"
mysql -u$user -p$password -e "CREATE DATABASE IF NOT EXISTS api_america_test"

cd /var/www/public

# Run db migrations
knex migrate:latest --env development
knex migrate:latest --env test

# Run db seeds
knex seed:run --env development
knex seed:run --env test

echo "Provisioning complete"