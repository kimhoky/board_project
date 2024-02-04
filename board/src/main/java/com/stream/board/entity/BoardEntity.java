package com.stream.board.entity;

import com.stream.board.dto.BoardDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "board") //database에 해당 이름의 테이블 생성
public class BoardEntity {
    @Id
    @Column(name="Board_ID")
    private int Board_ID;
    @Column(name="Community_ID")
    private int Community_ID;
    @Column(name="Writer_ID")
    private String Writer_ID;
    @Column(name="Board_tag")
    private String Board_tag;
    @Column(name="Board_title")
    private String Board_title;
    @Column(name="Board_content")
    private String Board_content;
    @Column(name="Board_media")
    private String Board_media;
    @Column(name="Board_recomend")
    private int Board_recomend;
    @Column(name="Board_view")
    private int Board_view;
    @Column(name="Board_write_date")
    private Timestamp Board_write_date;
    @Column(name="Board_modify_date")
    private Timestamp Board_modify_date;
    @Column(name="Board_delete_date")
    private Timestamp Board_delete_date;

    public static BoardEntity toBoardEntity(@RequestParam BoardDTO BoardDTO){
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setBoard_ID(BoardDTO.getBoard_ID());
        boardEntity.setCommunity_ID(BoardDTO.getCommunity_ID());
        boardEntity.setWriter_ID(BoardDTO.getWriter_ID());
        boardEntity.setBoard_tag(BoardDTO.getBoard_tag());
        boardEntity.setBoard_title(BoardDTO.getBoard_title());
        boardEntity.setBoard_content(BoardDTO.getBoard_content());
        boardEntity.setBoard_media(BoardDTO.getBoard_media());
        boardEntity.setBoard_recomend(BoardDTO.getBoard_recomend());
        boardEntity.setBoard_view(BoardDTO.getBoard_view());
        boardEntity.setBoard_write_date(BoardDTO.getBoard_write_date());
        boardEntity.setBoard_modify_date(BoardDTO.getBoard_modify_date());
        boardEntity.setBoard_delete_date(BoardDTO.getBoard_delete_date());

        return boardEntity;
    }

}
