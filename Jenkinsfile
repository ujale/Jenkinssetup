pipeline {
//  agent any
// node('master') {
// stage("Git checkout"){
// git credentialsId: '431d8653-9188-4c8b-ac55-2ac985679f6d', url: 'https://Ujale@bitbucket.org/Ujale/jenkinssetup.git'
//  }
// }
// stage("cypress install"){
// bat label: 'Install cypress', script: 'npm install cypress --save-dev'
// }
// stage("Run test"){
// bat label: 'Run test', script: 'npm run chrome'
// bat label: 'Run test', script: 'npm run firefox'
// }
 post {
 success {
 mail bcc: '', body: 'Hello', cc: 'grace.ohanwusi@venturegardengroup.com', from: '', replyTo: '', subject: 'Test', to: 'udeme.jalekun@venturegardengroup.com'
 }
}
}