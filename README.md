# eks-cdk-demo-app
a small POC application that I built running on EKS, utilizing istio service mesh, KrakenD Api Gateway, ArgoCD, Github actions, and AWS CDK


## Application 

WIP. For the first iteration of this project, there won't be a functioning application. there will be three backend services (tasks, goals, auth), which will be requested by the frontend to confirm if they are healthy or not. Once that piece is completed, I'll add a Database portion, this is going to be running postgresql on kubernetes. 

## Background tasks ( workers )

I'm going to attempt to integrate a background task that maybe can be run by a cron in kubernetes, I've never used them before so i'm interested to see what the use case for that could be 

