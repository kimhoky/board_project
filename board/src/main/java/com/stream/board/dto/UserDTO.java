package com.stream.board.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import lombok.Getter;

@Getter
public class UserDTO {
    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    // 기본 생성자
    public UserDTO() {
    }

    // 모든 필드를 초기화하는 생성자
    public UserDTO(String username, Collection<? extends GrantedAuthority> authorities) {
        this.username = username;
        this.authorities = authorities;
    }
}
