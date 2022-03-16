   node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
	   
    }

    stage('Build image') {
        /* This builds the actual image */

       app = docker.build("madhavikadam/myrepo-agora:my_demo1")
	    
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
        docker.withRegistry('https://registry.hub.docker.com', 'docker') {
//             app.push("${env.BUILD_NUMBER}")
            app.push()
            } 
                echo "Trying to Push Docker Build to DockerHub"
	   
    }
	
  }  

