import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Announcement } from '../types/announcement';

export async function getAnnouncements(): Promise<Announcement[]> {
  const announcementsCol = collection(db, 'Announcements');
  const announcementSnapshot = await getDocs(announcementsCol);
  
  return announcementSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      date: data.date ? new Date(data.date.seconds * 1000).toLocaleDateString() : '',
      authorEmail: data.authorEmail || ''
    };
  });
}
