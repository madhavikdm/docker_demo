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

             app = docker.build ("mydemo_1")

        echo '### Docker build successful.'

     }



/*   stage('Test image') {        
        app.inside {
        echo "Tests passed"    
        }
    }  */



    stage('Push image') {

        echo '### Started pushing the docker image..'

        /*

            You would need to first register with DockerHub before you can push images to your account

        */
         docker.withRegistry('https://180522143609.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:madhavi') {
//        aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/s8h2g7r9

       
      
//        docker.image('mydemo_1').push('latest')
     docker.withRegistry('https://hub.docker.com/repository/docker/madhavikadam/myrepo-agora', 'madhavikadam') {

             app.push("${env.BUILD_NUMBER}")

             app.push('latest')

        }

        echo '### Docker image pushed successfully.'  

    }

}
