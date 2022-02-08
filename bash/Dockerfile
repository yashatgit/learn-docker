FROM alpine

# https://docs.docker.com/engine/reference/builder/#workdir
WORKDIR /home

# https://docs.docker.com/engine/reference/builder/#workdir
ADD ./isPrime.sh .

# https://docs.docker.com/engine/reference/builder/#workdir
RUN chmod +x ./isPrime.sh

# https://docs.docker.com/engine/reference/builder/#workdir
CMD ["sh", "isPrime.sh"]