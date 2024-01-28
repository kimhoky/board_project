package com.stream.board.controller;

import com.stream.board.JwtTokenProvider;
import com.stream.board.details.CustomUserDetails;
import com.stream.board.dto.UserDTO;
import com.stream.board.service.YourUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private YourUserDetailsService yourUserDetailsService;

    @GetMapping
    public ResponseEntity<UserDTO> getUserDetails(@RequestHeader(value = "Authorization") String token) {
        System.out.println("/api/user          " + token);
        String userId = jwtTokenProvider.getUserIdFromToken(token);
        CustomUserDetails userDetails = yourUserDetailsService.loadUserByUsername(userId);

        // UserDTO는 사용자 정보를 전달하는 데이터 객체입니다.
        UserDTO userDTO = new UserDTO(userDetails.getUsername(), userDetails.getAuthorities());

        return ResponseEntity.ok(userDTO);
    }
}