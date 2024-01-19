package com.stream.board;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 리액트 개발 서버 주소
                .allowedMethods("GET", "POST", "PUT", "DELETE")  .allowCredentials(true) // Access-Control-Allow-Credentials 헤더를 true로 설정
                .maxAge(3600); // preflight 요청 결과를 캐시하는 시간
    }
}