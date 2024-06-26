package com.stream.board.dto;

import com.stream.board.entity.BoardEntity;
import jakarta.persistence.TemporalType;
import lombok.*;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Data
@NoArgsConstructor
public class BoardDTO {
    private int Board_ID;
    private int Community_ID;
    private String Writer_ID;
    private String Board_tag;
    private String Board_title;
    private String Board_content;
    private String Board_media;
    private int Board_recomend;
    private int Board_view;

    private Timestamp Board_write_date;

    private Timestamp Board_modify_date;

    private Timestamp Board_delete_date;




    @Builder
    public static BoardDTO toBoardDTO(BoardEntity boardEntity){
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoard_ID(boardEntity.getBoard_ID());
        boardDTO.setCommunity_ID(boardEntity.getCommunity_ID());
        boardDTO.setWriter_ID(boardEntity.getWriter_ID());
        boardDTO.setBoard_tag(boardEntity.getBoard_tag());
        boardDTO.setBoard_title(boardEntity.getBoard_title());
        boardDTO.setBoard_content(boardEntity.getBoard_content());
        boardDTO.setBoard_media(boardEntity.getBoard_media());
        boardDTO.setBoard_recomend(boardEntity.getBoard_recomend());
        boardDTO.setBoard_view(boardEntity.getBoard_view());
        boardDTO.setBoard_write_date(boardEntity.getBoard_write_date());
        boardDTO.setBoard_modify_date(boardEntity.getBoard_modify_date());
        boardDTO.setBoard_delete_date(boardEntity.getBoard_delete_date());
        return boardDTO;
    }
}
