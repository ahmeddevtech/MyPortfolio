import type { project } from "@/assets/types/interfaces";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProjectStore = defineStore('projectStore', () => {
  const projects: Array<project> = reactive([
    {
      id: 1,
      projectName: 'My Portfolio',
      img: '/imgs/projects-imgs/my-portfolio.png',
      description: 'Portfolio project is an advanced project that use Vue3, TypeScript and Tailwindcss, in vue i used the most features APIs Composition, Pinia Managment (stores) and Router to build routers.',
      usedLanguages: ['VueJS', 'TypeScript', 'Tailwindcss'],
    },
    {
      id: 2,
      projectName: 'Arduino Projects',
      img: '/imgs/projects-imgs/arduino-projects.png',
      description: 'Serie for Arduino projects of controlling components (LEDs / Sensors / Joysticks ...etc), the main goal from this project is the best way to control all component that make you able to apply any complex project.',
      usedLanguages: ['Sketch'],
    },
    {
      id: 3,
      projectName: 'Python Projects serie',
      img: '/imgs/projects-imgs/python-projects.png',
      description: 'I built this python projects serie as a way to build projects and master python in the same time, Go head take a look about my python projects.',
      usedLanguages: ['Python'],
    },
  ]);

  function getProjectByID(ID: number): project | undefined {
    return projects.find((item) => item.id === ID);
  }

  return{
    projects,
    getProjectByID,
  }

});