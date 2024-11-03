// script file of api.html
async function fetchData() {
    try {
        const usernames = ['defunkt', 'mojombo'];
        // const usernames = ['mojombo'];
        const mainCard = document.querySelector('#card-container');

        for (let username of usernames) {
            // made changes 
            console.log(`Fetching data for ${username}`);

            // Fetch user data
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            if (!userResponse.ok) {
                throw new Error(`Failed to fetch user data for ${username}: ${userResponse.status}`);
            }
            const userData = await userResponse.json();

            // Fetch repositories for the user
            const reposResponse = await fetch(userData.repos_url);
            if (!reposResponse.ok) {
                throw new Error(`Failed to fetch repositories for ${username}: ${reposResponse.status}`);
            }
            const reposData = await reposResponse.json();
            console.log(reposData); // Log reposData to inspect its structure

            // Check if reposData is an array
            if (reposData && Array.isArray(reposData)) {
                reposData.forEach(repo => {
                    const div = document.createElement('div');
                    const title = document.createElement('h3');
                    const button = document.createElement('button');
                    const link = document.createElement('a');

                    div.className = 'card';
                    title.className = 'heading';
                    button.className = 'btn';
                    
                    title.textContent = repo.name; // Use actual repname
                    link.href = repo.html_url;
                    link.target = "_blank";
                    
                    button.textContent = "View More";

                    link.appendChild(button);
                    div.appendChild(title);
                    div.appendChild(link);
                    mainCard.appendChild(div);
                });
            } else {
                console.error('Expected reposData to be an array but received:', reposData);
            }
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();
