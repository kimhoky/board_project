package com.stream.board.entity;

import com.stream.board.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "user") //database에 해당 이름의 테이블 생성
public class MemberEntity { //table 역할
    //jpa ==> database를 객체처럼 사용 가능

    @Id
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

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setUser_id(memberDTO.getUser_id());
        memberEntity.setUser_name(memberDTO.getUser_name());
        memberEntity.setUser_password(memberDTO.getUser_password());
        return memberEntity;
    }

}