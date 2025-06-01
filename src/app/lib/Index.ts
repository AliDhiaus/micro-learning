import React from 'react';
import { Network, Database, Shield, Code, Cloud, Server, Palette, LayoutDashboard } from 'lucide-react';
import { QuizCategory, QuizQuestion } from '../types/Global';

export const quizCategories: QuizCategory[] = [
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    icon: React.createElement(Network, { size: 32, className: "text-blue-400" }),
    description: 'Fundamental concepts of computer networks.',
    difficulty: 'Beginner',
    questions: 10,
    points: 50,
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: React.createElement(LayoutDashboard, { size: 32, className: "text-orange-400" }),
    description: 'Build interactive and responsive user interfaces for the web.',
    difficulty: 'Intermediate',
    questions: 10,
    points: 85,
  },
  {
    id: 'database-fundamentals',
    title: 'Database Fundamentals',
    icon: React.createElement(Database, { size: 32, className: "text-green-400" }),
    description: 'Learn about relational databases and SQL.',
    difficulty: 'Intermediate',
    questions: 10,
    points: 75,
  },
  {
    id: 'cybersecurity-essentials',
    title: 'Cybersecurity Essentials',
    icon: React.createElement(Shield, { size: 32, className: "text-red-400" }),
    description: 'Key principles to protect systems from threats.',
    difficulty: 'Beginner',
    questions: 10,
    points: 60,
  },
  {
    id: 'programming-logic',
    title: 'Programming Logic',
    icon: React.createElement(Code, { size: 32, className: "text-yellow-400" }),
    description: 'Understand core programming constructs.',
    difficulty: 'Intermediate',
    questions: 10,
    points: 80,
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    icon: React.createElement(Cloud, { size: 32, className: "text-indigo-400" }),
    description: 'Explore the basics of cloud services and deployment.',
    difficulty: 'Advanced',
    questions: 10,
    points: 100,
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: React.createElement(Server, { size: 32, className: "text-teal-400" }),
    description: 'Delve into how operating systems work.',
    difficulty: 'Intermediate',
    questions: 10,
    points: 70,
  },
  {
    id: 'ui-ux-design-basics',
    title: 'UI/UX Design Basics',
    icon: React.createElement(Palette, { size: 32, className: "text-pink-400" }),
    description: 'Learn fundamental principles of user interface and user experience design.',
    difficulty: 'Beginner',
    questions: 10,
    points: 65,
  },
];

