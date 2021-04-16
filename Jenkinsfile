node('master') {
    
    stage("Git checkout"){
    
git credentialsId: '575339dd-681c-4bff-9539-b9add2f0d46f', url: 'https://github.com/ujale/Jenkinssetup.git'

    }
    
    stage("npm install"){
        
    bat label: 'Install npm package', script: 'npm install' 
    
    }
    
    stage("Run test"){
        
        bat label: 'Run test', script: 'npx cypress run' 
    }
    
    stage("Send Email"){
            def mailRecipients = "uniqueudeme@gmail.com"
            def jobName = currentBuild.fullDisplayName
            emailext body: '''${SCRIPT, template="groovy-html.template"}''',
            mimeType: 'text/html',
            subject: "[Jenkins] ${jobName}",
            to: "${mailRecipients}",
            replyTo: "${mailRecipients}",
            recipientProviders: [[$class: 'CulpritsRecipientProvider']]
        }
    }
   