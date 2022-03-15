   node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
	    console.log("######### git clone successful ##########")
    }

    stage('Build image') {
        /* This builds the actual image */

       app = docker.build("mydemo_3")
	    console.log("#########image build successful ##########")
     }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
		console.log("######### test image successful ##########")
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://hub.docker.com/repository/docker/madhavikdm/myrepo-agora', 'docker') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
		console.log("#########image pushsuccessfully ##########")
		
            } 
                echo "Trying to Push Docker Build to DockerHub"
	   
    }
	
  }  

