import type { service, skill } from "@/assets/types/interfaces";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useServicesStore = defineStore('servicesStore',() => {
  const services: Array<service> = reactive([
  {
    serviceName: 'Web Designing',
    icon: '/icons/services-icons/web-designing.svg',
    description:'Creating modern, responsive, and user-friendly websites with clean layouts and attractive designs.',
    isAvailable: true,
  },
  {
    serviceName: 'Arduino Controlling',
    icon: '/icons/services-icons/arduino-controlling.svg',
    description:'Developing Arduino-based projects by programming microcontrollers and controlling electronic components and sensors.',
    isAvailable: true,
  },
  {
    serviceName: 'Python Programming',
    icon: '/icons/services-icons/python-programming.svg',
    description:'Building Python applications and scripts to automate tasks, solve problems, and bring ideas to life.',
    isAvailable: true,
  },
  {
    serviceName: 'Database Building',
    icon: '/icons/services-icons/bdd.svg',
    description:'Designing and organizing databases to store, manage, and retrieve data efficiently and reliably.',
    isAvailable: false,
  },
  ]);

  const skills: Array<skill> = []

})