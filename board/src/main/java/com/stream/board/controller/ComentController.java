package com.stream.board.controller;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.ComentDTO;
import com.stream.board.service.ComentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
public class ComentController {
    private ComentService comentService;

    public Timestamp getCurrentTimestamp() {
        Date currentDate = new Date();
        return new Timestamp(currentDate.getTime());
    }
    @PostMapping("/coment/save")
    public String save(@ModelAttribute ComentDTO comentDTO) {
        System.out.println("comentDTO.save");
        System.out.println("comentDTO = " + comentDTO);
        System.out.println("wid" + comentDTO.getWriter_ID());

        if(comentDTO.getWrite_date()==null){
            Timestamp time = getCurrentTimestamp();
            comentDTO.setWrite_date(time);

            comentService.save(comentDTO);}

        return "true";
    }

    @PostMapping("/coment/update")
    public String update(@ModelAttribute ComentDTO comentDTO) {
        System.out.println("comentDTO.update");
        System.out.println("comentDTO = " + comentDTO);
        System.out.println("wid" + comentDTO.getWriter_ID());


        Timestamp time = getCurrentTimestamp();
        comentDTO.setModify_date(time);

        comentService.update(comentDTO);

        return "true";
    }

    @GetMapping("/coment/gettable")
    public ResponseEntity<List<ComentDTO>> getAllComents(String bid) {
        List<ComentDTO> comnets = comentService.getAllComents(bid);
        return new ResponseEntity<>(comnets, HttpStatus.OK);
    }

    @GetMapping("/coment/del")
    public void delete(@RequestParam(value = "deleteboardid") String keyword2, @RequestParam(value = "deletewriterid") String keyword3){
        Timestamp keyword = getCurrentTimestamp();
        comentService.deletePost(keyword ,keyword2, keyword3);
    }

    @GetMapping("/coment/edit")
    public ResponseEntity<List<ComentDTO>> edit(@RequestParam(value = "editboardid") String keyword, @RequestParam(value = "editwriterid") String keyword2){

        List<ComentDTO> coments = comentService.editPost(keyword, keyword2);
        return new ResponseEntity<>(coments, HttpStatus.OK);
    }
}
