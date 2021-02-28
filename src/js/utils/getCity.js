import {LOCATIONIQ_API_KEY} from '../constants';

export async function getCity(lt, ln) {
	const response = await fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lt}&lon=${ln}&format=json`);

	if (response.ok) {
		return await response.json();
	} else {
		throw new Error('Ошибка HTTP: ' + response.status);
	}
}