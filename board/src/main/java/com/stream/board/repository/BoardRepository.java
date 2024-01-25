package com.stream.board.repository;



import com.stream.board.dto.BoardDTO;
import com.stream.board.entity.BoardEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BoardRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public BoardRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

//    public List<BoardDTO> findDataByTitle(String title) {
//        String sql = "SELECT * FROM board WHERE Board_title LIKE ?";
//        return jdbcTemplate.query(sql, new Object[]{"%" + title + "%"}, new BeanPropertyRowMapper<>(BoardDTO.class));
//    }
public List<BoardDTO> findDataByKeyword(String keyword) {
    String sql = "SELECT * FROM board WHERE Board_title LIKE ? OR writer_id LIKE ? OR board_content LIKE ?";
    String formattedKeyword = "%" + keyword + "%";
    return jdbcTemplate.query(sql, new Object[]{formattedKeyword, formattedKeyword, formattedKeyword}, new BeanPropertyRowMapper<>(BoardDTO.class));
}
}