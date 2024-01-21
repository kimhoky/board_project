package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.service.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class BoardController {
    private BoardService boardService;

    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }


    @GetMapping("/board/search")
    public String search(@RequestParam(value = "keyword") String keyword, Model model){
        List<BoardDTO> boardDtoList =boardService.searchPosts(keyword);
        model.addAttribute("boardList",boardDtoList);

        return "board/list.html";
    }
}
