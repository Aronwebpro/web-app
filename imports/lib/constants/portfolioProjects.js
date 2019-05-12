import React from 'react';

const portfolioProjects = [
    {
        title: '2019 year',
        data: [
            {
                title: 'Warehouse Management System',
                date: 'March - Present, 2019',
                img: '/img/projects/vanee-project.png',
                type: 'Work',
                appType: 'Web Application',
                appTypeColor: { backgroundColor: '#fed656' },
                url: '',
                description: '',
                render: () => (
                    <div>
                        <h3>Company: <strong>Vanee Foods</strong></h3>
                        {/*<h4><strong>Main Task:</strong> Join to team, contribute to the project.</h4>*/}
                        <h4><strong>Project Tasks:</strong></h4>
                        <ul>
                            <li>Users Management</li>
                            <li>Inventory management and tracking</li>
                            <li>Lab tests management</li>
                            <li>Tag scanners integration</li>
                        </ul>
                        <div>
                            <p>
                                The Vanee Foods Company manufactures shelf stable entrees, gravies, sauces, soups and soup bases.
                            </p>
                            <p>
                                Our task to create complete internal inventory and ingredients automated management system, to
                                track exact location
                                and state of all ingredients, which coming to the plant and coming out of it.
                            </p>
                            <p>
                                I've joined to this project in 2019. My contribution was to add new features and develop new
                                tools. With my
                                team we are creating very sophisticated and advance systems to manage goods and manufacture
                                process.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                title: 'BidKid ZOHO CRM integration',
                date: 'January - February, 2019',
                img: '/img/projects/bidkid-project.png',
                type: 'Work',
                appType: 'Web Application',
                appTypeColor: { backgroundColor: '#fed656' },
                url: '',
                render: () => (
                    <div>
                        <h3>BidKid is Web Application for Painters</h3>
                        <h4><strong>Main Task:</strong> Connect ZOHO CRM Api with BidKId App</h4>
                        <h4><strong>Other Tasks:</strong></h4>
                        <ul>
                            <li>
                                Create REST API end points to trigger appropriate event
                            </li>
                            <li>
                                Initiate ZOHO API authorization steps
                            </li>
                        </ul>
                        <div>
                            <p>BidKid is estimate templating system, helping for painters connect with clients, create estimates
                                and templates,
                                schedule appointment and other functionalities. <a href="https://bidkid.io/">More about BidKid</a>
                            </p>
                            <p>
                                ZOHO CRM is is an award-winning web-based CRM, <a href="https://www.zoho.com/crm/">More about
                                ZOHO</a>
                            </p>
                            <p>This was an interesting project to implement new feature into existing application.</p>
                        </div>
                    </div>
                )
            },
        ],
    },
    {
        title: '2018 year',
        data: [
            {
                title: 'Central Parks Check-in Game',
                date: 'November - December, 2018',
                img: '/img/projects/central-parks-project.png',
                type: 'Work',
                appType: 'Web Application',
                appTypeColor: { backgroundColor: '#fed656' },
                url: '',
                render: () => (
                    <div>
                        <h3>Central Parks is framework for Park Districts</h3>
                        <h4>
                            <strong>Main Task:</strong> Create Admin Dashboard for Check-in game which is used by all Central
                            Parks Mobile Apps.
                        </h4>
                        <ul>
                            <h4><strong>General Tasks:</strong></h4>
                            <li>Create Admin Dashboard UI</li>
                            <li>Creat REST Api to communicate with mobile applications</li>
                            <li>Users Management</li>
                        </ul>
                        <div>
                            <p>Central Parks is framework which offers mobile application and admin dashboard for park
                                districts.</p>
                            <p>I had a honor to create mobile and check-in game management applications from scratch.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Mobile App & Schedule System',
                date: 'August - November, 2018',
                img: '/img/projects/wild-goose-chase-project.png',
                type: 'Work',
                appType: 'Web & Mobile Applications',
                appTypeColor: { backgroundColor: '#0659a5' },
                url: '',
                render: () => (
                    <div>
                        <h4>Wild Goose Chasers is private company offering protection of your property from wild goose</h4>
                        <h4><strong>Main Task:</strong> Create Schedule and User management Dashboard, create Mobile application
                            for company employees
                        </h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>Users Management</li>
                            <li>REST API to communicate with mobile application</li>
                            <li>ZOHO CRM Integration</li>
                            <li>Create Admin Dashboard UI</li>
                            <li>Mobile Application</li>
                        </ul>
                        <div>
                            <p>Custom crafted business application design specifically for customer</p>
                            <p>Mobile application and Admin's dashboard was created from scratch by me.</p>
                            <p>Mobile and web applications was created by me.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Waukegan Park District',
                date: 'June - August, 2018',
                img: '/img/projects/park-district-project.png',
                type: 'Work',
                appType: 'Mobile Application',
                appTypeColor: { backgroundColor: '#0659a5' },
                url: '',
                render: () => (
                    <div>
                        <h3>Central Parks Mobile Application</h3>
                        <h4><strong>Main Task:</strong> Create Mobile Application controlled via REST API</h4>
                        <ul>
                            <h4><strong>General Tasks:</strong></h4>
                            <li>Mobile UI</li>
                            <li>REST API end points to communicate with management system</li>
                            <li>Push Notifications</li>
                            <li>Check-in Game</li>
                            <li>User Management, Login with Google, Facebook or Email</li>
                        </ul>
                        <div>
                            <p>Another very interesting project built by me.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Vertabiz Mobile App',
                description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. ',
                date: 'June, 2018',
                img: '/img/projects/vertabiz-project.png',
                type: 'Work',
                appType: 'Mobile Application',
                appTypeColor: { backgroundColor: '#0659a5' },
                url: '',
                render: () => (
                    <div>
                        <h3>Vertabiz Social Application</h3>
                        <h4><strong>Main Task:</strong> Create Mobile Application share pictures and thoughts with your coworkers
                        </h4>
                        <ul>
                            <h4><strong>General Tasks:</strong></h4>
                            <li>Mobile UI</li>
                            <li>Firebase integration</li>
                            <li>Push Notifications</li>
                            <li>Utilize Pictures loading</li>
                            <li>User Management</li>
                        </ul>
                        <div>
                            <p>Social application built by three team members. I mostly worked on applications UI.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'ReactJs Games Forum',
                description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. ',
                date: 'February, 2018',
                img: '/img/projects/react-forum.jpg',
                type: 'Personal',
                appType: 'Web Application',
                appTypeColor: { backgroundColor: '#fed656' },
                url: '',
                render: () => (
                    <div>
                        <h3>Game Forum web application</h3>
                        <h4><strong>Main Task:</strong> Create games forum to create and share your posts, update or delete. </h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>WEB UI and design</li>
                            <li>Firebase integration</li>
                            <li>Utilize React Js framework</li>
                            <li>User Management</li>
                        </ul>
                        <div>
                            <p>This is my personal project where I wanted to implement new React Js feature and learn more about
                                Firebase
                                database.</p>
                        </div>
                    </div>
                )
            },
        ],
    },
    {
        title: '2017 year',
        data: [
            {
                title: 'Dealer eProcess Websites Re-skin',
                description: 'Most of my daily jobs was re-skin web sites for dealers',
                date: 'January-December, 2017',
                img: '/img/projects/dealer-eprocess.png',
                type: 'Work',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
                render: () => (
                    <div>
                        <h3>Dealer eProcess makes websites for <br/>Auto Dealers</h3>
                        <h4><strong>Main Task:</strong> Re-skin website pages using HTML, CSS, JavaScript.</h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>Implement dealers' special UI orders</li>
                            <li>Create new design features</li>
                            <li>Update existing design</li>
                            <li>Place banners</li>
                        </ul>
                        <div>
                            <p>Dealer eProcess manages over thousand dealers websites where front-end team has to implement new
                                features everyday.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Dealer eProces Images Swipe',
                description: '',
                date: 'October, 2017',
                img: '/img/projects/swipe.jpg',
                type: 'Work',
                appType: 'Script',
                appTypeColor: { backgroundColor: '#ae3738' },
                url: '',
                render: () => (
                    <div>
                        <h4><strong>Main Task:</strong> Create JavaScript code to allow image gallery listen finger swipe even and
                            change pictures on swipe action.</h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>Make integration in existing galleries code</li>
                            <li>Prevent scroll on slide</li>
                            <li>Implement excellent user experience</li>
                        </ul>
                        <div>
                            <p>It's just simple script, but it wasn't easy to make an update into legacy huge code. Couple little
                                trick made UX very smooth.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'PHP Auto Parts Search',
                description: 'Most of my daily jobs was re-skin web sites for dealers',
                date: 'June, 2017',
                img: '/img/projects/php-parts-project.png',
                type: 'Personal',
                appType: 'Web Application',
                appTypeColor: { backgroundColor: '#fed656' },
                url: '',
                render: () => (
                    <div>
                        <h4>PHP Application allow user to search for specific car model and get all details about it. Included
                            vehicle pictures, user reviews, specifications.</h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>Create MVC model with PHP</li>
                            <li>Using jQuery and AJAX request fetch data from Edmunds API</li>
                            <li>Create application UI</li>
                        </ul>
                        <div>
                            <p>Personal project to learn more about MVC and PHP</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Heathy Living Skills',
                description: 'Most of my daily jobs was re-skin web sites for dealers',
                date: 'December, 2017',
                img: '/img/projects/healthy_living_skills.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },
        ],
    },
    {
        title: '2016 year',
        data: [
            {
                title: 'Floral Glory',
                description: 'Landing site for Nicotac sugar-free nicotine chewing gum.',
                date: 'October, 2016',
                img: '/img/projects/floralglorydesign.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },

            {
                title: 'JakECig',
                description: 'JAK ECIG is an Illinois based ECIG manufacturer that has captured an amazing offline customer base through retail distribution channels since 2012. This places JAK ECIG is the #1 independent private owned brand',
                date: 'August, 2016',
                img: '/img/projects/jakecig-project.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },
            {
                title: 'NicotacUSA',
                description: 'Landing site for Nicotac sugar-free nicotine chewing gum.',
                date: 'May, 2015',
                img: '/img/projects/nicotac-project.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },
            {
                title: 'AnitaPro Cleaning',
                description: 'Cleaning services website.',
                date: 'March, 2016',
                img: '/img/projects/anitaproclean.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },
            {
                title: 'Aaron Menu Pro',
                description: 'This is one of the first my JavaScript Project where I tried to understand DOM and CSS animation.',
                date: 'January, 2016',
                img: '/img/projects/menupro.jpg',
                type: 'Client',
                appType: 'Script',
                appTypeColor: { backgroundColor: '#ae3738' },
                url: '',
            },
        ],
    },
    {
        title: '2015 year',
        data: [
            {
                title: 'Terry Moye CPA',
                description: 'Simple website for accounting services by using plain HTML, CSS and PHP',
                date: 'December, 2015',
                img: '/img/projects/terry-project.png',
                type: 'Client',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
            },
            {
                title: 'Ledinis.lt',
                description: 'Website administration',
                date: 'June 2014 - January 2015',
                img: '/img/projects/ledinis.png',
                type: 'Work',
                appType: 'Website',
                appTypeColor: { backgroundColor: '#429934' },
                url: '',
                render: () => (
                    <div>
                        <h4>OpenCart CMS management</h4>
                        <h4><strong>General Tasks:</strong></h4>
                        <ul>
                            <li>Upload pictures and descriptions</li>
                            <li>Manage SEO</li>
                            <li>Google AddWords and marketing campaigns</li>
                        </ul>
                        <div>
                            <p>As a department manager I totally control our online store. This is where I started to get first web developing experience.</p>
                        </div>
                    </div>
                )
            }
        ],
    },

];

export {
    portfolioProjects,
};