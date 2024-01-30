package com.stream.board.controller;

import com.stream.board.JwtTokenProvider;
import com.stream.board.dto.MemberDTO;
import com.stream.board.dto.UserDTO;
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
import java.util.List;
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

    @PostMapping("/member/save")    // name값을 requestparam에 담아온다
    public String save(@ModelAttribute MemberDTO memberDTO) {
        System.out.println("MemberController.save");
        System.out.println("memberDTO = " + memberDTO);
        memberService.save(memberDTO);

        return "/index";
    }

    @PostMapping("/member/login")
    public String login(@ModelAttribute UserDTO user, HttpServletRequest request) {
        UserDTO loginUser = memberService.login(user.getUser_ID(), user.getUser_password());

        if (loginUser == null) {
            System.out.println(sessionManager.getSession(request));
            return "false";
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.sessionId, loginUser.getUser_ID());

        String token = jwtTokenProvider.generateToken(loginUser.getUser_ID());

        return token;
    }

    @PostMapping("/member/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        session.invalidate();
        return "";
    }
}