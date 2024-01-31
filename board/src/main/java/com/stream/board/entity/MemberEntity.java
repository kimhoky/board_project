package com.stream.board.entity;

import com.stream.board.dto.UserDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

@Entity
@Setter
@Getter
@Table(name = "user") //database에 해당 이름의 테이블 생성
public class MemberEntity { //table 역할
    //jpa ==> database를 객체처럼 사용 가능

    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String User_id;

    @Column
    private String User_password;

    @Column
    private String User_name;

    @Column
    private String User_favorite;

    @Column
    private String User_profile;

    @Column
    private int Is_streamer;

    public static MemberEntity toMemberEntity(@RequestParam UserDTO userDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setUser_id(userDTO.getUser_ID());
        memberEntity.setUser_password(userDTO.getUser_password());
        memberEntity.setUser_name(userDTO.getUser_name());

        return memberEntity;
    }

}