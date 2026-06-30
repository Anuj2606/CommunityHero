import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Explicit config requested by the user, with fallback from imported json
const finalFirebaseConfig = {
  apiKey: firebaseConfig?.apiKey || "AIzaSyBHy56V8eR-wHqNquZvxCCoiIHDJyvgmPQ",
  authDomain: firebaseConfig?.authDomain || "mimetic-rig-9lll2.firebaseapp.com",
  projectId: firebaseConfig?.projectId || "mimetic-rig-9lll2",
  storageBucket: firebaseConfig?.storageBucket || "mimetic-rig-9lll2.firebasestorage.app",
  messagingSenderId: firebaseConfig?.messagingSenderId || "150360520684",
  appId: firebaseConfig?.appId || "1:150360520684:web:fbba91bc7556136eaff2c9",
};

const app = initializeApp(finalFirebaseConfig);

// If a specific firestore database ID is provided (e.g. for multi-db or custom instances in AI Studio),
// initialize getFirestore with it, otherwise default.
export const db = firebaseConfig?.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: any, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

