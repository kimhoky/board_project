package com.stream.board.dto;

import lombok.Data;
import lombok.Getter;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Data
public class ComentDTO {
    private int Coment_ID;
    private int Board_ID;
    private String Writer_ID;
    private String coment_content;
    private Timestamp write_date;
    private Timestamp modify_date;
    private Timestamp delete_date;
}
