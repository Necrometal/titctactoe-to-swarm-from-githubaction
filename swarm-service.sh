#!/bin/sh

service_image="necrometal44/tictactoe-michel:latest"
service_name="tictac"
replicas_number=3

service_info=$(docker service ls --quiet --filter "name=$service_name")

# Check if the variable has a value
if [ -n "$service_info" ]; then
    docker service update --image $service_image $service_name
else
    docker service create --name $service_name --replicas $replicas_number -p 80:80 $service_image
fi