package com.stream.board.controller;

import com.stream.board.JwtTokenProvider;
import com.stream.board.dto.MemberDTO;
import com.stream.board.repository.LoginRepository;
import com.stream.board.repository.MemberRepository;
import com.stream.board.service.MemberService;
import com.stream.board.session.SessionConst;
import com.stream.board.session.SessionManager;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import com.stream.board.model.BoardMember;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class MemberController {

    private final LoginRepository loginRepository;
    // 생성자 주입
    private final MemberService memberService;

    private final SessionManager sessionManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/")
    public String home(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession(false);

        if(session == null) {
            return "로그인";
        }

        String memberId = (String)session.getAttribute(SessionConst.sessionId);
        Optional<com.stream.board.model.BoardMember> findMemberOptional = loginRepository.findByUser_ID(memberId);
        BoardMember member = findMemberOptional.orElse(null);

        if(member == null) {
            return "로그인";
        }

        model.addAttribute("member", member);
        return memberId;
    }

    @PostMapping("/member/save")    // name값을 requestparam에 담아온다
    public String save(@ModelAttribute MemberDTO memberDTO) {
        System.out.println("MemberController.save");
        System.out.println("memberDTO = " + memberDTO);
        memberService.save(memberDTO);

        return "/index";
    }

    @PostMapping("/member/login")
    public String login(@ModelAttribute BoardMember member, HttpServletRequest request) {
        BoardMember loginMember = memberService.login(member.getUser_ID(), member.getUser_password());

        if (loginMember == null) {
            System.out.println(sessionManager.getSession(request));
            return "false";
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.sessionId, loginMember.getUser_ID());

        String token = jwtTokenProvider.generateToken(loginMember.getUser_ID());

        return token;
    }

    @PostMapping("/member/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session == null) {
            return "/main";
        }
        session.invalidate();
        return "/main";
    }
}