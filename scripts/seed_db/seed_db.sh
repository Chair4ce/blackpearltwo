#!/usr/bin/env bash

 mysql -u root blackpearltwodev < $(dirname $0)/truncate_data.sql
 mysql -u root blackpearltwodev < $(dirname $0)/seed_data.sql
