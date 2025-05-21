// This line tells Java which package (folder) this file belongs to
package com.salma.movies.moviebackend;

// Importing required classes from Spring framework
import org.springframework.context.annotation.Bean; // Used to create a special Spring-managed object (called a bean)
import org.springframework.context.annotation.Configuration; // Marks this class as a settings/configuration class
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Helps to write security rules for HTTP requests
import org.springframework.security.web.SecurityFilterChain; // Used to build a chain of security filters for requests

// This tells Spring that this class contains configuration settings
@Configuration
public class SecurityConfig {

    // This method creates a security filter chain and tells Spring to use it
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // Disable CSRF protection (used in forms), helpful during development
        http.csrf().disable()

            // Start defining security rules for HTTP requests
            .authorizeHttpRequests()

            // Allow all requests without any login or authentication
            .anyRequest().permitAll();

        // Finalize and return the security settings
        return http.build();
    }
}
