import { useEffect, useRef, useState } from 'react';
import { Character } from '../../models/Character.ts';

interface Props {
  onAddCharacter: (characterToAdd: Character) => void;
}

export const AddCharacterForm = ({ onAddCharacter }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [characterToAdd, setCharacterToAdd] = useState<Partial<Character>>({});

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const onAddCharacterClick = () => {
    onAddCharacter({
      id: 0,
      name: characterToAdd.name || '',
      imageUrl: characterToAdd.imageUrl || '',
      title: characterToAdd.title || '',
      family: characterToAdd.family || '',
    });

    setCharacterToAdd({});
  };

  return (
    <div>
      Name:
      <input
        type="text"
        value={characterToAdd.name || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            name: e.target.value,
          })
        }
        ref={nameInputRef}
      />
      <br />
      Image URL:{' '}
      <input
        type="text"
        value={characterToAdd.imageUrl || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            imageUrl: e.target.value,
          })
        }
      />{' '}
      <br />
      Title:{' '}
      <input
        type="text"
        value={characterToAdd.title || ''}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            title: e.target.value,
          })
        }
      />
      <br />
      Family:{' '}
      <input
        type="text"
        value={characterToAdd.family || ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onAddCharacterClick();
        }}
        onChange={(e) =>
          setCharacterToAdd({
            ...characterToAdd,
            family: e.target.value,
          })
        }
      />
      <br />
      <br />
      <button onClick={() => onAddCharacterClick()}>Add character</button>
    </div>
  );
};
