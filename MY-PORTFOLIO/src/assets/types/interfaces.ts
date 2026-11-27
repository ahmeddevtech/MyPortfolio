export interface MyInfo{
  firstName: 'Benhamadi',
  lastName: 'Ahmed Abdelkader',
  age: number,
  profileImg : string,
  contry: 'Algeria',
  city: 'Tlemcen',
  email: 'ahmed.benhamadi.dev@gmail.com' | string,
  phoneNumber: string,
  work: 'student' | 'employe',
  generalDomain: 'Computer Sience',
  subDomains: Array<string>,
  skills: Array<string>,
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