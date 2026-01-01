export interface User {
  id: string;
  name: string;
  email: string;
  university: string;
  fraternity: string;
  gradYear: number;
  industry: string;
  bio: string;
  avatarUrl: string;
  location?: string;
  connections: string[];
  pendingConnections: string[];
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  likes: string[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message | null;
  updatedAt: Date;
}

export interface ConnectionRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export const FRATERNITIES = [
  'Alpha Beta Alpha',
  'Alpha Beta Gamma',
  'Alpha Beta Kappa',
  'Alpha Chi Lambda',
  'Alpha Chi Omega',
  'Alpha Chi Rho',
  'Alpha Chi Sigma',
  'Alpha Delta Kappa',
  'Alpha Delta Omega',
  'Alpha Delta Phi',
  'Alpha Delta Sigma',
  'Alpha Epsilon Phi',
  'Alpha Epsilon Pi',
  'Alpha Gamma Delta',
  'Alpha Gamma Delta',
  'Alpha Gamma Rho',
  'Alpha Gamma Rho',
  'Alpha Gamma Xi',
  'Alpha Iota Omicron',
  'Alpha Iota Sigma',
  'Alpha Kappa Lambda',
  'Alpha Kappa Psi',
  'Alpha Omicron Pi',
  'Alpha Phi',
  'Alpha Phi Alpha',
  'Alpha Phi Omega',
  'Alpha Pi Sigma',
  'Alpha Psi Lambda',
  'Alpha Psi Sigma',
  'Alpha Rho Upsilon',
  'Alpha Sigma Alpha',
  'Alpha Sigma Gamma',
  'Alpha Sigma Kappa',
  'Alpha Sigma Phi',
  'Alpha Sigma Phi',
  'Alpha Sigma Tau',
  'Alpha Sigma Tau',
  'Alpha Tau Omega',
  'Alpha Theta Chi',
  'Alpha Theta Lambda',
  'Alpha Xi Delta',
  'Alpha Zeta',
  'Alpha Zeta Omicron',

  'Beta Alpha Psi',
  'Beta Alpha Theta',
  'Beta Delta Phi',
  'Beta Delta Sigma',
  'Beta Gamma Sigma',
  'Beta Gamma Sigma',
  'Beta Omega Chi',
  'Beta Omega Chi',
  'Beta Sigma Alpha',
  'Beta Sigma Phi',
  'Beta Sigma Psi',
  'Beta Sigma Tau',
  'Beta Upsilon Chi',

  'Chi Omega',
  'Chi Phi',
  'Chi Psi',
  'Chi Upsilon Sigma',

  'Delta Beta Theta',
  'Delta Chi',
  'Delta Chi Lambda',
  'Delta Gamma',
  'Delta Kappa Epsilon',
  'Delta Kappa Phi',
  'Delta Kappa Sigma',
  'Delta Lambda Phi',
  'Delta Phi',
  'Delta Phi Epsilon',
  'Delta Phi Epsilon',
  'Delta Phi Lambda',
  'Delta Phi Omega',
  'Delta Sigma Iota',
  'Delta Sigma Lambda',
  'Delta Sigma Lambda',
  'Delta Sigma Phi',
  'Delta Sigma Psi',
  'Delta Sigma Sigma',
  'Delta Sigma Theta',
  'Delta Tau Delta',
  'Delta Upsilon',
  'Delta Xi Alpha',
  'Delta Zeta',
  'Delta Zeta Chi',

  'Epsilon Sigma Alpha',
  'Eta Sigma Phi',

  'FarmHouse',

  'Gamma Alpha Omega',
  'Gamma Phi Beta',
  'Gamma Phi Omega',
  'Gamma Sigma Sigma',
  'Gamma Zeta Alpha',

  'Iota Phi Theta',

  'Kappa Alpha Order',
  'Kappa Alpha Psi',
  'Kappa Alpha Theta',
  'Kappa Delta',
  'Kappa Delta Chi',
  'Kappa Delta Rho',
  'Kappa Kappa Gamma',
  'Kappa Kappa Psi',
  'Kappa Sigma',

  'Lambda Alpha Upsilon',
  'Lambda Chi Alpha',
  'Lambda Phi Epsilon',
  'Lambda Pi Chi',

  'Mu Kappa Tau',
  'Mu Sigma Upsilon',
  'Mu Sigma Upsilon',

  'Omega Chi Gamma',
  'Omega Chi Sigma',
  'Omega Delta Phi',
  'Omega Delta Sigma',
  'Omega Phi Alpha',
  'Omega Phi Beta',
  'Omega Phi Omega',
  'Omega Psi Phi',
  'Omega Sigma Alpha',

  'Phi Alpha Delta',
  'Phi Alpha Gamma',
  'Phi Alpha Gamma',
  'Phi Beta Lambda',
  'Phi Beta Lambda',
  'Phi Beta Pi',
  'Phi Chi',
  'Phi Delta Alpha',
  'Phi Delta Epsilon',
  'Phi Delta Phi',
  'Phi Delta Rho',
  'Phi Delta Theta',
  'Phi Epsilon Pi',
  'Phi Eta Sigma',
  'Phi Gamma Delta (FIJI)',
  'Phi Gamma Nu',
  'Phi Gamma Sigma',
  'Phi Kappa Phi',
  'Phi Kappa Psi',
  'Phi Kappa Sigma',
  'Phi Kappa Tau',
  'Phi Kappa Theta',
  'Phi Lambda Chi',
  'Phi Mu',
  'Phi Mu Alpha',
  'Phi Mu Alpha Sinfonia',
  'Phi Omega Sigma',
  'Phi Pi Phi',
  'Phi Sigma Alpha',
  'Phi Sigma Alpha',
  'Phi Sigma Delta',
  'Phi Sigma Kappa',
  'Phi Sigma Pi',
  'Phi Sigma Rho',
  'Phi Sigma Sigma',
  'Phi Theta Alpha',

  'Pi Beta Phi',
  'Pi Kappa Alpha',
  'Pi Kappa Phi',
  'Pi Sigma Epsilon',

  'Psi Omega',
  'Psi Upsilon',

  'Rho Sigma Psi',

  'Sigma Alpha',
  'Sigma Alpha Beta',
  'Sigma Alpha Epsilon',
  'Sigma Alpha Gamma',
  'Sigma Alpha Iota',
  'Sigma Alpha Psi',
  'Sigma Beta Psi',
  'Sigma Beta Rho',
  'Sigma Chi',
  'Sigma Chi Lambda',
  'Sigma Delta Rho',
  'Sigma Delta Tau',
  'Sigma Eta Phi',
  'Sigma Gamma Rho',
  'Sigma Kappa',
  'Sigma Lambda Beta',
  'Sigma Lambda Gamma',
  'Sigma Lambda Gamma',
  'Sigma Lambda Theta',
  'Sigma Nu',
  'Sigma Phi Delta',
  'Sigma Phi Epsilon',
  'Sigma Phi Rho',
  'Sigma Phi Society',
  'Sigma Phi Theta',
  'Sigma Pi',
  'Sigma Psi Zeta',
  'Sigma Rho',
  'Sigma Sigma Phi',
  'Sigma Sigma Sigma',
  'Sigma Tau Gamma',
  'Sigma Theta Tau',

  'Tau Alpha Phi',
  'Tau Beta Sigma',
  'Tau Delta Phi',
  'Tau Delta Phi',
  'Tau Kappa Epsilon',
  'Tau Sigma Alpha',
  'Tau Theta Pi',
  'Tau Upsilon Gamma',

  'Theta Alpha Phi',
  'Theta Chi',
  'Theta Chi Omega',
  'Theta Chi Omega',
  'Theta Delta Chi',
  'Theta Phi Alpha',
  'Theta Rho Lambda',
  'Theta Sigma Chi',
  'Theta Tau',
  'Theta Upsilon Omega',

  'Upsilon Delta Gamma',
  'Upsilon Gamma Sigma',
  'Upsilon Phi Sigma',
  'Upsilon Sigma Delta',
  'Upsilon Sigma Phi',
  'Upsilon Sigma Sigma',

  'Xi Alpha Kappa',
  'Xi Alpha Pi',
  'Xi Beta Theta',
  'Xi Chi Rho',
  'Xi Delta Sigma',
  'Xi Delta Theta',
  'Xi Sigma Delta',
  'Xi Sigma Phi',

  'Zeta Alpha Chi',
  'Zeta Beta Sigma',
  'Zeta Beta Tau',
  'Zeta Delta Chi',
  'Zeta Epsilon Psi',
  'Zeta Kappa Chi',
  'Zeta Omega Pi',
  'Zeta Phi Beta',
  'Zeta Phi Gamma',
  'Zeta Psi',
  'Zeta Sigma Phi',
  'Zeta Tau Alpha',
  'Zeta Theta Alpha',
];


export const INDUSTRIES = [
  'Technology',
  'Finance',
  'Healthcare',
  'Consulting',
  'Law',
  'Education',
  'Marketing',
  'Real Estate',
  'Engineering',
  'Media & Entertainment',
  'Non-Profit',
  'Government',
  'Entrepreneurship',
  'Sales',
  'Human Resources',
  'Other',
];
