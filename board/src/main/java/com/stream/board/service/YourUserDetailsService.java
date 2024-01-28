package com.stream.board.service;

import com.stream.board.details.CustomUserDetails;
import com.stream.board.entity.MemberEntity;
import com.stream.board.model.BoardMember;
import com.stream.board.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class YourUserDetailsService implements UserDetailsService {

    private final LoginRepository userRepository;

    @Autowired
    public YourUserDetailsService(LoginRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        BoardMember customUser = userRepository.findByUser_ID(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        return new CustomUserDetails(customUser.getUser_ID(), customUser.getUser_password(), customUser.getAuthorities());
    }
}
