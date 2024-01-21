package com.stream.board.service;

import com.stream.board.dto.BoardDTO;
import com.stream.board.entity.BoardEntity;
import com.stream.board.repository.BoardRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

public class BoardService {
    private BoardRepository boardRepository;
    public  BoardService(BoardRepository boardRepository){
        this.boardRepository=boardRepository;
    }
    @Transactional
    public List<BoardDTO> searchPosts(String keyword){
        List<BoardEntity> boards = boardRepository.findByTitleContaining(keyword);
        List<BoardDTO> boardDtoList = new ArrayList<>();

        if(boards.isEmpty())
            return boardDtoList;

        for(BoardEntity board : boards){
            boardDtoList.add(this.convertEntityToDto(board));
        }

        return boardDtoList;
    }
    private BoardDTO convertEntityToDto(BoardEntity board){
        return BoardDTO.builder()
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .createdDate(board.getCreatedDate())
                .build();
    }

}
