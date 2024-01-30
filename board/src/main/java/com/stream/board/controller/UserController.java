package com.stream.board.controller;

import com.stream.board.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping
    public String getUserDetails(@RequestHeader(value = "Authorization") String token) {
        System.out.println("/api/user          " + token);
        String userId = jwtTokenProvider.getUserIdFromToken(token);

        return userId;
    }
}