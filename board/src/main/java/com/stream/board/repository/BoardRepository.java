package com.stream.board.repository;



import com.stream.board.dto.BoardDTO;
import com.stream.board.entity.BoardEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.Timestamp;
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

public void deleteDataByKeyword(Timestamp keyword, String keyword2, String keyword3){
    try {
    String sql = "UPDATE board SET Board_delete_date = ? WHERE Board_ID = ? AND Writer_ID = ?";
    jdbcTemplate.update(sql, keyword, keyword2, keyword3 );

    } catch (Exception e) {
        // 다른 예외 발생 시
        throw new RuntimeException("Failed to delete data", e);
    }
}

    public List<BoardDTO> editDataByKeyword(String keyword, String keyword2){

        try {
            String sql = "SELECT * FROM board WHERE Board_ID = ? AND Writer_ID = ?";
            List<BoardDTO> result = jdbcTemplate.query(sql, new Object[]{keyword, keyword2}, new BeanPropertyRowMapper<>(BoardDTO.class));

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

    public void save(BoardEntity boardEntity) {
        String sql = "INSERT INTO board (Community_ID, Writer_ID, Board_tag, Board_title, Board_content, Board_media, Board_recomend, Board_view, Board_write_date, Board_modify_date, Board_delete_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql,
                boardEntity.getCommunity_ID(),
                boardEntity.getWriter_ID(),
                boardEntity.getBoard_tag(),
                boardEntity.getBoard_title(),
                boardEntity.getBoard_content(),
                boardEntity.getBoard_media(),
                boardEntity.getBoard_recomend(),
                boardEntity.getBoard_view(),
                boardEntity.getBoard_write_date(),
                boardEntity.getBoard_modify_date(),
                boardEntity.getBoard_delete_date());
    }

    public void update(BoardEntity boardEntity) {
        String sql = "UPDATE board " +
                "SET" +
                "    Board_tag = ?," +
                "    Board_title = ?," +
                "    Board_content = ?," +
                "    Board_media = ?," +
                "    Board_modify_date = ?" +
                "    WHERE Writer_ID = ? AND Board_ID= ?";

        jdbcTemplate.update(sql,
                boardEntity.getBoard_tag(),
                boardEntity.getBoard_title(),
                boardEntity.getBoard_content(),
                boardEntity.getBoard_media(),
                boardEntity.getBoard_modify_date(),
                boardEntity.getWriter_ID(),
                boardEntity.getBoard_ID());
    }


    public List<BoardDTO> findDataByCommunityID(String cid){
        String sql = "SELECT * FROM board WHERE Community_ID = ?";
       return jdbcTemplate.query(sql, new Object[]{cid},new BeanPropertyRowMapper<>(BoardDTO.class));
    }

    public List<BoardDTO> findDataByBoardID(String bid){
        String sql = "SELECT * FROM board WHERE Board_ID = ?";
        return jdbcTemplate.query(sql, new Object[]{bid},new BeanPropertyRowMapper<>(BoardDTO.class));
    }


}