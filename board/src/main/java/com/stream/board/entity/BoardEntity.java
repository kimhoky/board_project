package com.stream.board.entity;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.MemberDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.RequestParam;

@Getter
@Setter
@Entity
@Table(name = "board") //database에 해당 이름의 테이블 생성
public class BoardEntity {
    @Id
    private int Board_ID;
    @Column
    private int Community_ID;
    @Column
    private String Writer_ID;
    @Column
    private String Board_tag;
    @Column
    private String Board_title;
    @Column
    private String Board_content;
    @Column
    private String Board_media;
    @Column
    private int Board_recomend;
    @Column
    private int Board_view;
    @Column
    private String Board_write_date;
    @Column
    private String Board_modify_date;
    @Column
    private String Board_delete_date;

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
