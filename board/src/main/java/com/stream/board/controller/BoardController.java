package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
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

    public Timestamp getCurrentTimestamp() {
        Date currentDate = new Date();
        return new Timestamp(currentDate.getTime());
    }

    @PostMapping("/board/save")    // name값을 requestparam에 담아온다
    public String save(@ModelAttribute BoardDTO boardDTO) {
        System.out.println("boarddto.save");
        System.out.println("boardDTO = " + boardDTO);
        System.out.println("wid" + boardDTO.getWriter_ID());

        if(boardDTO.getBoard_write_date()==null){
        Timestamp time = getCurrentTimestamp();
        boardDTO.setBoard_write_date(time);

        boardService.save(boardDTO);}

        return "redirect:/board";
    }

    @PostMapping("/board/update")    // name값을 requestparam에 담아온다
    public String update(@ModelAttribute BoardDTO boardDTO) {
        System.out.println("boarddto.update");
        System.out.println("boardDTO = " + boardDTO);
        System.out.println("wid" + boardDTO.getWriter_ID());


            Timestamp time = getCurrentTimestamp();
            boardDTO.setBoard_modify_date(time);

            boardService.update(boardDTO);

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
    public void delete(@RequestParam(value = "deleteboardid") String keyword2, @RequestParam(value = "deletewriterid") String keyword3){
        Timestamp keyword = getCurrentTimestamp();
        boardService.deletePost(keyword ,keyword2, keyword3);
    }

    @GetMapping("/board/edit")
    public ResponseEntity<List<BoardDTO>> edit(@RequestParam(value = "editboardid") String keyword, @RequestParam(value = "editwriterid") String keyword2){

    List<BoardDTO> boards = boardService.editPost(keyword, keyword2);
        return new ResponseEntity<>(boards, HttpStatus.OK);
    }
}
