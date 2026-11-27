export interface MyInfo{
  firstName: 'Benhamadi',
  lastName: 'Ahmed Abdelkader',
  age: number,
  profileImg : string,
  contry: 'Algeria',
  city: 'Tlemcen',
  email: 'ahmed.benhamadi.dev@gmail.com' | string,
  phoneNumber: string,
  socialMediaAccounts: Array<socialMediaAcc>
  work: 'student' | 'employe',
  generalDomain: 'Computer Sience',
  subDomains: Array<string>,
}

export interface socialMediaAcc{
  accountType: string,
  url: string,
  icon: string,
}

export interface service{
  serviceName: string,
  icon: string,
  description: string,
  isAvailable: boolean,
}

export interface skill{
  skillName:  string,
  icon: string
}

export interface project{
  projectName: string,
  img: string,
  description: string,
  usedLanguages: Array<skill>,
}