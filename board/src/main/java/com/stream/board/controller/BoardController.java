package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.MemberDTO;
import com.stream.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {
    private BoardService boardService;

@Autowired
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

    @PostMapping("/board/save")    // name값을 requestparam에 담아온다
    public String save(@ModelAttribute BoardDTO BoardDTO) {
        System.out.println("boarddto.save");
        System.out.println("boardDTO = " + BoardDTO);
        boardService.save(BoardDTO);
        return "redirect:/board";
    }

    @GetMapping("/board/del")
    public void delete(@RequestParam(value = "deleteboardid") String keyword){
        boardService.deletePost(keyword);
    }
}
