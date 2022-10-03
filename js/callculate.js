const PlayerArray = [];

function displayPlayerName(players) {
    const tableBody = document.getElementById('players-name');
    tableBody.innerHTML = '';
    // console.log(players.length);
    for (let i = 0; i <= players.length; i++){
        // console.log(PlayerArray[i].playerName);
        if (i >= 5) {
            break;
        }

        const name = PlayerArray[i].playerName;
        // console.log(name);

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

    
}


function selectFavPlayer(element) {
    // console.log('clicked');
    const playersName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);


    const playerObj = {
        playerName: playersName
        
    }
    PlayerArray.push(playerObj);

    // console.log(PlayerArray);
    // console.log(PlayerArray.length);

    const totalSelectedPlayer = document.getElementById('slect-player');
    totalSelectedPlayer.innerText = PlayerArray.length;
    console.log(PlayerArray.length);



    displayPlayerName(PlayerArray);


    
}