// Sample data (replace with real data from API in a production environment)
const socialMediaData = {
    followers: 10234,
    likes: 8739,
    comments: 1829,
    shares: 972,
};

const posts = [
    { id: 1, content: "Excited to announce our new product launch! 🚀 #NewProduct", likes: 543, comments: 78, shares: 102 },
    { id: 2, content: "Thank you for 10k followers! We couldn't have done it without you. ❤️ #Milestone", likes: 1205, comments: 234, shares: 89 },
    { id: 3, content: "How are you using our latest feature? Share your experience below! 👇 #CustomerFeedback", likes: 367, comments: 156, shares: 45 }
];

const messages = [
    { id: 1, sender: "John Doe", content: "Great content! Keep it up.", timestamp: "2023-05-01 10:30:00" },
    { id: 2, sender: "Jane Smith", content: "When is your next sale? I can't wait!", timestamp: "2023-05-02 14:15:00" },
    { id: 3, sender: "Bob Johnson", content: "I love your products. They've really improved my workflow.", timestamp: "2023-05-03 09:45:00" }
];

// Function to update dashboard stats
function updateDashboardStats() {
    const statsContainer = document.querySelector('.dashboard-grid');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="card followers">
                <i class="fas fa-users"></i>
                <h3>Followers</h3>
                <p class="number">${socialMediaData.followers.toLocaleString()}</p>
                <p class="change positive">+2.6%</p>
            </div>
            <div class="card likes">
                <i class="fas fa-heart"></i>
                <h3>Likes</h3>
                <p class="number">${socialMediaData.likes.toLocaleString()}</p>
                <p class="change positive">+1.4%</p>
            </div>
            <div class="card comments">
                <i class="fas fa-comment"></i>
                <h3>Comments</h3>
                <p class="number">${socialMediaData.comments.toLocaleString()}</p>
                <p class="change negative">-0.8%</p>
            </div>
            <div class="card shares">
                <i class="fas fa-share"></i>
                <h3>Shares</h3>
                <p class="number">${socialMediaData.shares.toLocaleString()}</p>
                <p class="change positive">+3.2%</p>
            </div>
        `;
    }
}

// Function to create engagement chart
function createEngagementChart() {
    const ctx = document.getElementById('engagementChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Engagement Rate',
                    data: [4.2, 3.8, 4.5, 4.9, 4.7, 5.2],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6
                    }
                }
            }
        });
    }
}

// Function to display posts
function displayPosts() {
    const postsContainer = document.querySelector('.posts-container');
    if (postsContainer) {
        postsContainer.innerHTML = posts.map(post => `
            <div class="post">
                <p>${post.content}</p>
                <div class="post-stats">
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments}</span>
                    <span><i class="fas fa-share"></i> ${post.shares}</span>
                </div>
            </div>
        `).join('');
    }
}

// Function to display messages
function displayMessages() {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
        messagesContainer.innerHTML = messages.map(message => `
            <div class="message">
                <h3>${message.sender}</h3>
                <p>${message.content}</p>
                <div class="message-info">
                    <span>${message.timestamp}</span>
                </div>
            </div>
        `).join('');
    }
}

// Function to create analytics charts
function createAnalyticsCharts() {
    // Followers Growth Chart
    const followersCtx = document.getElementById('followersChart');
    if (followersCtx) {
        new Chart(followersCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Followers',
                    data: [8000, 8500, 9200, 9800, 10200, 10234],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    // Engagement Rate Chart
    const engagementCtx = document.getElementById('engagementChart');
    if (engagementCtx) {
        new Chart(engagementCtx, {
            type: 'bar',
            data: {
                labels: ['Likes', 'Comments', 'Shares'],
                datasets: [{
                    label: 'Engagement',
                    data: [socialMediaData.likes, socialMediaData.comments, socialMediaData.shares],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Post Performance Chart
    const postPerformanceCtx = document.getElementById('postPerformanceChart');
    if (postPerformanceCtx) {
        new Chart(postPerformanceCtx, {
            type: 'radar',
            data: {
                labels: ['Reach', 'Engagement', 'Likes', 'Comments', 'Shares'],
                datasets: [{
                    label: 'Average Post Performance',
                    data: [80, 65, 75, 60, 70],
                    fill: true,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    pointBackgroundColor: 'rgb(75, 192, 192)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(75, 192, 192)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
}

// Initialize dashboard based on current page
function initDashboard() {
    const currentPage = window.location.pathname.split('/').pop();

    switch (currentPage) {
        case 'index.html':
            updateDashboardStats();
            createEngagementChart();
            break;
        case 'posts.html':
            displayPosts();
            break;
        case 'messages.html':
            displayMessages();
            break;
        case 'analytics.html':
            createAnalyticsCharts();
            break;
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);