#!/usr/bin/env bash
mysql -u root -e "create database blackpearltwodev;"
mysql -u root -e "create user 'blackpearltwo'@'localhost';"
mysql -u root -e "GRANT ALL PRIVILEGES ON blackpearltwodev.* TO 'blackpearltwo'@'localhost';"
