package com.stream.board.repository;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.UserDTO;
import com.stream.board.model.BoardMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class LoginRepository {
    private final JdbcTemplate jdbcTemplate;
    private static Map<Long, BoardMember> store = new ConcurrentHashMap<>();
    private static long idSequence = 0;

    @Autowired
    public LoginRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public UserDTO findByUser_ID(String User_ID) {
        String sql = "SELECT * FROM user WHERE User_ID = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{User_ID}, new BeanPropertyRowMapper<>(UserDTO.class));
    }

    public void clear() {
        store.clear();
    }

    public UserDTO loginByID_Password(String User_ID, String User_password) {
        String sql = "SELECT * FROM user WHERE User_ID = ? and User_password = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{User_ID, User_password}, new BeanPropertyRowMapper<>(UserDTO.class));
    }
}