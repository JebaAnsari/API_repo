 async function newApi(){

            try{
            const request = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
            const dataNew = await request.json();
            console.log(dataNew);
            const tableBody = document.querySelector('#mytable tbody');
            
            dataNew.forEach((spell, index) => {
    // Only proceed if the index is an even number
    if ((index + 1) % 4 === 0) {
        const row = document.createElement('tr');

        // Creating three cells for id, spell, and use
        const idCell = document.createElement('td');
        const spellCell = document.createElement('td');
        const useCell = document.createElement('td');

        idCell.textContent = index + 1; // Displaying the index as the ID
        spellCell.textContent = spell.spell || 'N/A';
        useCell.textContent = spell.use || 'N/A';

        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(spellCell);
        row.appendChild(useCell);

        // Append the row to the table body
        document.querySelector('#mytable tbody').appendChild(row);
    }
});

        }
        catch(error){
            console.log('Something went wrong',erro);
        }

        }
        newApi();


    
      const url = "https://api.github.com/users/JebaAnsari";

      async function apichart() {
        // Fetch data from the API
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // For debugging

        if (data && data.name && data.public_repos !== undefined) {
          // Ensure the canvas is loaded before creating the chart
          const ctx = document.getElementById("myChart").getContext("2d");

          // Create the chart
          const myChart = new Chart(ctx, {
            type: "pie", // Bar chart type
            data: {
              labels: [
                `GitHub User: ${data.name}`,
                `Followers:${data.followers}`,
                `Following:${data.following}`,
                "Green",
                "Purple",
                "Orange",
              ], // Dynamic labels
              datasets: [
                {
                  label: "GitHub Data Points",
                  data: [data.public_repos, data.followers
                  , data.following, 5, 2, 3], // Dynamic data from API and static data
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true, // Y-axis starts from 0
                },
              },
            },
          });
        } else {
          console.error("API data is incomplete or not as expected.");
        }
      }

      // Call the function to fetch data and display the chart
      apichart();
