FROM gradle:8.1.1-jdk17
COPY --chown=gradle:gradle . .
WORKDIR .
COPY package*.json ./
RUN gradle build -x test --no-daemon
EXPOSE 8081
CMD ["gradle", "bootRun"]