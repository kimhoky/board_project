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

public void deleteDataByKeyword(String keyword, String keyword2){
    int rowsAffected =  jdbcTemplate.update(
            "DELETE FROM board WHERE Board_ID = ? AND Writer_ID = ?",
            keyword, keyword2
    );
    if (rowsAffected > 0) {
        // 성공적으로 삭제된 경우
        // 이 부분에서 성공적으로 삭제되었다는 메시지를 클라이언트로 전달하도록 처리할 수 있습니다.
    } else {
        // 삭제할 데이터가 없거나, SQL 실행에 문제가 생긴 경우
        throw new RuntimeException("Failed to delete data");
    }
}
    public void save(BoardDTO boardDTO) {
        String sql = "INSERT INTO board (Community_ID, Writer_ID, Board_tag, Board_title, Board_content, Board_media, Board_recomend, Board_view, Board_write_date, Board_modify_date, Board_delete_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql,
                boardDTO.getCommunity_ID(),
                boardDTO.getWriter_ID(),
                boardDTO.getBoard_tag(),
                boardDTO.getBoard_title(),
                boardDTO.getBoard_content(),
                boardDTO.getBoard_media(),
                boardDTO.getBoard_recomend(),
                boardDTO.getBoard_view(),
                boardDTO.getBoard_write_date(),
                boardDTO.getBoard_modify_date(),
                boardDTO.getBoard_delete_date());
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