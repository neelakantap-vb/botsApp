pipeline {
    agent any
    tools{
        nodejs "node"
    }

    stages {
        stage('test') {
            steps {
                echo "ran test stage"
                exit 0
            }
        }
        stage('docker image build/push') { 
            steps {
                sh 'npm install'
                script {
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