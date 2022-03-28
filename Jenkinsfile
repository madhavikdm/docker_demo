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
       
   app = docker.build('jenkinspipeline')  .

        echo '### Docker build successful.'

     }
  
   stage('Test image') {        

        app.inside {
           echo 'Tests passed'    

        }

    }

 }
