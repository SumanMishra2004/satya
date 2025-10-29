// Sample data for the academic journal website

import { ChartNoAxesColumnDecreasing, Cpu, MemoryStick, Monitor, Network, Server, Shield, User } from "lucide-react";


export const satyamebaServices = {
  title: "SATYAMEBA",
  fullForm: "Supercomputing Architecture for Transformative Yield in AI and Multi-GPU Engine Based Acceleration",
  services: [
    {
      id: 1,
      name: "HPC User Access",
      description: "High-Performance Computing access for research and development",
      icon: <User  className="text-blue-500 "/>,
      subServices: [
        // {
        //   id: "iaas",
        //   name: "IaaS",
        //   description: "Infrastructure as a Service",
        //   icon: <Server className="text-green-500 "/>,
        //   subServices: [
        //     {
        //       id: "iaas-vm",
        //       name: "Virtual Machines",
        //       description: "Scalable virtual machine instances",
        //       icon: <Server className="text-yellow-500 "/>
        //     },
        //     {
        //       id: "iaas-storage",
        //       name: "Storage Services",
        //       description: "Cloud storage and backup solutions",
        //       icon: <MemoryStick className="text-yellow-500 "/>
        //     },
        //     {
        //       id: "iaas-network",
        //       name: "Network Services",
        //       description: "Virtual networking and load balancing",
        //       icon: <Network className="text-yellow-500 "/>
        //     },
        //     {
        //       id: "iaas-security",
        //       name: "Security Services",
        //       description: "Infrastructure security and monitoring",
        //       icon: <Shield className="text-yellow-500 "/>
        //     }
        //   ]
        // },
        {
          id: "paas",
          name: "PaaS",
          description: "Platform as a Service",
          icon: <Cpu className="text-green-500 "/>,
          subServices: [
            {
              id: "paas-option-1",
              name: "FAMEBOT",
              description: "First PaaS service option",
              icon: <Cpu className="text-yellow-500 "/>
            },
            {
              id: "paas-option-2",
              name: "QEDA",
              description: "Second PaaS service option",
              icon: <Cpu className="text-yellow-500 "/>
            }
          ]
        }
      ]
    },
    {
      id: "base-nodes",
      name: "Base Nodes",
      description: "High-performance base specification nodes with Xeon W9-3495X processors",
      icon: <ChartNoAxesColumnDecreasing className="text-blue-600 "/>
    },
    {
      id: "master-nodes",
      name: "Master Nodes",
      description: "Centralized computing nodes for system management and control",
      icon: <Monitor className="text-blue-600 "/>
    },
    {
      id: "cpu-compute-nodes",
      name: "CPU Only Compute Nodes",
      description: "Dedicated CPU computing nodes for parallel processing tasks",
      icon: <Cpu className="text-blue-600 "/>
    },
    {
      id: "gpu-compute-nodes",
      name: "GPU Only Compute Nodes",
      description: "High-performance GPU nodes for AI and machine learning workloads",
      icon: <MemoryStick className="text-blue-600 "/>
    },
   
  ]
};

export const configurationServices = {
  title: "CONFIGURATION",
  fullForm: "System Configuration and Management Services",
  services: [
    {
      id: "architecture",
      name: "Architecture",
      description: "System architecture design and planning",
      icon: "network"
    },
    {
      id: "system",
      name: "System",
      description: "System configuration and setup management",
      icon: "cpu"
    }
  ]
};
