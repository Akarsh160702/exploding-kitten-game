<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exploding Kittens Game Project</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        header h1 {
            text-align: center;
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            background: #fff;
            margin-top: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        section {
            margin-bottom: 20px;
        }
        h2, h3 {
            color: #333;
        }
        ul, ol {
            list-style: none;
            padding: 0;
        }
        ul li, ol li {
            background: #f4f4f9;
            margin: 5px 0;
            padding: 10px;
            border: #ccc 1px solid;
            border-radius: 5px;
        }
        a {
            color: #0066cc;
            text-decoration: none;
        }
        pre {
            background: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
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
            <ol>
                <li>Navigate to the `Frontend` directory and start the development server:
                    <pre><code>npm run dev</code></pre>
                </li>
                <li>Open a new terminal and start the Redis server:
                    <pre><code>redis-server</code></pre>
                </li>
                <li>Open another terminal, navigate to the `Backend` directory, and run the Node.js server:
                    <pre><code>node server.js</code></pre>
                </li>
                <li>Open a final terminal and run the Go server:
                    <pre><code>go run main.go</code></pre>
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
