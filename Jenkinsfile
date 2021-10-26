pipeline {
    agent any
    tools{
        nodejs "node"
    }

    stages {
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
        stage('docker image build/push') { 
            steps {
                sh 'npm install'
                node {
                    checkout scm

                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
                        def customImage = docker.build("nbpatilvb/botsApp")
                        customImage.push()
                    }
                }
            }
        }
    }
}