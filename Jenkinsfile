pipeline {
    agent any
    stages {
        stage("build") {
            agent {
                label 'dindssh'
            }
            steps {
                echo 'building image ...'
                sh 'docker build -t necrometal44/tictactoe-michel:latest .'
            }
        }

        stage("push") {
            agent {
                label 'dindssh'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    echo 'docker login ...'
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    echo 'docker push ...'
                    sh 'docker push necrometal44/tictactoe-michel:latest'
                }
            }
        }
        
        stage("deploy") {
            agent {
                label 'dindssh'
            }
            steps {
                echo 'deploy service on swarm ...'
                sh 'chmod +x ./swarm-service.sh'
                sh './swarm-service.sh'
            }
        }
    }
}
