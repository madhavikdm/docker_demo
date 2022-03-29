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
   stage('Push image') {

        echo '### Started pushing the docker image..'
     docker.withRegistry('https://us-east-1.console.aws.amazon.com/ecr/repositories?region=us-east-1','ecr:us-east-1:awscredentials') {
//             app.push("${env.BUILD_NUMBER}")  .
           app.push()   
       }

        echo '### Docker image pushed successfully.'  

    }  

 }
