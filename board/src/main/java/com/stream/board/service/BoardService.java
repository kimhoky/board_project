package com.stream.board.service;

import com.stream.board.dto.BoardDTO;
import com.stream.board.entity.BoardEntity;
import com.stream.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.stream.board.dto.BoardDTO.toBoardDTO;
@Service
@RequiredArgsConstructor
public class BoardService {
    private BoardRepository boardRepository;
    @Autowired
    public  BoardService(BoardRepository boardRepository){
        this.boardRepository=boardRepository;
    }
    @Transactional
    public List<BoardDTO> searchPosts(String keyword) {
        return boardRepository.findDataByKeyword(keyword);
    }






}
