package com.stream.board.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import lombok.Getter;
import lombok.*;

@Getter
@Data
public class UserDTO {
    private String User_ID;
    private String User_password;
    private Collection<? extends GrantedAuthority> authorities;

    // 기본 생성자
    public UserDTO() {
    }

    // 모든 필드를 초기화하는 생성자
    public UserDTO(String User_ID, Collection<? extends GrantedAuthority> authorities) {
        this.User_ID = User_ID;
        this.authorities = authorities;
    }
}
