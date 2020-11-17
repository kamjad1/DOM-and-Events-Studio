window.addEventListener("load", function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let landingButton = document.getElementById('landing');
    let abortMissionButton = document.getElementById('missionAbort');
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let leftButton = document.getElementById('left');
    let rightButton = document.getElementById('right');
    let rocket = document.getElementById('rocket');
    let rocketPosition = 0;

    function moveShuttleUp () {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }

    function moveShuttleDown () {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        if (spaceShuttleHeight.innerHTML < 0) {
            spaceShuttleHeight.innerHTML = Number(0);
        }
    }

    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
           
            moveShuttleUp();
            upButton.addEventListener('click', moveShuttleUp);
        
            downButton.addEventListener('click', moveShuttleDown);
        }
    });

    landingButton.addEventListener("click", function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = Number(0);

        upButton.removeEventListener('click', moveShuttleUp);
        downButton.removeEventListener('click', moveShuttleDown);
    });
    
    landingButton.addEventListener("mouseover", function(event) {
        landingButton.style.backgroundColor = 'yellow';
    });
  
    landingButton.addEventListener("mouseout", function(event) {
        landingButton.style.backgroundColor = '';
    });

    abortMissionButton.addEventListener('click', function() {
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });
   
    leftButton.addEventListener('click', function() {
        rocketPosition -= 10;
        rocket.style.position = "relative";
        rocket.style.transform = `translateX(${rocketPosition}px)`;    
    });

    rightButton.addEventListener('click', function() {      
        rocketPosition += 10
        rocket.style.position = "relative";
        rocket.style.transform = `translateX(${rocketPosition}px)`;
    });
});
