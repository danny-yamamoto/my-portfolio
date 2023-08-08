<script>
    let myname = 'Daisuke Yamamoto';
    let twitterProfile = 'https://twitter.com/dai_s_a_n';
    let githubProfile = 'https://github.com/danny-yamamoto';
    export let data;
    $: ({ articleItems } = data);
    /**
    let articleItems = [
        {
            "rendered_body": "<h1>Example</h1>",
            "body": "# Example",
            "coediting": false,
            "comments_count": 100,
            "created_at": "2000-01-01T00:00:00+00:00",
            "group": {
            "created_at": "2000-01-01T00:00:00+00:00",
            "description": "This group is for developers.",
            "name": "Dev",
            "private": false,
            "updated_at": "2000-01-01T00:00:00+00:00",
            "url_name": "dev"
            },
            "id": "c686397e4a0f4f11683d",
            "likes_count": 100,
            "private": false,
            "reactions_count": 100,
            "stocks_count": 100,
            "tags": [
            {
                "name": "Ruby",
                "versions": [
                "0.0.1"
                ]
            }
            ],
            "title": "Example title",
            "updated_at": "2000-01-01T00:00:00+00:00",
            "url": "https://qiita.com/Qiita/items/c686397e4a0f4f11683d",
            "user": {
            "description": "Hello, world.",
            "facebook_id": "qiita",
            "followees_count": 100,
            "followers_count": 200,
            "github_login_name": "qiitan",
            "id": "qiita",
            "items_count": 300,
            "linkedin_id": "qiita",
            "location": "Tokyo, Japan",
            "name": "Qiita キータ",
            "organization": "Qiita Inc.",
            "permanent_id": 1,
            "profile_image_url": "https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/88/ccf90b557a406157dbb9d2d7e543dae384dbb561/large.png?1575443439",
            "team_only": false,
            "twitter_screen_name": "qiita",
            "website_url": "https://qiita.com"
            },
            "page_views_count": 100,
            "team_membership": {
            "name": "Qiita キータ"
            },
            "organization_url_name": "qiita-inc",
            "slide": false
        }
    ];
    */
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name's Portfolio</title>
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
            <li>2023: Your Position @ Your Company Name</li>
            <!-- Continue listing other experiences -->
        </ul>
    </section>

    <!-- Articles Section -->
    <section id="articles">
        <h2>Top 10 Articles</h2>
        <ul>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <li><a href="#">Title of Article 1</a></li>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <li><a href="#">Title of Article 2</a></li>
            <!-- Continue listing other articles -->
            {#each articleItems as item }
                <li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>{item.title}</a>
                </li>
            {/each}
        </ul>
    </section>

    <!-- Certificates Section -->
    <section id="certificates">
        <h2>Certificates</h2>
        <ul>
            <li>Certificate 1</li>
            <li>Certificate 2</li>
            <!-- Continue listing other certificates -->
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
