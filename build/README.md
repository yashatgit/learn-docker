https://docs.docker.com/build/building/exporters/

# 1. Export entire contents of container to a tar file

```bash
docker build -f Dockerfile -t buildx-cp .

# create a container without running it
docker create --name tmp buildx-cp

# copy a file from a container to filesystem
docker export tmp > myimage.tar

# remove the created container
docker rm tmp
```

# 2. Export a single file from the container to filesystem

```bash
docker build -f Dockerfile -t buildx-cp .

# create a container without running it
docker create --name tmp buildx-cp

# copy a file from a container to filesystem
docker cp tmp:/home/message.txt .

# remove the created container
docker rm tmp
```

# 3. Export files from multi-staged builds

```bash
docker build -f Dockerfile_output --target EXPORT --output type=local,dest=out .
```
