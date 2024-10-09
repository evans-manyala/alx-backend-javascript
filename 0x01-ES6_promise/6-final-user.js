import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const signUp = signUpUser(firstName, lastName);
    const uploadPhoto = uploadPhoto(fileName);

    return Promise.allSettled([signUpUser, uploadPhoto])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.value,
        };
      }
      return {
        status: result.status,
        value: result.reason.toString(),
      };
    }));
}
