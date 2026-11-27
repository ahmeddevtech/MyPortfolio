import type { MyInfo, socialMediaAcc } from "@/assets/types/interfaces";
import { defineStore } from "pinia";
import {reactive} from "vue";

const year = new Date().getFullYear();

export const useMainStore = defineStore('mainStore',() => {
  const myInfo: MyInfo =  reactive({
    firstName: 'Benhamadi',
    lastName: 'Ahmed Abdelkader',
    age: year - 2007,
    profileImg : '/imgs/profileImg',
    country: 'Algeria',
    city: 'Tlemcen',
    email: 'ahmed.benhamadi.dev@gmail.com',
    phoneNumber: '+213 563 66 45 62',
    socialMediaAccounts:[
      {
        accountType: 'github',
        url: 'https://github.com/ahmeddevtech',
        icon: '/icons/socialMedia-icons/github.svg',
      },
      {
        accountType: 'linkdin',
        url: 'https://www.linkedin.com/in/benhamadi-ahmed-abdelkader-24555b3a9/',
        icon: '/icons/socialMedia-icons/linkdin.svg',
      },
      {
        accountType: 'telegram',
        url: 'https://t.me/ahmed_dev0',
        icon: '/icons/socialMedia-icons/telegram.svg',
      },
    ],
    work: 'student',
    generalDomain: 'Computer Science',
    subDomains: ['Front-end Designer', 'Arduino controling'],
  });

  const description = createDescription(myInfo);

  function createDescription(Info: MyInfo): string {
    const domains = Info.subDomains.join(" & ");
    return `${Info.generalDomain} student in ${Info.city}, ${Info.country} — focused on ${domains}.`;
  }

  function getSocialMediaAccByType(type: string): socialMediaAcc | undefined {
    return myInfo.socialMediaAccounts.find((item) => item.accountType.toLowerCase() === type.toLowerCase());
  }

  return{
    myInfo,
    description,
    createDescription,
    getSocialMediaAccByType,
  }

})