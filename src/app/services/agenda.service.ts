import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    {
      id: 1,
      title: 'Conference Delegate Registration (Collection of Delegate Cards)',
      speakerIds: [],
      startTime: '08/30/2023 12:30 PM',
      endTime: '2:00 PM',
      description: ''
      },
    {
      id: 2,
      title: 'The 80/20 Rule and Building UX Superpowers',
      speakerIds: [2],
      startTime: '08/30/2023 09:00 AM',
      endTime: '10:00 AM',
      description: 'Software architecture describes the building blocks on which solutions are created. Done right, those building blocks can provide superpowers to your UX team. Tom will bring you end-to-end through a modern microservices architecture, and discuss the design that enables a modern user experience along with the technology and tools behind it. <p>Through a detailed breakdown of the client-side architecture and abstraction layers that provide clear separation of concerns and simplified unit testing, you’ll discover how US Foods delivers first-class web, mobile and tablet experiences.</p>'
    },
    {
      id: 3,
      title: 'Between Standard and Flexibility: Volkswagen Group’s Multi-Brand Design System GroupUI',
      speakerIds: [3,27,28,24],
      startTime: '08/30/2023 10:00 AM',
      endTime: '11:00 AM',
      description: 'Volkswagen Group’s full-stack design system GroupUI delivers a seamless experience from figma and sketch to web components built with Stencil JS—Ionic’s toolchain for building reusable, scalable design systems. In a multi-brand environment featuring over five brands—with more to come soon—a perfect collaboration between teams and brands is vital for success.<p>      Discover how the designers at Volkswagen add value with maximum flexibility for their brands. Learn how they are managing collaboration, communication, and contribution in their cross-brand and interdisciplinary environment.</p>'
    },
    {
      id: 4,
      title: 'Building Micro Frontends with StencilJS',
      speakerIds: [4],
      startTime: '08/30/2023 11:00 AM',
      endTime: '11:30 AM',
      description: 'Managing the Front-End for large organizations can be a difficult task; the larger the application, the greater the need to divide it into smaller and more manageable, de-centralized artifacts in order to deliver a clean and consistent user experience.<p>In this talk we will explore multiple ways in which enterprises can leverage Micro-Front-end Architecture and Web Components compiled by Stencil JS in order to simplify the development, deployment, and consumption of third party content into large Front-End applications.</p>'
    },
    {
      id: 5,
      title: 'Speak Up: Employee Podcasting in the Age of Remote Work',
      speakerIds: [5, 6],
      startTime: '08/30/2023 11:30 AM',
      endTime: '12:00 PM',
      description: 'T-Mobile Human Resources has a small software development team, but big ideas. They first developed a media CMS with a tube-experience, and now they\'re on to their next big project: a mobile podcasting app for employees! <p>Learn about the team’s planning process, why they chose to build with Ionic, the challenges they\'ve faced along the way, and why they would want to create such an app in the first place.</p>'
    },
    {
      id: 6,
      title: 'Fleet Management: Bringing Wireless Technology to Construction Equipment',
      speakerIds: [7,22],
      startTime: '08/30/2023 12:00 PM',
      endTime: '12:30 PM',
      description: 'Bobcat Machine IQ is a digital telematics system that helps Bobcat equipment owners access machine info in real time from any location or device. Owners can check the health, maintenance, security, and performance of each connected machine at any time. How did the engineers behind Machine IQ decide the best technology stack for their needs? <p>Learn how Doosan Bobcat integrated functionality like geofencing in their application, and how they incorporated Ionic Appflow into their CI/CD pipeline.</p>'
    },
    {
      id: 7,
      title: 'Leveraging Mono Repositories for Enterprise Projects',
      speakerIds: [11, 15, 16],
      startTime: '12:30 PM',
      endTime: '13:15 PM',
      description: 'We hear about it all the time: teams have built their applications as mono repositories and have had killer success across the board. Businesses benefit, technology benefits, performance improves—you name it and we\'ve seen it! However, you may think monrepos won\'t work for you. You already have your infrastructure set up, and it would be way too much effort for your product team to migrate over, right? Wrong. <p>If you are a software lead with an existing product looking to learn how to transform your product and your team to a monorepo, then this presentation is for you. OpenForge will present to you real strategies and exact implementations for converting your current team into a monorepo team.</p>'
    },
    {
      id: 14,
      title: 'Fireside Chat with Enterprise App Summit App Co-creator Matt Netkow',
      speakerIds: [20,21],
      startTime: '13:15 PM',
      endTime: '13:30 PM',
      description: 'Learn more about the new Enterprise App Summit application co-created by Matt Netkow, Liam DeBeasi, and Ben Sperry.<p>Built with Ionic technology including Live Updates, Capacitor, and Ionic’s own UI framework (the upcoming Ionic 6!) this app is designed to be updated quickly to bring the latest information to event participants, and provide a seamless experience across any device.</p>'
    },
    {
      id: 8,
      title: 'Introducing Ionic 6: A Q&A with the Ionic Team',
      speakerIds: [25,19],
      startTime: '13:30 PM',
      endTime: '14:30 PM',
      description: `We're excited to announce the release of Ionic 6! This release adds improved desktop support, overhauled components, iOS and Android design changes, and so much more. <p> Learn from Liam DeBeasi, Ionic's software developer and Ionic 6 project lead, as he dives into the decisions made to develop these features, specific framework version requirements, issues addressed with the new updates, and what's coming next after Ionic 6.</p>`
    },
    {
      id: 9,
      title: 'Choosing a Technology Strategy for the Future',
      speakerIds: [8,9],
      startTime: '14:30 PM',
      endTime: '15:00 PM',
      description: 'Choosing a new technology framework for a global enterprise e-commerce solution can be difficult, especially when you need to sell the concept to internal stakeholders. Infrastructure, resource, support, and cost implications all come into play when making this crucial decision.<p>Learn how Norwex’s technical leaders chose Ionic’s solutions, leaned on Ionic’s world-class support and advisory team, and engaged with the Ionic community to quickly deliver their mission-critical applications to a global audience.</p>'
    },
    {
      id: 10,
      title: 'Accelerated Solution Delivery with Micro Frontends',
      speakerIds: [13],
      startTime: '15:00 PM',
      endTime: '15:30 PM',
      description: 'Discover how a micro-frontend architecture can accelerate multi-channel feature delivery with Ionic Hybrid, Portals, and Appflow. Robert Flagg, Engineering Director at Modus Create, will share how micro-frontends can impact cost, delivery cadence, and operational efficiencies.<p>You will also discover real examples of several enterprises that have achieved success with a micro-frontend architecture.</p>'
    },
    {
      id: 11,
      title: 'Delivering Dynamic Mobile Experiences with Reusable Architecture and Live Updates',
      speakerIds: [14,26],
      startTime: '15:30 PM',
      endTime: '16:00 PM',
      description: 'AAA offers a dynamic experience to over 60 million customers around the United States. Broken into regions, AAA can deliver unique experiences to customers in different areas. Each region is responsible for their own application experience, but customers download the same application on the app stores. How does AAA deliver brand continuity across all regions while enabling club autonomy? <p>Discover how AAA achieves a balance of unique customer experience and app parity by reusing architecture, leveraging CI/CD pipelines to deliver a seamless user flow, and maintaining brand continuity with a centralized design system.</p>'
    },
    {
      id: 12,
      title: 'Micro Frontends for Mobile with Ionic Portals',
      speakerIds: [20,23],
      startTime: '31-AUG-2023 16:00 PM',
      endTime: '16:30 PM',
      description: 'App development is rapidly evolving. Applications were originally built using a monolithic approach—a single-tiered code base combining UI and data into a single platform. Now, companies are moving towards micro frontends, an architectural style where UI front-end are composed of independent components that can be built by different teams at different times, saving development time and costs.<p>Micro frontends need to be reusable and portable. They need to be able to communicate with other parts of the app, provide a seamless and virtually invisible to users, and be easy to update without updating the larger app. Given these points, web technology is a great way to deliver micro experiences not only for the web but for mobile as well.</p><p>Discover how using Ionic Portals will allow your team to deliver micro experiences on mobile apps.</p>'
    },
    {
      id: 13,
      title: 'Conference Wrap-up',
      speakerIds: [21],
      startTime: '16:30 PM',
      endTime: '17:00 PM',
      description: 'End of the day wrap-up with final thoughts.'
    },
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }

  getAgendaItem(id: number): AgendaItem | undefined {
    return this.agenda.find(agenda => agenda.id === id);
  }

  public formatTalkTime(agendaItem: AgendaItem) {
    return `${this.convertToTwelveHourFormat(agendaItem.startTime)} - ${this.convertToTwelveHourFormat(agendaItem.endTime)}`;
  }

  // Talk times are stored in military time to make it easier to work with 
  // local notifications. Convert to 12 hour clock format.
  // Likely better ways to do this with Date object.

  // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
  private convertToTwelveHourFormat(time: string) {
    let hour = parseInt(time.substring(0,2));

    if (hour > 12) {
      hour = hour - 12;
    }

    return hour + time.slice(2);
  }
}
