"use strict";

const BoredApp = (function () {
    async function fetchRandomActivity() {
        try {
            const response = await fetch('http://www.boredapi.com/api/activity');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            console.log(data); // For testing, check the console for fetched data
            displayActivity(data);
        } catch (error) {
            handleError(error);
        }
    }

    async function fetchActivityByKey(key) {
        try {
            const response = await fetch(`http://www.boredapi.com/api/activity?key=${key}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            console.log(data); // For testing, check the console for fetched data
            displayActivity(data);
        } catch (error) {
            handleError(error);
        }
    }

    async function fetchActivityByType(type) {
        try {
            const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            console.log(data); // For testing, check the console for fetched data
            displayActivity(data);
        } catch (error) {
            handleError(error);
        }
    }

    function displayActivity(data) {
        const dataDisplay = document.getElementById('dataDisplay');

        const activityElement = document.createElement('div');
        activityElement.innerHTML = `
            <h3>${data.activity}</h3>
            <p>Type: ${data.type}</p>
            <p>Accessibility: ${data.accessibility}</p>
            <p>Participants: ${data.participants}</p>
            <p>Price: ${data.price}</p>
        `;
        dataDisplay.appendChild(activityElement);
    }

    function handleError(error) {
        console.error('Error:', error.message);
        const dataDisplay = document.getElementById('dataDisplay');
        dataDisplay.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    }

    return {
        fetchRandomActivity,
        fetchActivityByKey,
        fetchActivityByType
    };
})();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("getRandom").addEventListener("click", () => BoredApp.fetchRandomActivity());
    document.getElementById("getByKey").addEventListener("click", () => BoredApp.fetchActivityByKey('5881028'));
    document.getElementById("getByType").addEventListener("click", () => BoredApp.fetchActivityByType('recreational'));
});
