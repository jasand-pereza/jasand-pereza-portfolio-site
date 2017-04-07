let DataWorkGrid = {
    getCatsByIds(ids, getFirst=true) {
        let cats = [];

        ids.forEach((id) => {
            this.categories.forEach((cat) => {
                if(id === cat.id) {
                    cats.push(cat.name);
                } 
            });
        });
        return cats.join(', ');
    },
    categories: [
        { id: 1, name: 'website' },
        { id: 2, name: 'design' },
        { id: 3, name: 'app' },
        { id: 4, name: 'video' },
        { id: 5, name: 'data visualization' },
        { id: 6, name: 'illustration' },
        { id: 7, name: 'art direction' },
    ],
    filters: [
        { name: 'web', categories: [1,3,4,5] },
        { name: 'design', categories: [2] },
        { name: 'code >', categories: null, url: 'https://www.github.com/jasand-pereza' }
    ],
    work: [
        {
            slug: 'ntt-data-healhcare',
            title: 'NTT DATA Healthcare',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consequat mi. Duis venenatis urna vel tortor dictum mollis. Nam commodo lacus sit amet tincidunt facilisis. Integer ut metus egestas purus rutrum blandit. Donec at arcu suscipit mi tempor rutrum sed at orci. Mauris sed dictum tortor. Maecenas finibus sapien eget feugiat tempor.',
            order: 0,
            thumbSrc: 'ntt-data-healthcare-thumb.jpg',
            images: [
                { 
                    src: 'ntt-data-healthcare-1.jpg',
                    title: 'healthcare-1',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consequat mi. '
                },
                { 
                    src: 'ntt-data-healthcare-2.jpg',
                    title: 'healthcare-2',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consequat mi. '
                },
                { 
                    src: 'ntt-data-healthcare-3.jpg',
                    title: 'healthcare-3',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consequat mi. '
                },
                
            ],
            categories: [1]
        },
        {
            slug: 'fire-adapted-network',
            title: 'Fire Adapted Network Website',
            body: null,
            order: 2,
            thumbSrc: 'fireadaptednetwork-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,3]
        },
        {
            slug: 'ntt-data-healhcare',
            title: 'NTT DATA Healthcare',
            body: null,
            order: 2,
            thumbSrc: 'ntt-data-healthcare-thumb-2.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'ntt-data-holiday-card',
            title: 'NTT DATA Holiday Card',
            body: null,
            order: 3,
            thumbSrc: 'jackfrost-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,6,7]
        },
        {
            slug: 'deans-for-impact',
            title: 'Deans for Impact Website',
            body: null,
            order: 3,
            isThumbDark: true,
            thumbSrc: 'deansforimpact-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'the-conversation-project-in-boulder-county',
            title: 'The Conversation Project – Boulder',
            body: null,
            order: 3,
            thumbSrc: 'conversation-project-boulder-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2]
        },
        {
            slug: 'bar-louie-website',
            title: 'Bar Louie Website',
            body: null,
            order: 3,
            thumbSrc: 'barlouie-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2]
        },
        {
            slug: 'your-spaces',
            title: 'YourSpaces Website',
            body: null,
            order: 3,
            thumbSrc: 'spaces-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'door-to-door-organics-app',
            title: 'Door to Door Organics How it Works App',
            body: null,
            order: 3,
            thumbSrc: 'dtdo-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'city-of-boulder-zero-waste-microsite',
            title: 'Zero Waste – City of Boulder',
            body: null,
            order: 3,
            thumbSrc: 'city-of-boulder-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'campaign-for-action',
            title: 'Campaign for Action Website',
            body: null,
            order: 3,
            thumbSrc: 'ccna-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'chicago-content-writing',
            title: 'Chicago Content Writing Website',
            body: null,
            order: 3,
            thumbSrc: 'chicago-content-writing-thumb.jpg',
            images: null,
            categories: [1,2]
        },
        {
            slug: 'climate-voices-website',
            title: 'Climate Voices Website',
            body: null,
            order: 3,
            thumbSrc: 'climate-voices-thumb.jpg',
            images: null,
            categories: [1,3]
        },
        {
            slug: 'grizly-jacks-enchanted-forest-website',
            title: 'Grizzly Jacks Enchanted Forest – Website',
            body: null,
            order: 3,
            thumbSrc: 'enchanted-forest-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,7,3]
        },
        {
            slug: 'revere-group-app',
            title: 'Revere Group App',
            body: null,
            order: 3,
            thumbSrc: 'revere-group-thumb.jpg',
            images: null,
            categories: [3,7]
        },
        {
            slug: 'card-shark-website',
            title: 'Card Shark iPhone Wallet Skin – Website',
            body: null,
            order: 3,
            thumbSrc: 'card-shark-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2]
        },
        {
            slug: 'browser-mario',
            title: 'Broser Mario',
            body: null,
            order: 3,
            thumbSrc: 'browser-mario-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [3]
        }
    ]
};

export default DataWorkGrid;