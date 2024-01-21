package com.stream.board.dto;

import com.stream.board.entity.BoardEntity;
import com.stream.board.entity.MemberEntity;
import lombok.*;

import java.sql.Date;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@ToString
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
        boardDTO.setBoard_ID(boardEntity.getBoardID());
        boardDTO.setCommunity_ID(boardEntity.getCommunityID());
        boardDTO.setWriter_ID(boardEntity.getWriterID());
        boardDTO.setBoard_tag(boardEntity.getBoardtag());
        boardDTO.setBoard_title(boardEntity.getBoardTitle());
        boardDTO.setBoard_content(boardEntity.getBoardcontent());
        boardDTO.setBoard_media(boardEntity.getBoardmedia());
        boardDTO.setBoard_recomend(boardEntity.getBoardrecomend());
        boardDTO.setBoard_view(boardEntity.getBoardview());
        boardDTO.setBoard_write_date(boardEntity.getBoardwritedate());
        boardDTO.setBoard_modify_date(boardEntity.getBoardmodifydate());
        boardDTO.setBoard_delete_date(boardEntity.getBoarddeletedate());
        return boardDTO;
    }
}
