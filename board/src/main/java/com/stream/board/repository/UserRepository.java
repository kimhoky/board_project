package com.stream.board.repository;

import com.stream.board.entity.MemberEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<MemberEntity, Long> {

    // 모든 레코드를 가져오는 메서드
    Iterable<MemberEntity> findAll();
}