export const sampleQuestions: { [key: string]: QuizQuestion[] } = {
  'networking-basics': [
    {
      question: 'Which of the following is a private IP address?',
      options: ['192.168.1.1', '8.8.8.8', '172.16.0.0', '10.0.0.1'],
      correct: 0,
      explanation: '192.168.x.x, 172.16.x.x to 172.31.x.x, and 10.x.x.x are private IP address ranges. 8.8.8.8 is a public DNS server.',
    },
    {
      question: 'What protocol is used to resolve IP addresses to MAC addresses?',
      options: ['DNS', 'ARP', 'DHCP', 'ICMP'],
      correct: 1,
      explanation: 'ARP (Address Resolution Protocol) maps IP addresses to physical MAC addresses on a local network. DNS resolves domain names to IP addresses. DHCP assigns IP addresses. ICMP is used for network diagnostics (ping).',
    },
    {
      question: 'Which layer of the OSI model is responsible for routing?',
      options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
      correct: 2,
      explanation: 'The Network Layer (Layer 3) handles logical addressing and routing of packets between different networks. The Physical Layer deals with raw bit transmission, Data Link with frames within a local network, and Transport with end-to-end communication.',
    },
    {
      question: 'What is the default port for HTTP?',
      options: ['21', '22', '80', '443'],
      correct: 2,
      explanation: 'HTTP (Hypertext Transfer Protocol) uses port 80 by default. Port 21 is for FTP, 22 for SSH, and 443 for HTTPS (secure HTTP).',
    },
    {
      question: 'What does VPN stand for?',
      options: ['Virtual Private Network', 'Very Personal Network', 'Validated Public Network', 'Virtual Protocol Node'],
      correct: 0,
      explanation: 'VPN stands for Virtual Private Network, which creates a secure, encrypted connection over a less secure network, like the internet.',
    },
    {
      question: 'What device connects multiple networks together and directs network traffic between them?',
      options: ['Switch', 'Router', 'Hub', 'Repeater'],
      correct: 1,
      explanation: 'A router connects multiple networks and routes data between them. A switch connects devices within the same network. A hub broadcasts data to all devices, and a repeater amplifies signals.',
    },
    {
      question: 'Which command is commonly used to test the reachability of a host on an IP network?',
      options: ['ipconfig', 'ping', 'traceroute', 'netstat'],
      correct: 1,
      explanation: '`ping` sends ICMP echo requests to test if a host is reachable. `ipconfig` displays network configuration, `traceroute` shows the path packets take, and `netstat` shows network connections.',
    },
    {
      question: 'Which protocol is used to assign IP addresses dynamically to devices in a network?',
      options: ['DNS', 'HTTP', 'DHCP', 'FTP'],
      correct: 2,
      explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices. DNS resolves names, HTTP transfers web data, and FTP transfers files.',
    },
    {
      question: 'Which of these is a Class C IP address?',
      options: ['192.168.0.1', '10.0.0.1', '172.16.0.1', '224.0.0.1'],
      correct: 0,
      explanation: '192.168.x.x belongs to Class C. 10.x.x.x is Class A, 172.16.x.x is Class B, and 224.x.x.x is multicast (Class D).',
    },
    {
      question: 'Which layer of the OSI model ensures reliable transmission of data segments?',
      options: ['Session Layer', 'Network Layer', 'Data Link Layer', 'Transport Layer'],
      correct: 3,
      explanation: 'The Transport Layer (Layer 4) ensures reliable data transfer using protocols like TCP. The Network Layer handles routing, Data Link handles local transmission, and Session manages connections.',
    },
    {
      question: 'What is the primary purpose of a firewall?',
      options: [
        'To assign IP addresses',
        'To block unauthorized access',
        'To route data between networks',
        'To boost Wi-Fi signal'
      ],
      correct: 1,
      explanation: 'A firewall filters incoming and outgoing traffic to block unauthorized access based on security rules.',
    },
    {
      question: 'What type of IP address is 127.0.0.1?',
      options: ['Public IP', 'Broadcast address', 'Loopback address', 'Private IP'],
      correct: 2,
      explanation: '127.0.0.1 is the loopback address used to test network functionality on the local machine.',
    },
    {
      question: 'Which protocol does HTTPS use to encrypt data?',
      options: ['SSL/TLS', 'SSH', 'FTP', 'ICMP'],
      correct: 0,
      explanation: 'HTTPS uses SSL/TLS to encrypt data between the client and server, ensuring secure web communication.',
    },
    {
      question: 'What does the term “bandwidth” refer to in networking?',
      options: [
        'The number of users on a network',
        'The physical width of a cable',
        'The amount of data that can be transferred over a network in a given time',
        'The IP address range of a network'
      ],
      correct: 2,
      explanation: 'Bandwidth is the capacity of a network link to transmit data, typically measured in Mbps or Gbps.',
    },
    {
      question: 'Which of the following is a valid IPv6 address?',
      options: [
        '192.168.1.1',
        '255.255.255.0',
        '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
        '172.16.254.1'
      ],
      correct: 2,
      explanation: 'IPv6 addresses are written in hexadecimal and separated by colons. IPv4 addresses are in dotted decimal format.',
    }
  ],
  'frontend-development': [
    {
      question: 'Which of the following is NOT a JavaScript framework/library?',
      options: ['React', 'Angular', 'Vue.js', 'Django'],
      correct: 3,
      explanation: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design, primarily used for backend development. React, Angular, and Vue.js are popular JavaScript libraries/frameworks for building user interfaces.',
    },
    {
      question: 'What is the purpose of the `useEffect` hook in React?',
      options: [
        'To declare a state variable',
        'To perform side effects in functional components',
        'To define a custom hook',
        'To optimize component rendering'
      ],
      correct: 1,
      explanation: 'The `useEffect` hook in React allows you to perform side effects (like data fetching, subscriptions, or manually changing the DOM) in functional components, similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.',
    },
    {
      question: 'Which CSS property is used for controlling the space between the content and the border of an element?',
      options: ['margin', 'padding', 'border-spacing', 'outline'],
      correct: 1,
      explanation: '`padding` is used to create space around an element\'s content, inside of any defined borders. `margin` creates space outside the border, and `border-spacing` is for tables. `outline` is a line drawn outside the element\'s border.',
    },
    {
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      correct: 0,
      explanation: '<ul> defines an unordered list. <ol> is used for ordered lists, <li> defines a list item, and <list> is not a valid HTML tag.',
    },
    {
      question: 'What does the CSS property `z-index` control?',
      options: [
        'The size of the element',
        'The visibility of the element',
        'The stacking order of elements',
        'The background color of an element'
      ],
      correct: 2,
      explanation: '`z-index` controls the stacking order of elements on the z-axis. Elements with a higher z-index appear above those with a lower one.',
    },
    {
      question: 'In CSS, what does the "em" unit represent?',
      options: [
        'Pixels',
        'The width of the screen',
        'The font-size of the parent element',
        'The default browser font size'
      ],
      correct: 2,
      explanation: '`em` is a relative unit based on the font-size of the parent element. It is commonly used for scalable and responsive design.',
    },
    {
      question: 'What does JSX stand for?',
      options: [
        'JavaScript Extension',
        'Java Syntax Extension',
        'JavaScript XML',
        'JavaScript XHTML'
      ],
      correct: 2,
      explanation: 'JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement()`.',
    },
    {
      question: 'Which method is used to update state in a functional React component?',
      options: ['useState()', 'setState()', 'updateState()', 'changeState()'],
      correct: 1,
      explanation: 'In React class components, `setState()` is used. In functional components, `useState()` returns a setter function (often named `setX`) that is used to update the state.',
    },
    {
      question: 'Which of the following is a valid way to import a CSS file in a React project?',
      options: [
        "import './App.css';",
        "require('./App.css');",
        "<link href='App.css' />",
        "All of the above"
      ],
      correct: 0,
      explanation: "The standard and recommended way to import a CSS file in a React component is `import './App.css';`. The `<link>` tag is used in `public/index.html`, not in JS files.",
    },
    {
      question: 'Which CSS layout module is best for creating a one-dimensional layout?',
      options: ['Grid', 'Flexbox', 'Float', 'Box model'],
      correct: 1,
      explanation: 'Flexbox is optimized for one-dimensional layouts — either row or column. Grid is better for two-dimensional layouts.',
    },
    {
      question: 'In React, what is the virtual DOM?',
      options: [
        'A virtual reality version of the DOM',
        'A lightweight JavaScript representation of the real DOM',
        'The original DOM',
        'An API for managing components'
      ],
      correct: 1,
      explanation: 'The virtual DOM is a JavaScript object that React uses to improve performance by minimizing direct DOM manipulations.',
    },
    {
      question: 'Which of the following attributes is used in React to apply CSS classes?',
      options: ['class', 'className', 'cssClass', 'styleClass'],
      correct: 1,
      explanation: '`className` is used in React instead of `class` to avoid conflicts with the JavaScript `class` keyword.',
    },
    {
      question: 'What does the `key` prop help React identify in a list?',
      options: [
        'The styling of the list item',
        'The order of rendering',
        'Which items have changed, are added, or removed',
        'The ID of the component'
      ],
      correct: 2,
      explanation: 'The `key` prop is a unique identifier that helps React optimize rendering performance by tracking which items in a list have changed.',
    }
  ],
  'database-fundamentals': [
    {
      question: 'Which SQL keyword is used to extract data from a database?',
      options: ['UPDATE', 'INSERT', 'SELECT', 'DELETE'],
      correct: 2,
      explanation: 'The SELECT statement is used to query data from a database. INSERT adds new rows, UPDATE modifies existing rows, and DELETE removes rows.',
    },
    {
      question: 'What does SQL stand for?',
      options: ['Standard Query Language', 'Structured Question Language', 'Structured Query Language', 'Simple Query Logic'],
      correct: 2,
      explanation: 'SQL stands for Structured Query Language, a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS).',
    },
    {
      question: 'Which of the following is NOT a type of SQL join?',
      options: ['INNER JOIN', 'OUTER JOIN', 'MIDDLE JOIN', 'LEFT JOIN'],
      correct: 2,
      explanation: 'Common SQL join types include INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL OUTER JOIN. There is no standard "MIDDLE JOIN".',
    },
    {
      question: 'What is a primary key in a database?',
      options: [
        'A field that uniquely identifies each record in a table',
        'A field that links two tables together',
        'A field that stores large binary data',
        'A field that can contain duplicate values'
      ],
      correct: 0,
      explanation: 'A primary key is a column or set of columns in a database table that uniquely identifies each row (record) in that table. It cannot contain NULL values and must be unique.',
    },
    {
      question: 'Which command is used to add new rows to a table?',
      options: ['ADD ROW', 'INSERT INTO', 'CREATE ROW', 'NEW RECORD'],
      correct: 1,
      explanation: 'The INSERT INTO statement is used to add new records (rows) to a table in a database.',
    },
    {
      question: 'Which SQL clause is used to filter the results returned by a SELECT statement?',
      options: ['ORDER BY', 'WHERE', 'GROUP BY', 'HAVING'],
      correct: 1,
      explanation: 'The WHERE clause is used to filter records that meet a specific condition in a SELECT, UPDATE, or DELETE statement.',
    },
    {
      question: 'Which command is used to remove all records from a table but keep the table structure?',
      options: ['DROP', 'DELETE', 'REMOVE', 'TRUNCATE'],
      correct: 3,
      explanation: 'TRUNCATE deletes all rows from a table quickly and resets identity columns, but keeps the table structure intact.',
    },
    {
      question: 'What type of database is MySQL?',
      options: ['Document-oriented', 'Relational', 'Key-value store', 'Graph-based'],
      correct: 1,
      explanation: 'MySQL is a relational database management system (RDBMS) that uses tables with rows and columns.',
    },
    {
      question: 'Which SQL function is used to count the number of rows in a table?',
      options: ['COUNT()', 'SUM()', 'TOTAL()', 'ROWCOUNT()'],
      correct: 0,
      explanation: 'The COUNT() function returns the number of rows that match a specified condition.',
    },
    {
      question: 'In SQL, what does the GROUP BY clause do?',
      options: [
        'It filters records based on conditions.',
        'It groups rows that have the same values into summary rows.',
        'It orders the result set.',
        'It joins multiple tables.'
      ],
      correct: 1,
      explanation: 'GROUP BY groups rows with the same values in specified columns into summary rows, often used with aggregate functions like COUNT() or SUM().',
    },
    {
      question: 'Which SQL command is used to modify the structure of an existing table?',
      options: ['MODIFY', 'UPDATE', 'ALTER', 'CHANGE'],
      correct: 2,
      explanation: 'ALTER is used to add, delete, or modify columns or constraints in an existing table.',
    },
    {
      question: 'Which data type is suitable for storing true/false values in SQL?',
      options: ['TEXT', 'BOOLEAN', 'NUMBER', 'BIT'],
      correct: 1,
      explanation: 'BOOLEAN is used to store true or false values. Some databases use BIT(1) to represent similar logic.',
    },
    {
      question: 'What is the purpose of a foreign key?',
      options: [
        'To speed up query performance',
        'To uniquely identify rows in a table',
        'To create a relationship between two tables',
        'To store encrypted data'
      ],
      correct: 2,
      explanation: 'A foreign key is used to link two tables by referencing the primary key of another table, ensuring referential integrity.',
    },
    {
      question: 'Which SQL keyword is used to sort the result-set?',
      options: ['SORT BY', 'ORDER BY', 'GROUP BY', 'ARRANGE'],
      correct: 1,
      explanation: 'ORDER BY is used to sort the result-set by one or more columns, either ascending or descending.',
    },
    {
      question: 'What does the acronym RDBMS stand for?',
      options: ['Random Database Management System', 'Relational Database Management System', 'Rapid Data Block Management Structure', 'Remote Data Backup Management Software'],
      correct: 1,
      explanation: 'RDBMS stands for Relational Database Management System, which organizes data into related tables based on relations.',
    }
  ],
  'cybersecurity-essentials': [
    {
      question: 'Which of the following is used to detect unauthorized access attempts?',
      options: ['VPN', 'Firewall', 'IDS', 'HTTP'],
      correct: 2,
      explanation: 'An Intrusion Detection System (IDS) monitors network traffic for suspicious activity and alerts when such activity is detected.',
    },
    {
      question: 'What does the principle of least privilege mean?',
      options: [
        'All users should have full access to all systems',
        'Users should only have the minimum access necessary to perform their job',
        'Access should be granted based on seniority',
        'Privileges should be assigned randomly'
      ],
      correct: 1,
      explanation: 'The principle of least privilege ensures users have only the access necessary to perform their duties, reducing security risks.',
    },
    {
      question: 'What is the purpose of a firewall?',
      options: [
        'To physically protect a computer from damage',
        'To filter incoming and outgoing network traffic based on rules',
        'To create backups of important files',
        'To prevent power surges'
      ],
      correct: 1,
      explanation: 'A firewall filters network traffic and blocks unauthorized access to or from a private network.',
    },
    {
      question: 'What is social engineering in cybersecurity?',
      options: [
        'A type of encryption technique',
        'A method for optimizing software performance',
        'A psychological manipulation to trick users into giving up confidential information',
        'A security protocol for social networks'
      ],
      correct: 2,
      explanation: 'Social engineering involves manipulating people into divulging confidential information or performing harmful actions unknowingly.',
    },
    {
      question: 'What does HTTPS indicate about a website?',
      options: [
        'The site is hosted in a secure country',
        'The site uses encrypted communication over SSL/TLS',
        'The site contains no malware',
        'The site does not collect user data'
      ],
      correct: 1,
      explanation: 'HTTPS (HyperText Transfer Protocol Secure) indicates the communication between browser and server is encrypted using SSL/TLS.',
    },
    {
      question: 'Which of these is a secure way to store passwords?',
      options: [
        'Plaintext file on your desktop',
        'Using a password manager',
        'Writing them on paper',
        'Using the same password for all accounts'
      ],
      correct: 1,
      explanation: 'Password managers securely store and encrypt your passwords, reducing the risk of breaches due to poor password practices.',
    },
    {
      question: 'What type of attack attempts to overload a system with traffic?',
      options: ['Phishing', 'Brute force', 'DDoS', 'SQL Injection'],
      correct: 2,
      explanation: 'Distributed Denial of Service (DDoS) attacks flood a system with traffic, causing services to become unavailable.',
    },
    {
      question: 'What is two-factor authentication (2FA)?',
      options: [
        'Two people logging in at the same time',
        'Using the same password twice',
        'An authentication method requiring two different verification methods',
        'A backup password'
      ],
      correct: 2,
      explanation: '2FA enhances security by requiring two forms of verification, such as a password and a one-time code from your phone.',
    },
    {
      question: 'What is a zero-day vulnerability?',
      options: [
        'A virus that only activates after zero days',
        'A vulnerability that has not yet been discovered',
        'A security flaw that is exploited before it is known by the vendor',
        'A harmless software bug'
      ],
      correct: 2,
      explanation: 'Zero-day vulnerabilities are unknown to the software vendor and are exploited by attackers before a fix is available.',
    },
    {
      question: 'What is a common sign of a phishing email?',
      options: [
        'Personalized greeting from your bank',
        'Proper grammar and formatting',
        'Urgent language and suspicious links',
        'Email from your known contact with expected content'
      ],
      correct: 2,
      explanation: 'Phishing emails often contain urgent language, suspicious links, and requests for sensitive information.',
    },
  ],
  'programming-logic': [
    {
      question: 'Which symbol is commonly used for equality comparison in most programming languages?',
      options: ['=', '==', '!=', '==='],
      correct: 1,
      explanation: 'In many programming languages, == is used to compare two values for equality.',
    },
    {
      question: 'What is the output of: 5 + 2 * 3?',
      options: ['21', '11', '15', '7'],
      correct: 1,
      explanation: 'According to operator precedence, multiplication happens before addition, so 2 * 3 = 6, then 5 + 6 = 11.',
    },
    {
      question: 'What does a function typically do in programming?',
      options: [
        'Stores data',
        'Repeats code automatically',
        'Performs a specific task when called',
        'Changes the programming language'
      ],
      correct: 2,
      explanation: 'A function is a reusable block of code that performs a specific task.',
    },
    {
      question: 'Which of the following is used to repeat a set of instructions a specific number of times?',
      options: ['if', 'switch', 'for', 'return'],
      correct: 2,
      explanation: 'The "for" loop is used to repeat a set of instructions a specific number of times.',
    },
    {
      question: 'Which of the following is an example of a conditional statement?',
      options: ['function', 'variable', 'loop', 'if'],
      correct: 3,
      explanation: '"if" is a conditional statement used to make decisions in code.',
    },
    {
      question: 'What type of error occurs when a program runs but gives incorrect results?',
      options: ['Syntax error', 'Runtime error', 'Logical error', 'Compilation error'],
      correct: 2,
      explanation: 'A logical error means the program runs, but the output is not what is expected due to incorrect logic.',
    },
    {
      question: 'What will the condition in an if statement return?',
      options: ['A string', 'A number', 'A boolean value', 'A function'],
      correct: 2,
      explanation: 'Conditions in an if statement must return a boolean value: true or false.',
    },
    {
      question: 'Which data type is commonly used to represent text?',
      options: ['String', 'Integer', 'Boolean', 'Float'],
      correct: 0,
      explanation: 'A string is a data type used to represent text.',
    },
    {
      question: 'What is the main purpose of a loop in programming?',
      options: ['To store values', 'To define conditions', 'To organize files', 'To repeat actions'],
      correct: 3,
      explanation: 'Loops allow repeated execution of a block of code.',
    },
    {
      question: 'Which keyword is used to exit a function and return a value?',
      options: ['stop', 'exit', 'return', 'end'],
      correct: 2,
      explanation: '"return" exits a function and optionally returns a value to the caller.',
    },
  ],
  'cloud-computing': [
    {
      question: 'What does SaaS stand for?',
      options: ['Software as a Solution', 'Software as a Service', 'Storage as a Service', 'System as a Software'],
      correct: 1,
      explanation: 'SaaS stands for Software as a Service, where software is delivered over the internet and accessed via a web browser.',
    },
    {
      question: 'Which of the following best describes elasticity in cloud computing?',
      options: [
        'The ability to compress data for storage',
        'The ability to scale resources up or down automatically based on demand',
        'The ability to store data securely',
        'The ability to create multiple user accounts'
      ],
      correct: 1,
      explanation: 'Elasticity refers to the automatic scaling of resources in response to changing workloads.',
    },
    {
      question: 'What type of cloud service is Google Docs an example of?',
      options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
      correct: 2,
      explanation: 'Google Docs is a Software as a Service (SaaS) because it is accessed via the internet without needing local installation.',
    },
    {
      question: 'Which model combines on-premises infrastructure with cloud services?',
      options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Community Cloud'],
      correct: 2,
      explanation: 'Hybrid Cloud combines both public and private cloud solutions, allowing data and applications to be shared between them.',
    },
    {
      question: 'What is multitenancy in cloud computing?',
      options: [
        'Running one operating system on multiple machines',
        'Allowing multiple users to share the same physical resources securely',
        'Using different programming languages in one system',
        'Deploying a single application across different continents'
      ],
      correct: 1,
      explanation: 'Multitenancy refers to a single instance of software serving multiple customers (tenants), with data isolation and privacy.',
    },
    {
      question: 'Which of the following is NOT a cloud computing service model?',
      options: ['IaaS', 'PaaS', 'SaaS', 'RAAS'],
      correct: 3,
      explanation: 'RAAS (Recovery as a Service) is a concept but not one of the main three cloud service models: IaaS, PaaS, SaaS.',
    },
    {
      question: 'Which term refers to paying only for the cloud services you use?',
      options: ['Subscription billing', 'Prepaid services', 'Pay-as-you-go', 'Annual commitment'],
      correct: 2,
      explanation: 'Pay-as-you-go pricing means customers are billed based on actual usage rather than a fixed rate.',
    },
    {
      question: 'Which of these is an example of PaaS?',
      options: ['Microsoft Azure App Services', 'Dropbox', 'VirtualBox', 'Slack'],
      correct: 0,
      explanation: 'Azure App Services provides a managed platform to build and host web apps, APIs, and mobile backends.',
    },
    {
      question: 'What is the main responsibility of the cloud provider in SaaS?',
      options: ['Only hardware maintenance', 'Providing virtual machines', 'Managing infrastructure, platform, and software', 'Only network connectivity'],
      correct: 2,
      explanation: 'In SaaS, the provider manages everything from infrastructure to the actual application itself.',
    },
    {
      question: 'Which component is essential for accessing cloud services?',
      options: ['Data center', 'High-speed printer', 'Internet connection', 'Local hard drive'],
      correct: 2,
      explanation: 'An internet connection is essential for accessing cloud-based services and applications.',
    },
  ],
  'operating-systems': [
    {
      question: 'What is the primary function of an operating system?',
      options: [
        'To write computer programs',
        'To manage computer hardware and software resources',
        'To connect to the internet',
        'To store user data'
      ],
      correct: 1,
      explanation: 'The primary function of an operating system (OS) is to manage computer hardware and software resources, serving as an intermediary between computer hardware and software applications.',
    },
    {
      question: 'Which of these is an open-source operating system?',
      options: ['Windows', 'macOS', 'Linux', 'iOS'],
      correct: 2,
      explanation: 'Linux is a prominent example of an open-source operating system, meaning its source code is freely available and can be modified and distributed by anyone. Windows, macOS, and iOS are proprietary.',
    },
    {
      question: 'What is multitasking in an operating system?',
      options: [
        'Running only one program at a time',
        'Running multiple programs concurrently',
        'Connecting to multiple networks',
        'Storing multiple types of files'
      ],
      correct: 1,
      explanation: 'Multitasking in an operating system refers to the ability of the OS to execute multiple tasks or processes seemingly at the same time, by rapidly switching between them.',
    },
    {
      question: 'What is a kernel in an operating system?',
      options: [
        'A user interface component',
        'The core component of an operating system that manages system resources',
        'A type of file system',
        'A peripheral device'
      ],
      correct: 1,
      explanation: 'The kernel is the core component of an operating system. It acts as a bridge between applications and the actual data processing done at the hardware level, managing system resources like memory and CPU.',
    },
    {
      question: 'Which of the following is NOT a common operating system?',
      options: ['Android', 'Ubuntu', 'Photoshop', 'Chrome OS'],
      correct: 2,
      explanation: 'Photoshop is a software application for image editing, not an operating system. Android, Ubuntu, and Chrome OS are all examples of operating systems.',
    },
    {
      question: 'Which of these is a function of an operating system?',
      options: ['Compiling source code', 'Managing files and directories', 'Designing websites', 'Sending emails'],
      correct: 1,
      explanation: 'Operating systems handle file management, including creating, reading, writing, and deleting files and directories.',
    },
    {
      question: 'Which part of the OS is responsible for managing memory?',
      options: ['Driver', 'Kernel', 'Shell', 'Terminal'],
      correct: 1,
      explanation: 'The kernel manages memory allocation and deallocation among programs and processes.',
    },
    {
      question: 'Which of the following operating systems is designed primarily for mobile devices?',
      options: ['Linux', 'Windows', 'Android', 'macOS'],
      correct: 2,
      explanation: 'Android is an operating system based on the Linux kernel and designed for mobile devices like smartphones and tablets.',
    },
    {
      question: 'What does GUI stand for in operating systems?',
      options: ['Graphical User Interaction', 'Graphical User Interface', 'Global User Interface', 'General Utility Interface'],
      correct: 1,
      explanation: 'GUI stands for Graphical User Interface, allowing users to interact with the system through graphical elements like windows, icons, and buttons.',
    },
    {
      question: 'Which command-line interface is commonly used in Unix/Linux systems?',
      options: ['PowerShell', 'Command Prompt', 'Bash', 'Terminal'],
      correct: 2,
      explanation: 'Bash (Bourne Again SHell) is a popular command-line interface and scripting language used in Unix/Linux operating systems.',
    },
  ],
  'ui-ux-design-basics': [
    {
      question: 'Which term refers to the process of making a product easy and enjoyable to use?',
      options: ['User Interface (UI)', 'User Experience (UX)', 'Information Architecture', 'Visual Design'],
      correct: 1,
      explanation: 'User Experience (UX) encompasses all aspects of the end-user\'s interaction with the company, its services, and its products, focusing on making the product enjoyable and efficient to use. User Interface (UI) is the visual part, and Information Architecture is about organizing content.',
    },
    {
      question: 'What is the primary goal of wireframing in UI/UX design?',
      options: [
        'To determine the final color scheme and typography',
        'To create a high-fidelity visual prototype',
        'To lay out the basic structure and functionality of a page',
        'To conduct A/B testing with users'
      ],
      correct: 2,
      explanation: 'Wireframing focuses on the basic structure, content, and functionality of a page or application. It\'s a low-fidelity representation that helps in early-stage planning before delving into visual details or high-fidelity prototypes.',
    },
    {
      question: 'What does UI stand for in UI/UX design?',
      options: ['User Input', 'User Insight', 'User Interface', 'User Integration'],
      correct: 2,
      explanation: 'UI stands for User Interface, which refers to the visual elements through which users interact with a product or service.',
    },
    {
      question: 'Which design principle focuses on keeping the interface clean and uncluttered?',
      options: ['Consistency', 'Affordance', 'Simplicity', 'Feedback'],
      correct: 2,
      explanation: 'Simplicity ensures users can interact with the interface without being overwhelmed by too many elements or options.',
    },
    {
      question: 'What is the purpose of usability testing?',
      options: ['To test for security flaws', 'To measure code performance', 'To evaluate how easy the interface is to use', 'To check SEO optimization'],
      correct: 2,
      explanation: 'Usability testing helps evaluate how intuitive and easy-to-use a product or feature is by observing users during interaction.',
    },
    {
      question: 'Which layout technique helps ensure a consistent design across different screen sizes?',
      options: ['Fixed layout', 'Responsive design', 'Static design', 'Minimal design'],
      correct: 1,
      explanation: 'Responsive design ensures the layout adapts to various screen sizes and resolutions, improving usability across devices.',
    },
    {
      question: 'Which element is a key part of visual hierarchy in UI design?',
      options: ['Color', 'Typography', 'Spacing', 'All of the above'],
      correct: 3,
      explanation: 'Visual hierarchy is created using color, typography, spacing, and other visual cues to guide the user\'s attention.',
    },
    {
      question: 'What is an example of feedback in UI design?',
      options: [
        'A button changing color when clicked',
        'Changing font size',
        'Adding extra whitespace',
        'Using bold text'
      ],
      correct: 0,
      explanation: 'Feedback is a response from the system that acknowledges a user action, such as a button changing color when clicked.',
    },
    {
      question: 'Which process involves organizing and structuring content in a meaningful way?',
      options: ['User Research', 'Information Architecture', 'Prototyping', 'Wireframing'],
      correct: 1,
      explanation: 'Information Architecture deals with organizing, structuring, and labeling content effectively to help users find information easily.',
    },
    {
      question: 'What does “affordance” mean in UI/UX design?',
      options: [
        'The ability of a design to suggest its functionality',
        'The process of creating wireframes',
        'The responsiveness of the interface',
        'The color scheme of a website'
      ],
      correct: 0,
      explanation: 'Affordance refers to design elements that suggest how something can be used, such as buttons that look clickable.',
    },
  ],
};