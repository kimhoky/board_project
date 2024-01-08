package com.stream.board.entity;

import com.stream.board.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "member") //database에 해당 이름의 테이블 생성
public class MemberEntity { //table 역할
    //jpa ==> database를 객체처럼 사용 가능

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long m_id;

    @Column(unique = true)
    private String m_email;

    @Column
    private String m_password;

    @Column
    private String m_name;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setM_id(memberDTO.getM_id());
        memberEntity.setM_email(memberDTO.getM_email());
        memberEntity.setM_name(memberDTO.getM_name());
        memberEntity.setM_password(memberDTO.getM_password());
        return memberEntity;
    }

}