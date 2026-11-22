## (Docker Containerization & Kubernetes Deployment)

```markdown
# Cloud-Native Application Containerization & Kubernetes Deployment

## 📌 Project Overview
This project demonstrates the end-to-end containerization and cloud-native deployment lifecycle of a Node.js web application. 

The application is containerized using **Docker**, pushed to **Docker Hub**, and managed on a **Kubernetes** cluster using declarative manifests (`Deployment` and `Service`). It showcases self-healing, desired-state management, horizontal scaling across multiple pod replicas, and real-time log streaming.

---

## 🏗️ Deployment Architecture

```text
[ Source Code ] ──► [ Dockerfile ] ──► [ Docker Hub Registry ] ──► [ Kubernetes Cluster ]
  (app.js)            (docker build)      (docker push)            (Deployment & Service)
                                                                             │
                                                           ┌─────────────────┴─────────────────┐
                                                           ▼                                   ▼
                                                   [ Pod Replica 1 ]                   [ Pod Replica 2 ]
🛠️ Tech Stack & Tools
Application Stack: Node.js (Express framework)

Containerization: Docker Desktop / Docker Engine

Container Registry: Docker Hub

Orchestration: Kubernetes (Minikube / Kind / Docker Desktop K8s)

CLI Utilities: docker, kubectl

📁 Repository Structure
Plaintext
devops-k8s-project/
├── app.js                   # Express web application server
├── package.json             # Application dependencies & scripts
├── Dockerfile               # Container build configuration
├── .dockerignore            # Excluded build paths
├── k8s/
│   ├── deployment.yaml      # Declarative K8s deployment (2 Replicas)
│   └── service.yaml         # K8s NodePort service definition (Port 30080)
└── README.md                # Project documentation
🚀 Execution Guide
1. Build and Push Docker Image
Bash
# 1. Build the Docker image
docker build -t <your-dockerhub-username>/k8s-demo-app:v1.0 .

# 2. Test locally
docker run -d -p 3000:3000 --name local-test <your-dockerhub-username>/k8s-demo-app:v1.0

# 3. Push to Docker Hub
docker login
docker push <your-dockerhub-username>/k8s-demo-app:v1.0
2. Deploy to Kubernetes
Bash
# Apply declarative manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
3. Verify Active Resources & Streaming Logs
Bash
# Check Pod status and replica count
kubectl get pods -o wide

# Check Service mapping
kubectl get svc k8s-demo-service

# Stream live container logs
kubectl logs -f -l app=k8s-demo-app
🌐 Application Access
Localhost access: Open http://localhost:30080 in your browser.

Minikube access: Run minikube service k8s-demo-service --url to obtain the external routing URL.

Author: Sarvesh Pandey (PRN: 202301100037)
