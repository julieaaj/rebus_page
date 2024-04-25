// Define passwords for each team (securely managed)
const teamPasswords = {
    "team1": "password1",
    "team2": "password2",
    "team3": "password3"
};

// Define the task map for each team; maps post filenames to tasks
// Each team's array must be in the order they will visit the posts
const taskMap = {
    "team1": {"post4": 1, "post2": 2, "post7": 3, "post1": 4, "post5": 5, "post3": 6, "post6": 7, "post8": 8},
    "team2": {"post1": 1, "post3": 2, "post2": 3, "post5": 4, "post4": 5, "post6": 6, "post7": 7, "post8": 8},
    "team3": {"post2": 1, "post4": 2, "post1": 3, "post3": 4, "post7": 5, "post5": 6, "post6": 7, "post8": 8}
};

function verifyTeam() {
    const team = document.getElementById("team").value;
    const password = document.getElementById("password").value;

    if (teamPasswords[team] && teamPasswords[team] === password) {
        redirectToTask(team);
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function redirectToTask(team) {
    // Get the pathname to determine the current post's ID
    const path = window.location.pathname;
    const baseName = path.substring(path.lastIndexOf('/') + 1);
    const postId = baseName.replace(/[^a-zA-Z0-9]/g, ''); // Assuming filenames like post1.html, post2.html

    // Retrieve task number for current team and post ID
    const taskNumber = taskMap[team][postId];
    window.location.href = `task_${taskNumber}.html`;
}
