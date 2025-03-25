import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function getAnnouncements() {
  const announcementsRef = collection(db, 'announcements');
  const snapshot = await getDocs(announcementsRef);
  
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      date: data.date?.toDate().toISOString() || new Date().toISOString()
    };
  });
}
