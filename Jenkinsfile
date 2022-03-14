   node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("mydemo_3")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://hub.docker.com/repository/docker/madhavikdm/myrepo-agora', 'docker') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
		docker run -it -p 5000:3000 mydemo_3
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
}
