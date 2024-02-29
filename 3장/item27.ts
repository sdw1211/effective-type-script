// 아이템27 함수형 기법과 라이브러리로 타입 흐름 유지하기

// 자바스크립트는 표준 라이브러리가 없다. 예전부터 jquery, lodash, Ramda 가 그역할을 하고 있었다.
// 위 라이브러리와 타입스크립트가 조합해서 사용하면 좋다.

import zipObject from 'lodash/zipObject';
import maxBy from 'lodash/maxBy';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import _ from 'lodash';

const csvData =  '';
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');
type CSVRow = {
    [key: string]: string
}

const rows = rawRows.slice(1).map(rowStr => {
    const row: CSVRow = {};
    rowStr.split(',').forEach((val, j) => {
        row[headers[j]] = val;
    });
    return row;
})

const rows2 = rawRows.slice(1).map(rowStr => rowStr.split(',').reduce((row, val, i) => (row[headers[i]] = val, row), {} as CSVRow));
const rows3 = rawRows.slice(1).map(rowStr => zipObject(headers, rowStr.split(',')));


type BasketballPlayer = {
    name: string;
    team: string;
    salary: number;
}

declare const rosters: {[team: string]: BasketballPlayer[]}

let allPlayer: BasketballPlayer[] = [];

for(const players of Object.values(rosters)) {
    allPlayer = allPlayer.concat(players);
}

// T[][] ==> T[]
let allPlaye2 = Object.values(rosters).flat();

// 팀별로 연봉 순으로 정렬

const teamPlayers: {[team: string]: BasketballPlayer[]} = {};
for (const player of allPlayer) {
    const {team} = player;
    teamPlayers[team] = teamPlayers[team] || [];
    teamPlayers[team].push(player);
}

for (const players of Object.values(teamPlayers)) {
    players.sort((a,b) => b.salary - a.salary);
}

// 먼가 복잡한 로직

const bestPaid = _(allPlayer)
    .groupBy(player => player.team)
    .mapValues(players => maxBy(players, p => p.salary))
    .values()
    .sortBy(p => -p?.salary)
    .value();
    



export {};