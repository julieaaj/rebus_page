// Define passwords for each team (ensure security in a real application)
const teamPasswords = {
    "team1": "Ostepop",
    "team2": "Hestesko",
    "team3": "Oskarkatt"
};

// Define the task map for each team; maps post filenames to tasks
const taskMap = {
    "team1": {"post3": 1, "post6": 2, "post1": 3, "post7": 4, "post2": 5, "post5": 6, "post4": 7, "post8": 8},
    "team2": {"post2": 1, "post5": 2, "post3": 3, "post1": 4, "post6": 5, "post4": 6, "post7": 7, "post8": 8},
    "team3": {"post1": 1, "post4": 2, "post2": 3, "post5": 4, "post7": 5, "post6": 6, "post3": 7, "post8": 8}
};


function promptPassword(team) {
    var password = prompt("Skriv lag-passordet deres:", "");
    verifyTeam(team, password);
}

function verifyTeam(team, password) {
    if (teamPasswords[team] && teamPasswords[team] === password) {
        redirectToTask(team);
    } else {
        alert("Feil passord. Det burde ikke være så jævlig vanskelig, faktisk. U had 1 job?.");
    }
}

function redirectToTask(team) {
    const path = window.location.pathname;
    const baseName = path.substring(path.lastIndexOf('/') + 1);
    const postId = baseName.replace(/[^a-zA-Z0-9]/g, '');

    const taskNumber = taskMap[team][postId];
    window.location.href = `task_${taskNumber}.html`;
}
