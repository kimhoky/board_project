package com.stream.board.repository;

import com.stream.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardingRepository extends JpaRepository<BoardEntity, Long>
{

}