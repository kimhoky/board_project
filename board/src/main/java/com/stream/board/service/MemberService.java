package com.stream.board.service;

import com.stream.board.dto.UserDTO;
import com.stream.board.entity.MemberEntity;
import com.stream.board.model.BoardMember;
import com.stream.board.repository.LoginRepository;
import com.stream.board.repository.MemberRepository;
import com.stream.board.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final LoginRepository loginRepository;

    public void save(UserDTO userDTO) {
        MemberEntity memberEntity = MemberEntity.toMemberEntity(userDTO);
        memberRepository.save(memberEntity);
    }

    public UserDTO login(String User_ID, String User_password) {
        return loginRepository.loginByID_Password(User_ID, User_password);
    }

//    public UserDTO check(String User_ID, Collection<? extends GrantedAuthority> authorities) {
//        return loginRepository.
//    }
}