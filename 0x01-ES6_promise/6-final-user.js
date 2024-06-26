import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const res = [];
    values.ForEach((element) => {
      if (element.status === `fulflled`){
        res.push({ status: element.status, value: element.value });
      } else {
	res.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return res;
  });
}
