 node {      

    def app
   def aws_account = "https://180522143609.dkr.ecr.us-east-1.amazonaws.com"
def ecr_credentials = "madhavi"
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
//      docker.withRegistry('http://180522143609.dkr.ecr.us-east-1.amazonaws.com/public.ecr.aws/s8h2g7r9/jenkinspipeline','awscredentials') {
//             app.push("${env.BUILD_NUMBER}")  .
   


    docker.withRegistry(aws_account + "${/s8h2g7r9/jenkinspipeline}", "ecr:us-east-1:${ecr_credentials}") {
        docker.image(app).push()
//            app.push()   
       }

        echo '### Docker image pushed successfully.'  

    }  

 }
