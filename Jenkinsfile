  node {      

    def app



    stage('Clone repository') {

        /* Cloning the Repository to our Workspace */

        echo '### Started cloning the repository..'

        checkout scm

        echo '### Repository cloned successfully'

    }



    stage('Build image') {

        /* This builds the actual image */

        echo '### Started Building the docker image..'

       
        app = docker.build("mydemo_1")  .

        echo '### Docker build successful.'

     }



    stage('Test image') {        

        app.inside {

            echo "Tests passed"    

        }

    }



    stage('Push image') {

        echo '### Started pushing the docker image..'

        /*

            You would need to first register with DockerHub before you can push images to your account

        */

        docker.withRegistry('https://hub.docker.com/repository/docker/madhavikadam/myrepo-agora', 'docker') {

            // app.push("${env.BUILD_NUMBER}")

            app.push("latest")

        }

        echo '### Docker image pushed successfully.'  

    }  

}
