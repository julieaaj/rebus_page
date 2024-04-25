// Define passwords for each team (ensure security in a real application)
const teamPasswords = {
    "team1": "1",
    "team2": "2",
    "team3": "3"
};

// Define the task map for each team; maps post filenames to tasks
const taskMap = {
    "team1": {"post4": 1, "post2": 2, "post7": 3, "post1": 4, "post5": 5, "post3": 6, "post6": 7, "post8": 8},
    "team2": {"post1": 1, "post3": 2, "post2": 3, "post5": 4, "post4": 5, "post6": 6, "post7": 7, "post8": 8},
    "team3": {"post2": 1, "post4": 2, "post1": 3, "post3": 4, "post7": 5, "post5": 6, "post6": 7, "post8": 8}
};

function promptPassword(team) {
    var password = prompt("Please enter your password:", "");
    verifyTeam(team, password);
}

function verifyTeam(team, password) {
    if (teamPasswords[team] && teamPasswords[team] === password) {
        redirectToTask(team);
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function redirectToTask(team) {
    const path = window.location.pathname;
    const baseName = path.substring(path.lastIndexOf('/') + 1);
    const postId = baseName.replace(/[^a-zA-Z0-9]/g, '');

    const taskNumber = taskMap[team][postId];
    window.location.href = `task_${taskNumber}.html`;
}
