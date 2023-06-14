# procorp-project
`docker commands`
```bash
docker load --input /path_to_docker_image/procorp_docker.tar
docker-compose -f /root_project_path/docker-compose.yml build
docker run -p 8000:8000 --name react-app procorp_docker
```
Application will run on http://localhost:8000/
