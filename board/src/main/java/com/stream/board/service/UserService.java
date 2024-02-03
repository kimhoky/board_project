package com.stream.board.service;

import com.stream.board.dto.UserDTO;
import com.stream.board.repository.LoginRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final LoginRepository loginRepository;

    public boolean save(UserDTO userDTO) {
        return loginRepository.signup(userDTO.getUser_ID(), userDTO.getUser_password(), userDTO.getUser_name());
    }

    public UserDTO login(String User_ID, String User_password) {
        return loginRepository.loginByID_Password(User_ID, User_password);
    }

    public UserDTO check(String User_ID) {
        return loginRepository.findByUser_ID(User_ID);
    }
}