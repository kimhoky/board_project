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
    private String User_name;
    private String User_favorite;
    private String User_profile;
    private int is_Streamer;
    private String User_role;

    // 기본 생성자
    public UserDTO() {
    }
}
