import ClassRoom from './0-classroom';

export default function initializeRoom() {
  const c1 = new ClassRoom(19);
  const c2 = new ClassRoom(20);
  const c3 = new ClassRoom(34);
  const nList = [c1, c2,c3];
  return (nList);
}
