   node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

/*     stage('Build image') {
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
		
            } 
                echo "Trying to Push Docker Build to DockerHub"
	   
    }
	  
  }   */

stage('Docker Build and Tag') {
           steps {
              
                sh 'docker build -t myrepo-agora:latest .' 
                sh 'docker tag myrepo-agora madhavikdm/myrepo-agora:latest'
                //sh 'docker tag samplewebapp nikhilnidhi/samplewebapp:$BUILD_NUMBER'
               
          }
        }
     
  stage('Publish image to Docker Hub') {
          
            steps {
        withDockerRegistry([ credentialsId: "docker", url: "" ]) {
          sh  'docker push madhavikdm/myrepo-agora:latest'
        //  sh  'docker push madhavikdm/myrepo-agora:$BUILD_NUMBER' 
        }
                  
          }
        }
     
      stage('Run Docker container on Jenkins Agent') {
             
            steps 
			{
                sh "docker run -d -p 5000:3000 madhavikdm/myrepo-agora"
 
            }
        }
 stage('Run Docker container on remote hosts') {
             
            steps {
                sh "docker -H http://127.0.0.1 run -d -p 5000:3000 madhavikdm/myrepo-agora"
 
            }
        }
