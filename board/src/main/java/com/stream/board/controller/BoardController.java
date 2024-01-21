package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.service.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoardController {
    private BoardService boardService;

    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }


//    @GetMapping("/board/search")
//    public String search(@RequestParam(value = "searchText") String keyword, Model model){
//        List<BoardDTO> boardDtoList =boardService.searchPosts(keyword);
//        model.addAttribute("boardList",boardDtoList);
//
//        return "boardDtoList";
//    }
    @GetMapping("/board/search")
    public List<BoardDTO> search(@RequestParam(value = "searchText") String keyword) {
        return boardService.searchPosts(keyword);
    }
}
