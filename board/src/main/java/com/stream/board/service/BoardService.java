package com.stream.board.service;

import com.stream.board.dto.BoardDTO;
import com.stream.board.dto.MemberDTO;
import com.stream.board.entity.BoardEntity;
import com.stream.board.entity.MemberEntity;
import com.stream.board.repository.BoardRepository;
import com.stream.board.repository.BoardingRepository;
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
  //  private  BoardingRepository boardingRepository;
    @Autowired
    public  BoardService(BoardRepository boardRepository){
        this.boardRepository=boardRepository;
    }
//
//    @Autowired
//    public BoardService(BoardingRepository boardingRepository){this.boardingRepository=boardingRepository;}
    @Transactional
    public List<BoardDTO> searchPosts(String keyword) {
        return boardRepository.findDataByKeyword(keyword);
    }

    public void save(BoardDTO BoardDTO) {
        BoardEntity boardEntity = BoardEntity.toBoardEntity(BoardDTO);
        boardRepository.save(BoardDTO);
    }

    public void deletePost(String keyword, String keyword2){

        boardRepository.deleteDataByKeyword(keyword, keyword2);
    }
    public List<BoardDTO> editPost(String keyword, String keyword2){

       return boardRepository.editDataByKeyword(keyword, keyword2);
    }

    public List<BoardDTO> getAllBoards(String cid) {
        // 여기에서 실제로 데이터베이스에서 데이터를 조회하는 로직을 작성합니다.
        // 예를 들어, boardRepository.findAll() 등을 사용하여 데이터를 가져올 수 있습니다.
        // 이는 프로젝트의 구조나 사용하는 JPA 라이브러리에 따라 다를 수 있습니다.
        // 아래는 간단한 예시입니다.

        List<BoardDTO> boards = boardRepository.findDataByCommunityID(cid); // 이 메서드는 실제로 구현되어 있어야 합니다.
        return boards;
    }

    public List<BoardDTO> getBoards(String bid) {
        // 여기에서 실제로 데이터베이스에서 데이터를 조회하는 로직을 작성합니다.
        // 예를 들어, boardRepository.findAll() 등을 사용하여 데이터를 가져올 수 있습니다.
        // 이는 프로젝트의 구조나 사용하는 JPA 라이브러리에 따라 다를 수 있습니다.
        // 아래는 간단한 예시입니다.

        List<BoardDTO> boards = boardRepository.findDataByBoardID(bid); // 이 메서드는 실제로 구현되어 있어야 합니다.
        return boards;
    }






}
