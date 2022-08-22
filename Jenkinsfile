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

//         app = docker.build('activity', dockerFilePath)
        app = docker.build('my_hello')

        echo '### Docker build successful.'

    }
    stage('Test image') {

        app.inside {

            echo 'Tests passed'

        }

    }

        stage('Push image to aws ecr') {

          echo '### Started pushing the docker image..'

        /* You would need to first create aws ecr before you can push images to your account */

         docker.withRegistry('https://180522143609.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:madhavi') {



                app.push ('latest')

         echo '### Docker image pushed on aws ecr successfully.'



         }

    }

}
