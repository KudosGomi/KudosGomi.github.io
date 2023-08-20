import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  solutions = [
    {
      title: "Cloud Migration", 
      description: "Plan and execute a successful migration to Azure, including assessing your current environment, creating a migration plan, and executing the migration.",
      image: "./assets/images/cloud.jpg"
    },
    {
      title: "Cost Optimization",
      description: "Optimize your Azure costs, including resource utilization, licensing, and billing, to ensure that you are getting the most value from your investment.",
      image: "./assets/images/optimization.jpg"
    },
    {
      title: "Disater Recovery",
      description: "Disater recovery strategy for your Azure infrastucture and applications to ensure business continuity in the event of a disater.",
      image: "./assets/images/recovery.jpg"
    },
    {
      title: "Hybrid Cloud Solutions",
      description: "Create a hybrid cloud environment that combines your on-premise infrastructure with Azure, providing the benefits of both.",
      image: "./assets/images/hybrid.jpg"
    },
    {
      title: "Identity & Access",
      description: "Identity and access management solutions, such as our Azure Active Directory solution, to protect your identities, start a new tenant, or harden your current AD.",
      image: "./assets/images/identity.jpg"
    },
    {
      title: "Infrastructure as Code",
      description: "We can help you create and maintain a consistent and scalable infrastructure using tools such as Bicep, and Azure Resource Manager.",
      image: "./assets/images/infrastructure.jpg"
    },
    {
      title: "Migration Services",
      description: "We can help you migrate your exisiting applications and workloads to Azure, including lift-and-shift, re-platforming, and refactoring.",
      image: "./assets/images/migration.jpg"
    },
    {
      title: "Monitoring & Management",
      description: "Monitoring and management solutions to ensure the availability performance, and security of your Azure infrastructure and applications.",
      image: "./assets/images/monitoring.jpg"
    },
    {
      title: "On-Premise Solutions",
      description: "We can help you design and implement on-premise solutions that integrate with your Azure infrastructure, including hybrid cloud scenarios.",
      image: "./assets/images/on-premise.jpg"
    },
    {
      title: "Security & Compliance",
      description: "We can help you ensure that your Azure infrastructure and applications meet industry and regulatory compliance standards and implement security best practices.",
      image: "./assets/images/security.jpg"
    }
  ];

  browserScreenWidth: number;
  browserScreenHeight: number;
  private screenSizeSubscription: Subscription;

  constructor(private appService: AppService) {

    this.browserScreenWidth = window.innerWidth;
    this.browserScreenHeight = window.innerHeight;

    this.appService.initScreenSize$.subscribe(({ width, height }) => {
      this.browserScreenWidth = width;
      this.browserScreenHeight = height;
    });

    this.screenSizeSubscription = this.appService.screenResize$.subscribe(
      (size) => {
        this.browserScreenWidth = size.width;
        this.browserScreenHeight = size.height;
      }
    );

  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }

}
