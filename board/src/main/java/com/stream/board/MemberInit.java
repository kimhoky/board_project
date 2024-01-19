package com.stream.board;

import com.stream.board.model.BoardMember;
import com.stream.board.repository.LoginRepository;
import com.stream.board.service.MemberService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberInit {

    private final LoginRepository memberRepository;
    private final MemberService memberService;

    @PostConstruct
    public void memberInit() {
        for (BoardMember boardMember : memberService.getAllUsersAsBoardMembers()) {
            memberRepository.save(boardMember);
        }
    }
}