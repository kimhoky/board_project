package com.stream.board.service;

import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.Channel;
import com.google.api.services.youtube.model.ChannelListResponse;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigInteger;
import java.util.Collections;
import java.util.List;

@Service
public class YoutubeService {




    //@Value 어노테이션을 사용하여 application.yml에서 정의한 YouTube API 키를 주입 받음
    //@Value("${youtube.api.key}")
    private String apiKey = "AIzaSyC1_SYmCiEE5-YlhquO92kqYd-mHiqY0-s";

    public String getChannelIdByChannelName(String channelName) throws IOException {
        // JSON 데이터를 처리하기 위한 JsonFactory 객체 생성
        JsonFactory jsonFactory = new JacksonFactory();

        // YouTube 객체를 빌드하여 API에 접근할 수 있는 YouTube 클라이언트 생성
        YouTube youtube = new YouTube.Builder(
                new com.google.api.client.http.javanet.NetHttpTransport(),
                jsonFactory,
                request -> {})
                .build();

        // YouTube Search API를 사용하여 채널 검색을 위한 요청 객체 생성
        YouTube.Search.List search = youtube.search().list(Collections.singletonList("id"));

        // API 키 설정
        search.setKey(apiKey);

        // 검색어 설정 (채널 이름)
        search.setQ(channelName);
        search.setType(Collections.singletonList("channel"));

        // 검색 요청 실행 및 응답 받아오기
        SearchListResponse searchResponse = search.execute();

        // 검색 결과에서 채널 ID 가져오기
        List<SearchResult> searchResultList = searchResponse.getItems();
        if (searchResultList != null && searchResultList.size() > 0) {
            // 검색 결과 중 첫 번째 채널 정보 가져오기
            SearchResult searchResult = searchResultList.get(0);

            // 채널의 ID 가져오기
            String channelId = searchResult.getId().getChannelId();

            return channelId;
        }

        return "검색 결과가 없습니다";
    }






    public String getChannelSubscribers(String channelId) throws IOException {
        // JSON 데이터를 처리하기 위한 JsonFactory 객체 생성
        JsonFactory jsonFactory = new JacksonFactory();

        // YouTube 객체를 빌드하여 API에 접근할 수 있는 YouTube 클라이언트 생성
        YouTube youtube = new YouTube.Builder(
                new com.google.api.client.http.javanet.NetHttpTransport(),
                jsonFactory,
                request -> {})
                .build();

        // Channels API를 사용하여 채널 정보를 가져오기 위한 요청 객체 생성
        YouTube.Channels.List channelsRequest = youtube.channels().list(Collections.singletonList("statistics"));

        // API 키 설정
        channelsRequest.setKey(apiKey);

        // 채널 ID를 리스트에 담아서 설정
        List<String> channelIds = Collections.singletonList(channelId);
        channelsRequest.setId(channelIds);

        // 채널 정보 요청 실행 및 응답 받아오기
        ChannelListResponse channelResponse = channelsRequest.execute();

        // 채널 정보에서 구독자 수 가져오기
        List<Channel> channelList = channelResponse.getItems();
        if (channelList != null && channelList.size() > 0) {
            Channel channel = channelList.get(0);
            BigInteger subscriberCount = channel.getStatistics().getSubscriberCount();

            return "채널 구독자 수: " + subscriberCount.toString();
        }

        return "채널 정보를 가져올 수 없습니다";
    }
}