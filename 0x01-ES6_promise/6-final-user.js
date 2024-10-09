import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const handlePromise = (promise) => promise
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', error: `Error: ${error.message}` }));

  const promises = [
    handlePromise(signUpUser(firstName, lastName)),
    handlePromise(uploadPhoto(fileName)),
  ];

  const results = await Promise.all(promises);
  return results;
}
