export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
  family: string;
}

export const Character = (
  id: number,
  name: string,
  imageUrl: string,
  title: string,
  family: string,
): Character => ({
  id,
  name,
  imageUrl,
  title,
  family,
});

export interface APICharacter {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}

export const parseAPICharacter = (character: APICharacter): Character =>
  Character(
    character.id,
    character.fullName,
    character.imageUrl,
    character.title,
    character.family,
  );
