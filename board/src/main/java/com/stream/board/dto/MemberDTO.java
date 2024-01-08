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
    private Long m_id;
    private String m_email;
    private String m_password;
    private String m_name;

    //lombok 어노테이션으로 getter,setter,생성자,toString 메서드 생략 가능

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setM_id(memberEntity.getM_id());
        memberDTO.setM_email(memberEntity.getM_email());
        memberDTO.setM_name(memberEntity.getM_name());
        memberDTO.setM_password(memberEntity.getM_password());

        return memberDTO;
    }
}
//MemberDTO.class