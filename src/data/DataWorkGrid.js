let DataWorkGrid = {
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
            primary: true,
            publish: true,
            title: 'NTT DATA Healthcare',
            tileShow: true,
            body: 'A microsite needed to be developed to showcase services that NTT Data could provide in terms of IT for healthcare. The fun part of this project was designing the buildings in SketchUp and making them interactive.',
            order: 0,
            thumbSrc: 'ntt-data-healthcare-thumb.jpg',
            images: [
                { 
                    src: 'ntt-data-healthcare-1.jpg',
                    title: 'healthcare-1',
                    caption: 'Healthcare Payer page – developed using SketchUp and Flash'
                },
                { 
                    src: 'ntt-data-healthcare-2.jpg',
                    title: 'healthcare-2',
                    caption: 'Healthcare Provider page'
                },
                { 
                    src: 'ntt-data-healthcare-3.jpg',
                    title: 'healthcare-3',
                    caption: 'View of hopsital – architected and rendered in SketchUp before post production '
                },
                
            ],
            categories: [1]
        },
        {
            slug: 'fire-adapted-network',
            title: 'Fire Adapted Network Website',
            publish: true,
            tileShow: true,
            link: 'https://fireadaptednetwork.org/',
            body: 'This site served as network for firefighters and people of related communities to connect. Visitors were able to sign up as members and create profiles which were featured on an interactive map.',
            order: 2,
            thumbSrc: 'fireadaptednetwork-thumb.jpg',
            isThumbDark: true,
            images: [
                {
                    src: 'fireadaptednetwork-1.jpg',
                    title: 'Home page',
                    caption: 'Home page'
                },
                {
                    src: 'fireadaptednetwork-2.jpg',
                    title: 'Member directory – interactive map',
                    caption: 'Member directory – interactive map'
                },
            ],
            categories: [1,3]
        },
        {
            slug: 'ntt-data-healhcare',
            title: 'NTT DATA Healthcare',
            tileShow: true,
            publish: true,
            primary: false,
            body: null,
            order: 2,
            thumbSrc: 'ntt-data-healthcare-thumb-2.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'jasand-pereza-reel',
            title: 'Reel of work',
            publish: true,
            tileShow: true,
            body: 'Video reel of various work done over the years',
            order: 3,
            thumbSrc: 'jasandpereza-reel-thumb.jpg',
            isThumbDark: true,
            images: null,
            videoSrc: 'https://player.vimeo.com/video/140548770?title=0&byline=0&portrait=0',
            categories: [1,4]
        },
        {
            slug: 'ntt-data-holiday-card',
            title: 'NTT DATA Holiday Card',
            body: null,
            publish: true,
            tileShow: true,
            order: 3,
            thumbSrc: 'jackfrost-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2,6,7]
        },
        {
            slug: 'deans-for-impact',
            title: 'Deans for Impact Website',
            body: null,
            tileShow: true,
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
            tileShow: true,
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
            tileShow: true,
            order: 3,
            thumbSrc: 'barlouie-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2]
        },
        {
            slug: 'your-spaces',
            title: 'Spaces Real Estate Website',
            publish: true,
            tileShow: true,
            body: 'The client needed a website that stood out from other Real Estate websites. It had to be modern, exhibit personality and integrate with MLS listings. We built the theme from scratch using using beautifully designed comps, and in the end, an impressive site was launched.',
            order: 3,
            thumbSrc: 'yourspaces-thumb.jpg',
            link: 'http://yourspaces.com',
            images: [
                {
                    src: 'yourspaces-1.jpg',
                    caption: 'Home page',
                    title: 'Yourspaces.com Home page'
                }
            ],
            categories: [1]
        },
        {
            slug: 'door-to-door-organics-app',
            title: 'Door to Door Organics How it Works App',
            body: null,
            order: 3,
            tileShow: true,
            thumbSrc: 'dtdo-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'city-of-boulder-zero-waste-microsite',
            title: 'Zero Waste – City of Boulder',
            body: null,
            tileShow: true,
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
            tileShow: true,
            thumbSrc: 'ccna-thumb.jpg',
            images: null,
            categories: [1]
        },
        {
            slug: 'chicago-content-writing',
            title: 'Chicago Content Writing Website',
            body: null,
            tileShow: true,
            order: 3,
            thumbSrc: 'chicago-content-writing-thumb.jpg',
            images: null,
            categories: [1,2]
        },
        {
            slug: 'climate-voices-website',
            title: 'Climate Voices Website',
            tileShow: true,
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
            tileShow: true,
            order: 3,
            thumbSrc: 'enchanted-forest-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,7,3]
        },
        {
            slug: 'revere-group-app',
            title: 'Revere Group App',
            tileShow: true,
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
            tileShow: true,
            thumbSrc: 'card-shark-thumb.jpg',
            isThumbDark: true,
            images: null,
            categories: [1,2]
        },
        {
            slug: 'browser-mario',
            title: 'Broser Mario',
            tileShow: true,
            body: null,
            order: 3,
            thumbSrc: 'browser-mario-thumb.jpg',
            tileShow: true,
            isThumbDark: true,
            images: null,
            categories: [3]
        }
    ]
};

export default DataWorkGrid;