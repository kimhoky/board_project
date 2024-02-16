package com.stream.board.repository;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.ComentDTO;
import com.stream.board.entity.BoardEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class ComentRepostitory {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ComentRepostitory(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void Post(ComentDTO comentDTO) {
        String sql = "INSERT INTO coment (board_ID, Writer_ID, coment_content, write_date) " +
                "VALUES (?, ?, ?, ?)";

        jdbcTemplate.update(sql,comentDTO);
    }

    public void update(ComentDTO comentDTO) {
        String sql = "UPDATE coment " +
                "SET" +
                "    coment_content = ?," +
                "    write_date = ?," +
                "    modify_date = ?" +
                "    WHERE Writer_ID = ? AND Board_ID= ?";

        jdbcTemplate.update(sql,comentDTO);
    }

    public void deleteDataByKeyword(Timestamp keyword, String keyword2, String keyword3){
        try {
            String sql = "UPDATE coment SET delete_date = ? WHERE Board_ID = ? AND Writer_ID = ?";
            jdbcTemplate.update(sql, keyword, keyword2, keyword3 );

        } catch (Exception e) {
            // 다른 예외 발생 시
            throw new RuntimeException("Failed to delete data", e);
        }
    }

    public List<ComentDTO> editDataByKeyword(String keyword, String keyword2){

        try {
            String sql = "SELECT * FROM coment WHERE Board_ID = ? AND Writer_ID = ?";
            List<ComentDTO> result = jdbcTemplate.query(sql, new Object[]{keyword, keyword2}, new BeanPropertyRowMapper<>(ComentDTO.class));

            if (result.isEmpty()) {
                // 수정할 데이터가 없는 경우
                throw new RuntimeException("No data to edit");
            }

            return result;
        } catch (Exception e) {
            // 다른 예외 발생 시
            throw new RuntimeException("Failed to edit data", e);
        }
    }

    public List<ComentDTO> findDataByBoardID(String bid){
        String sql = "SELECT * FROM coment WHERE Board_ID = ?";
        return jdbcTemplate.query(sql, new Object[]{bid},new BeanPropertyRowMapper<>(ComentDTO.class));
    }
}
