FROM openjdk:15-jdk-alpine

RUN addgroup -S spring && adduser -S spring -G spring

USER spring:spring

COPY ./*.jar app.jar

ENTRYPOINT [ "java", "-jar", "/app.jar" ]