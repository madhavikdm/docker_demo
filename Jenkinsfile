 pipeline{

	

	environment {
		DOCKERHUB_CREDENTIALS=credentials('Docker_credentailas')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/madhavikdm/docker_demo.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t  madhavikdm/myrepo-agora:new_image .'
			}
		}


		stage('Push') {

			steps {
				sh 'docker push madhavikdm/myrepo-agora:new_image'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
