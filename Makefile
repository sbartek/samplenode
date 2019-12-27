DOCKER_NAME = samplenode
DOCKERHUB_USERNAME = barteks
docker_tag = $(DOCKERHUB_USERNAME)/$(DOCKER_NAME) 

.PHONY: run_app 
run_app:
	node app.js

.PHONY: build_docker
build_docker:
	docker build -t $(docker_tag) .

.PHONY: run_docker
run_docker:
	docker run -d -p 3000:80 --name=simplenode $(docker_tag)

.PHONY: test_docker
test_docker:
	curl http://localhost:3000

.PHONY: push_docker
push_docker:
	docker push $(docker_tag)