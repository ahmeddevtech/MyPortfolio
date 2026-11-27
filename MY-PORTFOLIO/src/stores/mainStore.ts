import type { MyInfo } from "@/assets/interfaces/interfaces";
import { defineStore } from "pinia";
import {computed, reactive} from "vue";

const year = new Date().getFullYear();

export const useMainStore = defineStore('mainStore',() => {
  const myInfo: MyInfo =  reactive({
    firstName: 'Benhamadi',
    lastName: 'Ahmed Abdelkader',
    age: year - 2007,
    profileImg : '../../public/imgs/profileImg',
    contry: 'Algeria',
    city: 'Tlemcen',
    email: 'ahmed.benhamadi.dev@gmail.com',
    phoneNumber: '+213 563 66 45 62',
    work: 'student',
    generalDomain: 'Computer Sience',
    subDomains: ['Front-end Designer', 'Arduino controling'],
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.JS', 'TailwindCSS', 'C programming', 'C++ sketch', 'python', 'Java', 'Git'],
  });

  function createDescription(Info: MyInfo): string {
    const domains = Info.subDomains.join(" & ");
    return `${Info.generalDomain} student in ${Info.city}, ${Info.contry} — focused on ${domains}.`;
  }

  return{
    myInfo,
    createDescription,
  }

})