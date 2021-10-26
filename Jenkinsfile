pipeline {
    agent any
    tools{
        nodejs "node"
    }

    stages {
        stage('test') {
            steps {
                echo "ran test stage"
            }
        }

        stage('docker image build/push') { 
            steps {
                sh 'npm install'
                script {
                    
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
                        def customImage = docker.build("nbpatilvb/botsapp")
                        customImage.push()
                    }
                }
            }
        }

        stage('deploy') {
            steps {
                script {
                    dockerImage = docker.image("nbpatilvb/botsapp")
                    dockerImage.run("-p 3000:3000 --rm --name botsapp")
                }
            }
        }
    }
}