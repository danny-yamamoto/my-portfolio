async function getArticleItemsFromQiita() {
    return [
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
            "title": "hogehoge title",
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
    ]
}

export async function load() {
    const articleItems = await getArticleItemsFromQiita();
    return { articleItems };
}
