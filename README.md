<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Emitter Leaderboard with Redis</h1>

<div class="section">
  <h2>Overview</h2>
  <p>This project is a full-stack application built with Node.js, TypeScript, and Vite. It integrates Redis for high-performance data management, making it ideal for leaderboard functionalities and real-time data updates.</p>
</div>

<div class="section">
  <h2>Features</h2>
  <ul>
    <li><strong>Real-time Leaderboard</strong>: Displays real-time score updates on the leaderboard.</li>
    <li><strong>Redis Caching</strong>: Leverages Redis for fast data retrieval and caching.</li>
    <li><strong>Scalable Architecture</strong>: Designed with scalability in mind using a full-stack setup.</li>
  </ul>
</div>

<div class="section">
  <h2>Prerequisites</h2>
  <p>Please ensure the following software is installed:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (version 14 or above)</li>
    <li><a href="https://redis.io/download">Redis</a></li>
    <li><a href="https://git-scm.com/">Git</a></li>
  </ul>
</div>

<div class="section">
  <h2>Getting Started</h2>
  <p>Follow these steps to set up and run the application on your local environment.</p>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone &lt;repository-url&gt;
cd Emitter-Leaderboard</code></pre>

  <h3>2. Install Dependencies</h3>
  <pre><code>npm install</code></pre>

  <h3>3. Start the Redis Server</h3>
  <p>To enable Redis data storage and caching, you must start the Redis server before launching the backend. Open PowerShell and run the following command:</p>
  <pre><code>redis-server</code></pre>
  <p>Ensure the Redis server is running in the background to allow proper data handling in the application.</p>

  <h3>4. Start the Frontend Development Server</h3>
  <pre><code>npm run dev</code></pre>

  <h3>5. Start the Backend Server</h3>
  <p>In a separate terminal, navigate to the backend directory and run the backend server:</p>
  <pre><code>cd backend
node server.js</code></pre>

  <h3>6. Access the Application</h3>
  <p>Once both the frontend and backend servers are running, open your browser and go to:</p>
  <pre><code>http://localhost:3000</code></pre>
  <p>This URL should display the application. Alternatively, access the live deployment at:</p>
  <a href="https://exploding-kitten-1607.netlify.app/" target="_blank">https://exploding-kitten-1607.netlify.app/</a>
</div>

<div class="section">
  <h2>Build for Production</h2>
  <p>To create a production-ready build, run the following command:</p>
  <pre><code>npm run build</code></pre>
  <p>This command will bundle the application using Vite, preparing it for deployment.</p>
</div>

<div class="section">
  <h2>Project Structure</h2>
  <p>An overview of the main files and folders in this project:</p>
  <ul>
    <li><strong>index.html</strong> - Main HTML file for the frontend.</li>
    <li><strong>vite.config.ts</strong> - Vite configuration file.</li>
    <li><strong>tsconfig.json</strong> - TypeScript configuration.</li>
    <li><strong>package.json</strong> - Contains project metadata, scripts, and dependencies.</li>
  </ul>
</div>

<div class="section">
  <h2>Additional Configuration</h2>
  <p>This project includes configurations for:</p>
  <ul>
    <li><strong>ESLint</strong>: Ensures code quality standards.</li>
    <li><strong>PostCSS</strong> and <strong>TailwindCSS</strong>: For utility-first CSS styling.</li>
  </ul>
  <p>These configurations can be customized in the respective files: <code>.eslintrc.js</code>, <code>postcss.config.js</code>, and <code>tailwind.config.js</code>.</p>
</div>

<div class="section">
  <h2>Contributing</h2>
  <p>Contributions are welcome! To contribute, please fork the repository, make your changes, and submit a pull request for review.</p>
</div>

<p>Thank you for exploring the Emitter Leaderboard project! We hope it meets your needs and offers a smooth development experience.</p>

</body>
</html>
