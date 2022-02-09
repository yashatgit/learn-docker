FROM alpine

# set directory
WORKDIR /home

# copy code
ADD ./isPrime.sh .

# make it executable
RUN chmod +x ./isPrime.sh

# run
CMD ["sh", "isPrime.sh"]