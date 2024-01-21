# Deploy tic tac toe to swarm

- The jenkins file and swarm-service.sh is used for deploiment from jenkins
- .github/workflows is used for deploiment from githubaction

## Usage github action
- fork to your own repository
- in settings/secrets and variables/action, change the secrets and variables value
    - secrets:
        * DOCKER_PASSWORD dockerhub password
        * DOCKER_USERNAME dockerhub username
        * HOST ssh host
        * KEY ssh private key
        * KEY_PASSWORD ssh password
        * PASSWORD host user password (if not using key)
        * PORT
        * USERNAME user of the host
    - variables
        * SERVICE_NAME service swarm name
        * TAG_IMAGE image tag
