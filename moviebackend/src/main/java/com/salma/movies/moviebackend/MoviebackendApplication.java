// This line tells Java the package (folder path) of this file
package com.salma.movies.moviebackend;

// These lines import required Spring Boot classes
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// This is a special annotation
// It tells Spring Boot to start the app from this class
@SpringBootApplication
public class MoviebackendApplication {

    // This is the main method of Java
    // Java program always starts from the main method
    public static void main(String[] args) {

        // This line runs the Spring Boot application
        // It starts the backend server and loads all components like controllers
        SpringApplication.run(MoviebackendApplication.class, args);
    }
}

