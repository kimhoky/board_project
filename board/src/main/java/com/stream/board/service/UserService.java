package com.stream.board.service;

import com.stream.board.dto.UserDTO;
import com.stream.board.entity.UserEntity;
import com.stream.board.repository.LoginRepository;
import com.stream.board.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final LoginRepository loginRepository;

    public void save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toMemberEntity(userDTO);
        userRepository.save(userEntity);
    }

    public UserDTO login(String User_ID, String User_password) {
        return loginRepository.loginByID_Password(User_ID, User_password);
    }

    public UserDTO check(String User_ID) {
        return loginRepository.findByUser_ID(User_ID);
    }
}