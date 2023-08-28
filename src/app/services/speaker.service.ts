import { Injectable } from '@angular/core';
import { Speaker } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speaker[] = [
    {
      id: 1,
      firstName: 'Hon. Tom Alweendo',
      lastName: '',
      role: 'Minister of Mines & Energy',
      companyId: 13,
      photoUrl: '/assets/img/speakers/Hon.webp',
      twitter: "",
      linkedin: "",
      biography: ` Hon. Tom Alweendo, is the Minister of Mines and Energy in the Cabinet of the Republic of Namibia. Born on 17 March 1958, in Okahenge, Oshana Region, Hon. Thomas Kavaningilamo Alweendo was appointed as Minister of Mines and Energy in February 2018 by President Hage G. Geingob.
      
      Prior to his appointment, Alweendo was the Director General of the National Planning Commission appointed by former President, H.E Hifikepunye Pohamba as Director General of the National Planning Commission (NPC). The National Planning Commission is a Constitutional body that is tasked with the responsibility to plan the priorities and direction of national development. In March 2015 he was appointed by President Hage G. Geingob as Minister of Economic Planning and also as Director General of the NPC.
      
      His extensive economic experience stems from having served as the Governor of the Bank of Namibia from January 1997 to March 2010. Alweendo was the first Namibian to serve as Governor of the Central Bank when he was appointed by Namibia’s Founding President Sam Nujoma. Before being appointed as Governor, he served as Deputy Governor for four years (1993-1996). Among some of his achievements during his tenure at the Bank of Namibia are the establishment of the local currency, the Namibia Dollar; the localization of the payments and banking systems; and the establishment of the Financial Intelligence Center.
      
      As Director General of the National Planning Commission, he presided over the drafting of Namibia’s fourth National Development Plan (NDP4). The NDP4 prioritized specific economic sectors that are perceived to have more potential to grow the economy and provide employment opportunities. This is notably agriculture, logistics, tourism, and manufacturing. The Plan also propounds a hands-on approach with regard to the Government’s role in economic development albeit in closer and effective collaboration with the private sector. Over the course of the NDP4 period the Namibian economy grew on average at 5.7 percent, despite the global economic crises and current global commodity crises.
      
      The Ministry of Mines and Energy (MME) is the State’s lead agency in attracting private investment in resources exploration and development through the provision of geoscientific information on minerals and energy resources, and management of an equitable and secure titles systems for the mining, petroleum and geothermal industries. As the Minister of Mines and Energy, he seeks to provides access to Namibia's geological, mineral and energy resources for sustainable economic growth, equal benefit and prosperity to all Namibian citizens. He is a firm believer that with ordinary talent, combined with extraordinary perseverance and buttressed by meritocracy, all things are achievable.
      
      He is a firm believer that with ordinary talent, combined with extraordinary perseverance and buttressed by meritocracy, all things are achievable.An avid reader and knowledge seeker, Hon. Tom Alweendo holds a Bachelor of Commerce from the University of Witwatersrand, Johannesburg, South Africa and a Masters in Business Administration (MBA) from the University of Wales. ` },
    { id: 2,
      firstName: 'Aphary ',
      lastName: 'Muyongo',
      role: 'Deputy Director & Head of Economic Geology Division',
      companyId: 2,
      photoUrl: '/assets/img/speakers/Aphary.webp',
      twitter: "https://mme.gov.na/directorates/gsn/",
      linkedin: "https://www.linkedin.com/in/aphary-muyongo-15507775/?originalSubdomain=na",
      biography: `Aphary Muyongo is a Deputy Director and head of the Economic Geology Division at the Geological Survey of Namibia within the Ministry of Mines and Energy. He holds an M.Sc. degree in Applied Geoscience specialising in Exploration and Economic Geology (University of Namibia); a double major B.Sc. degree in Geology and Chemistry (University of Namibia); and a B.Sc.
      
      Honours degree (ore deposit stream) from the University of KwaZulu-Natal, RSA. He has over 19 years of work experience including geological mapping and mineral exploration accumulated mainly at the Geological Survey of Namibia and private mineral exploration industry. `    },
    {
      id: 3,
firstName: 'Anthony ',
lastName: 'Viljoen',
role: 'Chief Executive Officer',
companyId: 3,
photoUrl: '/assets/img/speakers/Anthony.webp',
twitter: "https://andradamining.com/",
linkedin: "https://www.linkedin.com/in/anthony-viljoen-a8305333/?originalSubdomain=za",
biography: `Anthony Viljoen is a seasoned African mining entrepreneur and mining executive. He is a founding shareholder of VM Investment Company (Pty) Ltd, a principal investments and advisory company with a bias towards mining exploration and development. He has been responsible for the establishment and project development of numerous mining projects including, Vanadium, Lithium, Tin, Tantalum, Coal and Gold across Africa. Anthony was a founder and CEO of Lemur Resources (ASX:LMR), an Australian listed company focused on the development of the coal basins for electricity generation in Madagascar, from inception in 2008 until the company was acquired by Bushveld Minerals in 2014.

He was a founding shareholder and executive director of London Listed Bushveld Minerals (AIM:BMN), from 2011 until he exited earlier last year (2022), building Bushveld from an exploration company into a producer of 5% of the world’s supply of Vanadium. His current role is as the founder and CEO of London Listed Andrada Mining (AIM:ATM), which is focused on identifying and developing technology metals mines for the energy transition. Under his leadership, the company identified and developed its flagship asset in Namibia, the Uis mine, which contains globally significant quantities of Lithium, Tin and Tantalum.

Anthony holds a Bachelor of Business and Agricultural Economics degree, and a Postgraduate qualification in Finance and Banking. He grew up in the mining industry in Africa and has drawn from the wealth of knowledge and experienced network of mining professionals, acquired by his father and late uncle, Richard and Morris Viljoen, who were both pre-eminent Professors of Geology and are renowned for their contributions to the African mining industry and geology in particular. Between them, they cultivated more than a century of exploration and mine development experience. ` },
    {
      id: 4,
firstName: 'Aleksi ',
lastName: 'Salo',
role: 'Team Manger for Mineral Potential Research Team',
companyId: 4,
photoUrl: '/assets/img/speakers/Aleksi.webp',
twitter: "https://www.gtk.fi/en/",
linkedin: "https://www.linkedin.com/in/jaleksi/?originalSubdomain=fi",
biography: `Aleksi is a team manager for Mineral potential research team at Mineral economy solutions unit at the Geological Survey of Finland. Aleksi has worked in near mine exploration and resource drilling programs at the industry before his career at GTK, in both underground and open pit operations. At GTK Aleksi has worked as geologist, team manager and Head of unit. Current Team manager tasks include customer relations and project generation responsibilities. Aleksi’s GTK project background include critical mineral evaluation for the EC and project management for the Koillismaa deephole. Main research topics Aleksi is interested in are the different aspects of utilization of mineral resources from research to national strategy and policies. `   },
    {
      id: 5,
firstName: 'Olavi ',
lastName: 'Hangula',
role: 'Relationship Manager – Mining & Energy',
companyId: 14,
photoUrl: '/assets/img/speakers/Olavi.webp',
twitter: "https://www.rmb.com.na/news/unlocking-the-potential-of-namibias-mining-sector",
linkedin: "https://www.linkedin.com/in/olavi-hangula-1120a5108/?originalSubdomain=na",
biography: `Olavi Hangula, Mining and Energy Relations Manager at RMB Namibia, specializes in building and nurturing relationships within the mining and energy sector. Leveraging his investment banking background, Olavi assists clients in identifying opportunities and handling complex financial transactions. With a multidisciplinary perspective, he approaches challenges creatively to develop impactful solutions.

Previously, Olavi worked as an Investment Banking Analyst at Jefferies in London, where he played a vital role in supporting debt capital raise transactions for renewable energy projects, including solar, battery energy storage, and wind farm initiatives within the Power, Utilities, and Infrastructure sectors. His skill in recognizing opportunities and analyzing market trends contributed to the successful execution of these significant financial transactions.

In addition to his finance experience, Olavi gained practical insight into Namibian Private Equity, deepening his understanding of challenges in emerging markets. Holding a degree in International Relations with a Minor in Business from the University of Rochester, New York, Olavi is dedicated to driving positive change and collaborative achievements. `
         },
    {  
      id: 6,
      firstName: 'Kirsty ',
      lastName: 'Liddicoat',
      role: 'Chief Operating Officer',
      companyId: 6,
      photoUrl: '/assets/img/speakers/Kirsty.webp',
      twitter: "https://www.northerngraphite.com/home/",
      linkedin: "https://www.linkedin.com/in/kirsty-liddicoat-a7203716/?originalSubdomain=ca",
      biography: `Kirsty is the Chief Operating Officer for Northern Graphite. Over 20 years’ in the mining industry has seen her career cover strategy, mine and project management, mine planning, engineering, geoscience and exploration in oil sands, coal, gold, iron ore, bauxite and copper-gold. Kirsty’s been instrumental in changing the way geoscience is undertaken in coal through the application of new technologies and methodologies.
      
      Having worked in remote and regional areas Kirsty is well accustomed to working with people from a wide variety of backgrounds in demanding conditions. Her dedication to the progression of inclusion and diversity in the industry has developed into a passion for supporting women through their careers.
      
      Kirsty has a Bachelor of Science in Geology (Honors), a Masters in Mining Engineering and a Masters in Business Administration. In 2018 Kirsty received a Chief Executive Women scholarship to attend INSEAD, in 2012 she received the Women in Leadership Australia Scholarship designed to develop high potential female leaders and in 2013 Kirsty was recognized in the inaugural 100 Global most Inspirational Women in Mining published by Women in Mining United Kingdom.
      
      With a track record in team leadership, mine development, mine planning and systems establishment, Kirsty has been instrumental in changing the culture of two major sites in order to improve safety and increase productivity.
      
      Kirsty has a love of the outdoors and all associated activities, has hiked to Everest Base Camp and is known to do anything to get a thrill - not limited to rock climbing and jumping out of planes. She travels extensively and enjoys time with family and friends. `
    },
    {
      id: 7,
firstName: 'Julian ',
lastName: 'Grieve',
role: 'Co-head Resources Sector Solutions',
companyId: 14,
photoUrl: '/assets/img/speakers/Julian.webp',
twitter: "https://www.rmbprivatebank.com/",
linkedin: "https://www.linkedin.com/in/julian-grieve-6771086/",
biography: `Julian has been in investment banking for the past 14 years, having started his career in mining finance and having gained exposure to oil & gas over the years. His academic background is in pure mathematics, chemistry and economics, and he is a CFA charter holder.

Julian has worked across commodities and jurisdictions, from project finance for mineral sands in Kenya to acquisition finance for platinum group metals in Canada. He has led debt advisory and empowerment transactions, having raised capital for African investments from North America, Europe, Asia, Africa and Australia.

He currently co-heads the Resources Sector Solutions team in RMB’s drive to prioritise client needs and ensure that the right advice, and considered holistic solutions, are consistently delivered. `
     },
    {
      id: 8,
firstName: 'Gosia ',
lastName: 'Lachut',
role: 'Chargé d Affaires a.i.',
companyId: 7,
photoUrl: '/assets/img/speakers/Gosia.webp',
twitter: "https://commission.europa.eu/index_en",
linkedin: "https://www.linkedin.com/in/gosia-lachut-049857/",
biography: `Mrs Gosia Lachut has been posted to the EU Delegation to Namibia as the Deputy Head of Mission/ Head of Political, Press and Information Section, since September 2020. Gosia has been working for the EU since 2003, covering various aspects of the EU external relations, both from the development assistance and political perspective.

Her geographic experience ranges from Southern and Eastern Africa, through the Southern Pacific and the Maghreb countries. Originally graduated in economics/finance (Warsaw School of Economics and Université de Tours), she went on to complete Master's degrees in European Studies (College of Europe in Brugge), and International Politics and Security Studies (Université Libre de Bruxelles). `
     },
    {
      id: 9,
firstName: 'Gerda ',
lastName: 'Brand',
role: 'Tax and Legal Director',
companyId: 8,
photoUrl: '/assets/img/speakers/Gerda.webp',
twitter: "https://www.deloitte.com/global/en/about.html",
linkedin: "https://www.linkedin.com/in/gerda-brand-24735830/",
biography: `Gerda is a Tax Director and leads the Tax Business Unit of Deloitte in Namibia. She was appointed a Director in 2010 and has over 25 years of tax experience. Gerda is an admitted attorney of the High Court of Namibia. Gerda specialises in all forms of taxation (corporate tax, VAT, PAYE, expat taxes, withholding taxes, transfer pricing) and consults to a portfolio of corporates, listed and medium sized clients, on a wide range of tax issues.

Gerda is a member of the Law Society of Namibia, the Bankers Association’s VAT committee and the Institute of Chartered Accountants (ICAN) Tax Committee. She is the editor of Deloitte Tax Newsletter and Quick Tax Guide `
    },
    {
      id: 10,
firstName: 'Christopher ',
lastName: 'Drysdale',
role: 'Chief Executive Officer',
companyId: 9,
photoUrl: '/assets/img/speakers/Christopher.webp',
twitter: "https://www.antlergold.com/",
linkedin: "https://www.linkedin.com/in/christopher-drysdale-2a140b47/",
biography: `Mr. Drysdale is an experienced professional with international expertise in the mineral and exploration industry. He currently holds the position of CEO at Antler Gold Inc. (TSX.V:ANTL) and serves as a Director at E-Tech Resources Inc. (TSX.V:REE). With a diverse background and extensive work experience in Namibia and Africa, he actively promotes environmentally conscious practices in the extraction and production of critical minerals necessary for the global energy transition. `
    },
    {id: 11,
      firstName: 'John ',
      lastName: 'Borshoff',
      role: 'Managing Director and CEO',
      companyId: 10,
      photoUrl: '/assets/img/speakers/Borshoff.webp',
      twitter: "https://deepyellow.com.au/",
      linkedin: "https://www.linkedin.com/in/john-borshoff-44b4a9156/?originalSubdomain=au",
      biography: `John is an experienced mining executive and geologist with more than 45 years’ uranium industry experience. He founded Paladin Energy Limited in 1993 and took it from a junior explorer to a multi-mine uranium company worth more than US$5 billion at its peak in the pre-Fukushima era.
      
      He was appointed to the role of Managing Director/CEO of Deep Yellow in 2016, aiming to develop the Company into a Tier 1, multi-mine, global uranium producer. He has since built a capable, experienced team with a proven track record and initiated a dual pillar growth strategy of discovery of new deposits and mergers and acquisitions `
     },
  
    {
      id: 13,
firstName: 'Barcelona ',
lastName: 'Tsauses',
role: 'Director - Sustainability and Business Transformation and Chairman - Chamber Safety Committee',
companyId: 1,
photoUrl: '/assets/img/speakers/BarcelonaTsauses.webp',
twitter: "https://www.dundeeprecious.com/English/Home/default.aspx",
linkedin: "https://www.linkedin.com/in/barcelona-tsauses-652766172/?originalSubdomain=na",
biography: `As the appointed Director of Business Transformation, Barcelona brings a wealth of experience to her role, having designed and commissioned various plant units across her career, including the state-of-the-art Sulphuric Acid Plant at the Dundee Tsumeb Smelter. Barcelona is a Chemical Engineer and holds an Executive Management MBA from the University of Cape Town, and serves at an industry level through her Chairmanship of the Chamber Safety Committee and COVID-19 Task Team, and is a founding member of the Women in Mining Association. `
    },
    {
      id: 14,
firstName: 'Sheron ',
lastName: 'Kaviua',
role: 'Vice President Operations',
companyId: 12,
photoUrl: '/assets/img/speakers/Kaviua.webp',
twitter: "https://www.mining-technology.com/projects/rosh-pinah-mine-expansion-project/",
linkedin: "https://www.linkedin.com/in/sheron-kaviua-195487194/?originalSubdomain=na",
biography: `Sheron Kaviua is the Vice President Operations at Rosh Pinah Zinc Mine and the first female Mineral Resources Manager in Namibia.

Sheron is an experienced, qualified leader with a track record of successfully leading diverse teams in the mining sector. She has 18 years’ experience in the mining sector and was part of the teams that converted major exploration projects into operational mines in Namibia.

Sheron holds a Master of Business Administration (Project Management) from the London School of Business and Finance, and a Master of Science in Engineering (Mining) from the University of the Witwatersrand.

She managed the successful implementation of technology projects, which focused on reducing costs and transforming the Rosh Pinah Mine into the future of mining and the world’s most sustainable mining company. Recently, she has led the Rosh Pinah operations through the sales process and achieved record annual production despite the challenges.

Her goals are to continue leading junior to medium size mining companies safely, whilst delivering record production figures and ensuring that the communities around these companies are self-sustaining. `
    },
    {
      id: 15,
firstName: 'Erasmus ',
lastName: 'Shivolo',
role: 'Deputy Executive Director',
companyId: 13,
photoUrl: '/assets/img/speakers/Erasmus.webp',
twitter: "https://www.mme.gov.na/",
linkedin: "https://www.linkedin.com/in/erasmus-shivolo-45a298166/?originalSubdomain=na",
biography: `Mr. Shivolo is a Materials Science Engineer. He studied at the Colorado School of Mines and New Mexico Institute of Mining & Technology, USA.

An employee at the Ministry of Mines and Energy since 1996, Mr. Shivolo has served in the following positions:

Inspector of Mine Machinery, Chief Engineer, Deputy Director of Mines, Director of Mines, Mining Commissioner and currently holds the position of Deputy Executive Director - Department of Mines.

Mr. Shivolo has also served on different boards and Committees, and has been involved in the development of several government policies and strategies as well as negotiations, representing and advancing the interest of the Government of the Republic of Namibia. `
   }
   ,
   {
     id: 16,
firstName: 'Zebra ',
lastName: 'Kasete',
role: 'President, CoM',
companyId: 1,
photoUrl: '/assets/img/speakers/Zebra.webp',
twitter: "https://chamberofmines.org.na/",
linkedin: "https://www.linkedin.com/",
biography: `Mr. Zebra Kasete is the current president of the Chamber of Mines of Namibia`
  }
  ,
  {
    id: 17,
firstName: 'George ',
lastName: 'Botshiwe',
role: 'Vice President, CoM',
companyId: 1,
photoUrl: '/assets/img/speakers/GeorgeBotshiwe.webp',
twitter: "https://chamberofmines.org.na/",
linkedin: "https://www.linkedin.com/",
biography: `Mr. George Botshiwe is the current vice president of the Chamber of Mines of Namibia`
 },
 {
   id: 18,
firstName: 'Veston ',
lastName: 'Malango',
role: 'CEO, CoM',
companyId: 1,
photoUrl: '/assets/img/speakers/Veston.webp',
twitter: "https://chamberofmines.org.na/",
linkedin: "https://www.linkedin.com/",
biography: `Mr. Veston Malango is the current Chief Executive Officer of the Chamber of Mines of Namibia`
},  {id: 12,
  firstName: 'Willy ',
  lastName: 'Mertens',
  role: 'Chief Executive Officer',
  companyId: 11,
  photoUrl: '/assets/img/speakers/Willy2.png',
  twitter: "https://www.debmarinenamibia.com/",
  linkedin: "https://na.linkedin.com/in/willy-mertens",
  biography: `Willy is the CEO of Debmarine`
},
{
  id: 19,
firstName: 'John ',
lastName: 'Roos',
role: '2nd Vice President, CoM',
companyId: 1,
photoUrl: '/assets/img/speakers/JohnRoos.webp',
twitter: "https://chamberofmines.org.na/",
linkedin: "https://www.linkedin.com/",
biography: `Mr. John Roos is the second Vice President of the Chamber of Mines of Namibia`
}

  ];

  constructor() {}

  getSpeakers(ids?: number[]): Speaker[] {
    if (ids === undefined) { return this.speakers; }

    return this.speakers.filter(speaker => ids.includes(speaker.id));
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
