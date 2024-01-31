package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // /board 들어갔을때 항목을 가져옴
    @GetMapping("/board/gettable")
    public ResponseEntity<List<BoardDTO>> getAllBoards(String cid) {
        List<BoardDTO> boards = boardService.getAllBoards(cid);
        return new ResponseEntity<>(boards, HttpStatus.OK);
    }
    // /post로 들어갈때 해당하는 레이블 표시
    @GetMapping("/board/getboard")
    public ResponseEntity<List<BoardDTO>> getBoard(String bid) {
        List<BoardDTO> boards = boardService.getBoards(bid);
        return new ResponseEntity<>(boards, HttpStatus.OK);
    }

    @GetMapping("/board/del")
    public void delete(@RequestParam(value = "deleteboardid") String keyword, @RequestParam(value = "deletewriterid") String keyword2){
        boardService.deletePost(keyword, keyword2);
    }
}
