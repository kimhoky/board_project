package com.stream.board.session;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SessionManager {
    private static Map<String, String> store = new ConcurrentHashMap<>();

    public void createSession(String value, HttpServletResponse response) {
        String token = UUID.randomUUID().toString(); //(1)
        store.put(token, value); //(2)
        Cookie cookie = new Cookie(SessionConst.sessionId, token); //(3)
        response.addCookie(cookie); //(4)
    }

    public String getSession(HttpServletRequest request) {
        Cookie sessionCookie = findCookie(request); //(1)
        if(sessionCookie == null) { //(2)
            return null;
        }
        return store.get(sessionCookie.getValue()); //(3)
    }

    public Cookie findCookie(HttpServletRequest request) {
        //request 요청에 cookie가 없을 경우 null
        if(request.getCookies() == null) { //(1)
            return null;
        }
        return Arrays.stream(request.getCookies()) //(2)
                .filter(cookie -> cookie.getName().equals(SessionConst.sessionId))
                .findFirst()
                .orElse(null);
    }

    public void sessionExpire(HttpServletRequest request) {
        Cookie sessionCookie = findCookie(request); //(1)
        if(sessionCookie != null) { //(2)
            store.remove(sessionCookie.getValue()); //(2)
        }
    }
}
