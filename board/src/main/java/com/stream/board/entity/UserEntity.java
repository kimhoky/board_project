package com.stream.board.entity;

import com.stream.board.dto.UserDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

@Entity
@Setter
@Getter
@Data
@Table(name = "user") //database에 해당 이름의 테이블 생성
public class UserEntity { //table 역할
    //jpa ==> database를 객체처럼 사용 가능

    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String User_ID;

    @Column
    private String User_password;

    @Column
    private String User_name;

    @Column
    private String User_favorite;

    @Column
    private String User_profile;

    @Column
    private String User_role;

    @Column
    private int Is_streamer;

    public static UserEntity toMemberEntity(@RequestParam UserDTO userDTO){
        UserEntity userEntity = new UserEntity();
        userEntity.setUser_ID(userDTO.getUser_ID());
        userEntity.setUser_password(userDTO.getUser_password());
        userEntity.setUser_name(userDTO.getUser_name());

        return userEntity;
    }

}