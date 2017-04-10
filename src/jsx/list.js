import React from 'react';
import ReactDOM from 'react-dom';

const baseballTeams = [
  { name: 'kt', rank: 1, games: 8, win: 7, draw: 0, lose: 1 },
  { name: 'LG', rank: 2, games: 8, win: 6, draw: 0, lose: 2 },
  { name: 'KIA', rank: 2, games: 8, win: 6, draw: 0, lose: 2 },
  { name: '롯데', rank: 2, games: 8, win: 6, draw: 0, lose: 2 },
  { name: '두산', rank: 5, games: 8, win: 3, draw: 0, lose: 5 },
  { name: 'NC', rank: 5, games: 8, win: 3, draw: 0, lose: 5 },
  { name: '넥센', rank: 5, games: 8, win: 3, draw: 0, lose: 5 },
  { name: '한화', rank: 5, games: 8, win: 3, draw: 0, lose: 5 },
  { name: 'SK', rank: 9, games: 8, win: 2, draw: 0, lose: 6 },
  { name: '삼성', rank: 10, games: 8, win: 1, draw: 0, lose: 7 }
];

const TeamRow = ({ team }) => {
  const { name, rank, games, win, draw, lose } = team;

  return (
    <tr>
      <th scope="row"><span>{rank}</span></th>
      <td>
        <div className="wrap">
          <div className="info">
            <span className="name">{name}</span>
          </div>
        </div>
      </td>
      <td><span>{games}</span></td>
      <td><span>{win}</span></td>
      <td><span>{draw}</span></td>
      <td><span>{lose}</span></td>
    </tr>
  );
}

const TeamRank = ({ teams }) => {
  const teamList = teams.map((team, index) => <TeamRow key={index} team={team} />)

  return (
    <div className="hmb_tbl">
      <table className="kbo">
        <caption>2017 KBO리그 팀순위</caption>
        <thead>
          <tr>
            <th scope="col" className="th_num"><span className="blind">순번</span></th>
            <th scope="col" className="th_team"><span>팀명</span></th>
            <th scope="col"><span>경기</span></th>
            <th scope="col"><span>승</span></th>
            <th scope="col"><span>무</span></th>
            <th scope="col"><span>패</span></th>
          </tr>
        </thead>
        <tbody>
          {teamList}
        </tbody>
      </table>
    </div>
  )
};

ReactDOM.render(
  <TeamRank teams={baseballTeams} />,
  document.getElementById('root')
);
