package com.stream.board.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.stream.board.entity.MemberEntity;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class BoardMember {
    private String User_ID;
    private String User_password;

    public BoardMember(String User_ID, String User_password) {
        this.User_ID = User_ID;
        this.User_password = User_password;
    }

    public BoardMember() {

    }

    public void setUserEntity(MemberEntity user) {
        this.User_ID = user.getUser_id();
        this.User_password = user.getUser_password();
    }
}