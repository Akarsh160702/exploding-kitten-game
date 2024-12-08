<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exploding Kittens Game Project</title>
</head>
<body>
    <h1 style="text-align: center; color: #333;">Exploding Kittens Game Project</h1>

    <h2>Project Overview</h2>
    <p>This project is a web-based game called "Exploding Kittens". It consists of a frontend built with modern web technologies and a backend powered by Go and Node.js, with Redis and SQLite for data storage.</p>

    <h2>Prerequisites</h2>
    <ul>
        <li><strong>Node.js</strong>: <a href="https://nodejs.org/en/download/" target="_blank">Download and Install Node.js</a></li>
        <li><strong>Go</strong>: <a href="https://golang.org/dl/" target="_blank">Download and Install Go</a></li>
        <li><strong>Redis</strong>: <a href="https://redis.io/download" target="_blank">Download and Install Redis</a></li>
        <li><strong>64-bit MinGW</strong>: Follow the <a href="#mingw-installation">installation steps below</a></li>
    </ul>

    <h2>Installation</h2>
    <h3>Backend Setup</h3>
    <ol>
        <li>Navigate to the <code>Backend</code> directory.</li>
        <li>Install Go dependencies:
            <pre><code>go mod tidy</code></pre>
        </li>
        <li>Install Node.js dependencies:
            <pre><code>npm install</code></pre>
        </li>
    </ol>

    <h3>Frontend Setup</h3>
    <ol>
        <li>Navigate to the <code>Frontend</code> directory.</li>
        <li>Install Node.js dependencies:
            <pre><code>npm install</code></pre>
        </li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li>Navigate to the <code>Frontend</code> directory and start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
        <li>Open a new terminal and start the Redis server:
            <pre><code>redis-server</code></pre>
        </li>
        <li>Open another terminal, navigate to the <code>Backend</code> directory, and run the Node.js server:
            <pre><code>node server.js</code></pre>
        </li>
        <li>Open a final terminal and run the Go server:
            <pre><code>go run main.go</code></pre>
        </li>
    </ol>

    <h2 id="mingw-installation">64-bit MinGW Installation</h2>
    <ol>
        <li>Go to the following link: <a href="https://github.com/niXman/mingw-builds-binaries/releases" target="_blank">MinGW Builds Binaries</a></li>
        <li>Download <code>x86_64-14.2.0-release-mcf-seh-ucrt-rt_v12-rev0.7z</code>.</li>
        <li>Extract the zip file and copy the <code>mingw64</code> folder to the <code>C:/</code> directory.</li>
        <li>Add <code>C:\mingw64\bin</code> to your environment variables.</li>
    </ol>

    <h2>Contributing</h2>
    <p>We welcome contributions! Please fork the repository and submit a pull request for review.</p>
</body>
</html>
