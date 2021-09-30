const stadium = document.querySelector('.stadium');
const matchDate = document.querySelector('.mDate');
const liveORupcm = document.getElementById('liveorup');
const matchNo = document.querySelector('.matchno');
const name1 = document.querySelector('#name1');
const logo1 = document.querySelector('#logo1');
const logo2 = document.querySelector('#logo2');
const name2 = document.querySelector('#name2');
const mTime = document.querySelector('.time');
const contain = document.querySelector('.container');

//competitions/121217/matches
//seasons/2021/competitions

function upComingMatch(e) {

  //match div 
  let everyMatch = document.createElement('div');
  everyMatch.classList.add('match');
  contain.appendChild(everyMatch);
  //std name & date  div 
  let stdDate = document.createElement('div');
  stdDate.classList.add('stadiumDate');
  everyMatch.appendChild(stdDate);
  let p1 = document.createElement('p');
  p1.classList.add('stadium');
  stdDate.appendChild(p1);
  let p2 = document.createElement('p');
  p2.classList.add('mDate');
  stdDate.appendChild(p2);
  p1.innerHTML = e.venue.name;
  p2.innerHTML = e.date_start;

  //match details  div 
  let matchDetail = document.createElement('div');
  matchDetail.classList.add('matchdetail');
  everyMatch.appendChild(matchDetail);

  //  live up coming  div 
  let landUp = document.createElement('div');
  landUp.classList.add('liveOrupcoming');
  matchDetail.appendChild(landUp);
  // child of live or upcoming  div 
  let div1 = document.createElement('div');
  div1.classList.add('left-circle');
  landUp.appendChild(div1);

  let div2 = document.createElement('div');
  div2.classList.add('rigth-rect');
  landUp.appendChild(div2);


  let p = document.createElement('p');
  p.setAttribute('id', 'liveorup');
  p.innerHTML = 'UPCOMING';
  div2.appendChild(p);


  let div3 = document.createElement('div');
  div3.classList.add('matchno');
  landUp.appendChild(div3);
  div3.innerHTML = e.subtitle;

  // team div 

  let team1andteam2 = document.createElement('div');
  team1andteam2.classList.add('teams');
  matchDetail.appendChild(team1andteam2);

  //  child  of  team div  
  //1st child of team div  
  let team1div1 = document.createElement('div');
  team1div1.classList.add('team1');
  team1andteam2.appendChild(team1div1);
  
  //name1 div
  let teamdiv1P = document.createElement('p');
  teamdiv1P.setAttribute('id', 'name1');
  team1div1.appendChild(teamdiv1P);
  teamdiv1P.innerHTML = e.teama.name;
  let teamdiv1img = document.createElement('img');
  teamdiv1img.setAttribute('id', 'logo1');
  team1div1.appendChild(teamdiv1img);
  teamdiv1img.src = e.teama.logo_url;


  ////2nd  child of team div  or  VS div
  let teamdiv2VS = document.createElement('div');
  teamdiv2VS.classList.add('vs');
  team1andteam2.appendChild(teamdiv2VS);
  teamdiv2VS.innerHTML = 'VS';

  // 3rd child of team div or team2 div
  let teamdiv3 = document.createElement('div');
  teamdiv3.classList.add('team2');
  team1andteam2.appendChild(teamdiv3);

  //name2 
  let teamdiv3img = document.createElement('img');
  teamdiv3img.setAttribute('id', 'logo2');
  teamdiv3.appendChild(teamdiv3img);
  teamdiv3img.src = e.teamb.logo_url

  let teamdiv3P = document.createElement('p');
  teamdiv3P.setAttribute('id', 'name2');
  teamdiv3.appendChild(teamdiv3P);
  teamdiv3P.innerHTML = e.teamb.name;



  //time div
  let teamdiv4 = document.createElement('div');
  teamdiv4.classList.add('time');
  team1andteam2.appendChild(teamdiv4);

  let date2 = new Date(e.timestamp_start);
  teamdiv4.innerHTML = date2.getHours() + ':00' + ' PM';;


  let hr = document.createElement('hr');
  everyMatch.appendChild(hr);

}
const endPoint = "https://rest.entitysport.com/v2/rounds/121563/matches/?token=437214169d9be2a73e91d22f76f68b52&per_page=10&&paged=1";

fetch(endPoint, {
  method: "GET",
  mode: 'cors',
  'Access-Control-Allow-Origin': '*'

})
  .then(response => response.json())
  .then(result => {
    console.log('req res:' + result);

    let competetions = result['response'];
    
    const arr = [];
    arr.push(...competetions.matches);
    console.log('total match:' + arr.length);
    //First match only 
    stadium.innerHTML = arr[0].venue.name;
    matchDate.innerHTML = arr[0].date_start;
    //liveORupcm
    matchNo.innerHTML = arr[0].subtitle;
    name1.innerHTML = arr[0].teama.name;
    logo1.innerHTML = arr[0].teama.logo_url;
    logo1.src = 'https://cricket.entitysport.com/assets/uploads/2020/12/Australia.png';
    name2.innerHTML = arr[0].teamb.name;
    logo2.innerHTML = arr[0].teamb.logo_url;
    logo2.src = 'https://cricket.entitysport.com/assets/uploads/2020/12/South_Africa.png';
    let date = new Date(arr[0].timestamp_start);

    mTime.innerHTML = date.getHours() + ':00' + ' PM';
    // First match end

    for (let i = 1; i < arr.length; i++) {
      console.log(arr[i]);
      upComingMatch(arr[i]);
    }

  })
  .catch(error => console.log('Error'));



