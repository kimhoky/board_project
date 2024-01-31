package com.stream.board.entity;

import com.stream.board.dto.BoardDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "board") //database에 해당 이름의 테이블 생성
public class BoardEntity {
    @Id
    @Column(name="Board_ID")
    private int BoardID;
    @Column(name="Community_ID")
    private int CommunityID;
    @Column(name="Writer_ID")
    private String WriterID;
    @Column(name="Board_tag")
    private String Boardtag;
    @Column(name="Board_title")
    private String BoardTitle;
    @Column(name="Board_content")
    private String Boardcontent;
    @Column(name="Board_media")
    private String Boardmedia;
    @Column(name="Board_recomend")
    private int Boardrecomend;
    @Column(name="Board_view")
    private int Boardview;
    @Column(name="Board_write_date")
    private Timestamp Boardwritedate;
    @Column(name="Board_modify_date")
    private Timestamp Boardmodifydate;
    @Column(name="Board_delete_date")
    private Timestamp Boarddeletedate;

    public static BoardEntity toBoardEntity(@RequestParam BoardDTO BoardDTO){
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setBoardID(BoardDTO.getBoard_ID());
        boardEntity.setCommunityID(BoardDTO.getCommunity_ID());
        boardEntity.setWriterID(BoardDTO.getWriter_ID());
        boardEntity.setBoardtag(BoardDTO.getBoard_tag());
        boardEntity.setBoardTitle(BoardDTO.getBoard_title());
        boardEntity.setBoardcontent(BoardDTO.getBoard_content());
        boardEntity.setBoardmedia(BoardDTO.getBoard_media());
        boardEntity.setBoardrecomend(BoardDTO.getBoard_recomend());
        boardEntity.setBoardview(BoardDTO.getBoard_view());
        boardEntity.setBoardwritedate(BoardDTO.getBoard_write_date());
        boardEntity.setBoardmodifydate(BoardDTO.getBoard_modify_date());
        boardEntity.setBoarddeletedate(BoardDTO.getBoard_delete_date());

        return boardEntity;
    }

}
