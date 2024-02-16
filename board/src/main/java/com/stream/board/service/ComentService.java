package com.stream.board.service;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.ComentDTO;
import com.stream.board.entity.BoardEntity;
import com.stream.board.repository.ComentRepostitory;

import java.sql.Timestamp;
import java.util.List;

public class ComentService {

    private ComentRepostitory comentRepostitory;
    public void save(ComentDTO comentDTO) {
        comentRepostitory.Post(comentDTO);
    }

    public void update(ComentDTO comentDTO) {
        comentRepostitory.update(comentDTO);
    }

    public void deletePost(Timestamp keyword, String keyword2, String keyword3){
        comentRepostitory.deleteDataByKeyword(keyword, keyword2, keyword3);
    }
    public List<ComentDTO> editPost(String keyword, String keyword2){
        return comentRepostitory.editDataByKeyword(keyword, keyword2);
    }

    public List<ComentDTO> getAllComents(String bid) {
        List<ComentDTO> boards = comentRepostitory.findDataByBoardID(bid);
        return boards;
    }
}
