node {

    def app

//     def dockerFilePath = './MICROSERVICE'



    stage('Clone repository') {

        /* Cloning the Repository to our Workspace */

        echo '### Started cloning the repository..'

        checkout scm

        echo '### Repository cloned successfully'

    }

    stage('Build image') {

        /* This builds the actual image */

        echo '### Started Building the docker image..'

//         app = docker.build('account-transaction', dockerFilePath)
app = docker.build('docker_demo')
        echo '### Docker build successful.'

    }



    stage('Test image') {

        app.inside {

            echo 'Tests passed'

        }

    }



//          stage('Push image to aws ecr') {

//           echo '### Started pushing the docker image..'

//         /* You would need to first create aws ecr before you can push images to your account */

//           docker.withRegistry('https://180522143609.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:madhavi') {



//                 app.push ()

//          echo '### Docker image pushed on aws ecr successfully.'



//           }

//      }


      stage('push image on docker hub') {

          def registry = 'madhavikadam/rigght'

          def test = ''

          echo '### Started pushing the docker image..'

        /* You would need to first register with DockerHub before you can push images to your account */

          test = docker.build registry, dockerFilePath

        docker.withRegistry('', 'docker') {

                  test.push("${env.BUILD_ID}")

//    test.push('latest')

         }



         echo '### Docker image pushed on docker hub  successfully.'

    }

}
