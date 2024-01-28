package com.stream.board;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${jwt.expiration}")
    private Long expirationDate;

    @Value("${jwt.secret}")
    private String secret;

    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);


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
