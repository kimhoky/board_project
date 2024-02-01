package com.stream.board.repository;

import com.stream.board.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LoginRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public UserDTO findByUser_ID(String User_ID) {
        String sql = "SELECT User_ID, User_name, User_favorite, User_profile FROM user WHERE User_ID = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{User_ID}, new BeanPropertyRowMapper<>(UserDTO.class));
    }

    public UserDTO loginByID_Password(String User_ID, String User_password) {
        String sql = "SELECT * FROM user WHERE User_ID = ? and User_password = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{User_ID, User_password}, new BeanPropertyRowMapper<>(UserDTO.class));
    }
}