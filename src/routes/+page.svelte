<script>
    let myname = 'Daisuke Yamamoto';
    let nickname = 'danny';
    let twitterProfile = 'https://twitter.com/dai_s_a_n';
    let githubProfile = 'https://github.com/danny-yamamoto';
    export let data;
    $: ({ experiences, articleItems, certificates } = data);
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{nickname}'s Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>

<body>

    <!-- Introduction Section -->
    <section id="intro">
        <h1>{myname}</h1>
        <p>Welcome to my portfolio</p>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <h2>Experience</h2>
        <ul>
            {#each experiences as experience }
                <li>{experience.id}: {experience.position} @ {experience.company}</li>
            {/each}
        </ul>
    </section>

    <!-- Articles Section -->
    <section id="articles">
        <h2>Top 10 Articles</h2>
        <ul>
            <!-- Continue listing other articles -->
            {#each articleItems as item }
                <li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a href="{item.url}" target="_blank">{item.title}</a>
                </li>
            {/each}
        </ul>
    </section>

    <!-- Certificates Section -->
    <section id="certificates">
        <h2>Certificates</h2>
        <ul>
            {#each certificates as certificate }
                <li>{certificate.title}</li>
            {/each}
        </ul>
    </section>

    <footer>
        <p>&copy; 2023 {myname}. All rights reserved.</p>
        <div class="social-links">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="{githubProfile}" target="_blank"><i class="fab fa-github"></i></a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="{twitterProfile}" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
    </footer>

</body>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        line-height: 1.6;
    }

    section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #intro {
        background-color: #333;
        color: #fff;
    }

    #articles {
        background-color: #ddd;
    }

    h1, h2 {
        margin: 0 0 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        margin-bottom: 10px;
    }

    a {
        color: #0077cc;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 1rem 0;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .social-links a {
        color: #fff;
        font-size: 1.5rem;
        margin-left: 10px;
        text-decoration: none;
    }

    .social-links a:hover {
        color: #0077cc;
    }
</style>
