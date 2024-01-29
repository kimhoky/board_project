package com.stream.board;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
@PropertySource(value = {"classpath:application.yml"})
public class JwtTokenProvider {
    @Value("${jwt.expiration}")
    private Long expirationDate;

    private final String secret;

    private final SecretKey secretKey;

    public JwtTokenProvider(@Value("${jwt.secret}") String secret) {
        if (secret == null) {
            throw new IllegalArgumentException("JWT secret cannot be null");
        }
        this.secret = secret;
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes());
    }


    public String generateToken(String userId) {
        return Jwts.builder()
                .claim("userId", userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationDate))
                .signWith(secretKey)
                .compact();
    }

    public String getUserIdFromToken(String token) {
        System.out.println("getUserIdFromToken " + token);
        try {
            Claims claims = Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseClaimsJws(token)
                    .getPayload();

            return (String) claims.get("userId");
        } catch (Exception e) {
            // 예외 처리...
            e.printStackTrace();
            throw new RuntimeException("Error decoding JWT token");
        }
    }
}
