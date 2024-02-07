import { Character } from '../models/Character.ts';
import NedImage from '../pages/CharactersList/assets/ned.jpg';
import { useState } from 'react';

const initialCharacters: Character[] = [
  Character(0, 'Ned Stark', NedImage, "King's Hand", 'Stark'),
  Character(
    1,
    'Tyrion Lannister',
    'https://images.rtl.fr/rtl/www/1348813-selon-une-theorie-pour-la-saison-tyrion-lannister-serait-un-targaryen.jpg',
    "King's Hand",
    'Lannister',
  ),
  Character(
    2,
    'Khal Drogo',
    'https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/loisirs/series/game-of-thrones-khal-drogo-de-retour-dans-la-saison-6-3005471/57043371-1-fre-FR/Game-of-Thrones-Khal-Drogo-de-retour-dans-la-saison-6.jpg',
    'Great Khal',
    'Dothraki',
  ),
  Character(
    3,
    'Arya Stark',
    'https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/04/01/Game-of-Thrones-mais-au-fait-qui-se-trouve-sur-la-liste-macabre-d-Arya-Stark.jpg?VersionId=jayhYGAAvysgwqrLReBj5gX9xymRkSeb',
    'No one',
    'Stark',
  ),
];

export const useCharacters = () => {
  const [charactersList, setCharactersList] = useState(initialCharacters);

  const addCharacter = (characterToAdd: Character) => {
    setCharactersList(
      charactersList.concat({
        ...characterToAdd,
        id: charactersList.length,
      }),
    );
  };

  return { charactersList, addCharacter };
};
