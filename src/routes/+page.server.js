import { json } from '@sveltejs/kit';

async function getArticleItemsFromQiita() {
    const url = "https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=10";
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getExperienceFromDatabase() {
    return [
        {
            id: '2022-09',
            company: 'Retail AI X Inc.',
            position: 'Lead Engineer',
        },
        {
            id: '2021-06',
            company: 'Retail AI X Inc.',
            position: 'Software Engineer',
        },
        {
            id: '2020-06',
            company: 'Retail AI Engineering Inc.',
            position: 'Software Engineer',
        }
    ]
}

async function getCertificatesFromDatabase() {
    return [
        {
            blockchainId: '732838',
            title: 'Google Cloud Certified - Professional Cloud Developer',
        },
        {
            blockchainId: '672721',
            title: 'Google Cloud Certified - Professional Cloud Architect',
        }
    ]
}

export async function load() {
    const articleItems = await getArticleItemsFromQiita();
    const experiences = await getExperienceFromDatabase();
    const certificates = await getCertificatesFromDatabase();
    return { experiences, articleItems, certificates };
}
