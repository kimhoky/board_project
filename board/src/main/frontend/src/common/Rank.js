// StreamerRankings.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/rank.css";

export default function StreamerRankings() {
  const [streamerData, setStreamerData] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  // 데이터를 불러오는 함수
  const loadStreamers = (pageNum) => {
    // API 요청을 통해 데이터를 불러오거나 임시 데이터를 사용
    const newStreamers = []; // 여기에 API 응답 데이터를 추가
    // 임시 데이터 생성 로직
    for (let i = 0; i < 100; i++) {
      newStreamers.push({
        rank: (pageNum - 1) * 100 + i + 1,
        name: `스트리머${pageNum * 100 + i}`,
        points: Math.floor(Math.random() * 100),
        avatar: `avatar${pageNum * 10 + i}.png`,
      });
    }
    return newStreamers;
  };
  // 사용자가 마지막 요소를 보았을 때 호출될 함수
  const handleObserver = useCallback((entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const newStreamers = loadStreamers(page);
    setStreamerData((prevStreamers) => [...prevStreamers, ...newStreamers]);
  }, [page]);

  // IntersectionObserver를 등록합니다.
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }

    // 클린업 함수
    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="rankContainer">
      <aside className="sidebar">
        <select name="Cars">
          {" "}
          {/* 년도 listdownbox */}
          <option value="Merceders"> Merceders </option>
          <option value="BMW"> BMW </option>
          <option value="Jaguar"> Jaguar </option>
          <option value="Lamborghini"> Lamborghini </option>
          <option value="Ferrari"> Ferrari </option>
          <option value="Ford"> Ford </option>
        </select>
      </aside>
      <main className="rank_body">
        <header className="header">
          <h1>2023 스트리머 랭킹</h1>
          <div className="stats">{/* 통계 박스 */}</div>
        </header>

        <div className="tableContainer">
          <table className="ranking-table-header">
            <thead>
              <tr>
                <th>순위</th>
                <th>아바타</th>
                <th>이름</th>
                <th>점수</th>
              </tr>
            </thead>
          </table>
          <div className="tableScroll">
            <table className="ranking-table">
              <tbody>
                {streamerData.map((streamer, index) => (
                  <tr key={index}>
                    <td>{streamer.rank}</td>
                    <td>
                      <Link to={`/board/${streamer.rank}`}>
                        <img
                          src={streamer.avatar}
                          alt={`스트리머${streamer.rank}`}
                          className="avatar"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/board/${streamer.rank}`}>
                        {streamer.name}
                      </Link>
                    </td>
                    <td className="points">{streamer.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ... */}
      </main>
    </div>
  );
}
