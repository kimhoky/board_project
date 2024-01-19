package com.stream.board.repository;

import com.stream.board.model.BoardMember;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class LoginRepository
{
    private static Map<Long, BoardMember> store = new ConcurrentHashMap<>();
    private static long idSequence = 0;

    public void save(BoardMember member) {
        store.put(++idSequence, member);
    }

    public List<BoardMember> findAll() {
        return new ArrayList<>(store.values());
    }

    public Optional<BoardMember> findByUser_ID(String User_ID) {
        return findAll().stream()
                .filter(member -> member.getUser_ID().equals(User_ID))
                .findFirst();
    }

    public void clear() {
        store.clear();
    }
}