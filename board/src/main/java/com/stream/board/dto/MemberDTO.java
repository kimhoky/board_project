package com.stream.board.dto;

import com.stream.board.entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//lombok dependency추가
@Getter
@Setter
@NoArgsConstructor
@ToString
public class MemberDTO { //회원 정보를 필드로 정의
    private String User_id;
    private String User_password;
    private String User_name;

    //lombok 어노테이션으로 getter,setter,생성자,toString 메서드 생략 가능

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setUser_id(memberEntity.getUser_id());
        memberDTO.setUser_name(memberEntity.getUser_name());
        memberDTO.setUser_password(memberEntity.getUser_password());

        return memberDTO;
    }
}
//MemberDTO.class