<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exploding Kittens Game Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #77aaff 3px solid;
        }
        header a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        .content {
            padding: 20px;
            background: #fff;
            margin-top: 20px;
        }
        .prerequisites, .installation, .usage, .contributing {
            margin-bottom: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            background: #f4f4f9;
            margin: 5px 0;
            padding: 10px;
            border: #ccc 1px solid;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Exploding Kittens Game Project</h1>
        </div>
    </header>
    <div class="container content">
        <section class="description">
            <h2>Project Overview</h2>
            <p>This project is a web-based game called "Exploding Kittens". It consists of a frontend built with modern web technologies and a backend powered by Go and Node.js, with Redis and SQLite for data storage.</p>
        </section>
        <section class="prerequisites">
            <h2>Prerequisites</h2>
            <ul>
                <li>Node.js - <a href="https://nodejs.org/en/download/">Download and Install Node.js</a></li>
                <li>Go - <a href="https://golang.org/dl/">Download and Install Go</a></li>
                <li>Redis - <a href="https://redis.io/download">Download and Install Redis</a></li>
            </ul>
        </section>
        <section class="installation">
            <h2>Installation</h2>
            <h3>Backend Setup</h3>
            <ol>
                <li>Navigate to the `Backend` directory.</li>
                <li>Install Go dependencies:
                    <pre><code>go mod tidy</code></pre>
                </li>
                <li>Install Node.js dependencies:
                    <pre><code>npm install</code></pre>
                </li>
            </ol>
            <h3>Frontend Setup</h3>
            <ol>
                <li>Navigate to the `Frontend` directory.</li>
                <li>Install Node.js dependencies:
                    <pre><code>npm install</code></pre>
                </li>
            </ol>
        </section>
        <section class="usage">
            <h2>Usage</h2>
            <h3>Running the Backend</h3>
            <ol>
                <li>Start Redis server:
                    <pre><code>redis-server</code></pre>
                </li>
                <li>Run the Go server:
                    <pre><code>go run main.go</code></pre>
                </li>
                <li>Run the Node.js server:
                    <pre><code>node server.js</code></pre>
                </li>
            </ol>
            <h3>Running the Frontend</h3>
            <ol>
                <li>Navigate to the `Frontend` directory.</li>
                <li>Run the development server:
                    <pre><code>npm run dev</code></pre>
                </li>
            </ol>
        </section>
        <section class="contributing">
            <h2>Contributing</h2>
            <p>We welcome contributions! Please fork the repository and submit a pull request for review.</p>
        </section>
    </div>
</body>
</html>
