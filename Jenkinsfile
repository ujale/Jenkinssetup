node('master') {
    
    stage("Git checkout"){
    
git credentialsId: '431d8653-9188-4c8b-ac55-2ac985679f6d', url: 'https://Ujale@bitbucket.org/Ujale/jenkinssetup.git'

    }
    
    stage("npm install"){
        
    bat label: 'Install npm package', script: 'npm install' 
    
    }
    
    stage("Run test"){
        
        bat label: 'Run test', script: 'npx cypress run' 
    }
    post {
 success {
 mail bcc: '', body: 'Hello', cc: 'grace.ohanwusi@venturegardengroup.com', from: '', replyTo: '', subject: 'Test', to: 'udeme.jalekun@venturegardengroup.com'
 }
}
}   