import { useEffect, useRef, useState } from 'react';
import { Character } from '../../models/Character.ts';
import {
  AddCharacterFormWrapper,
  FormLine,
} from './AddCharacterForm.style.tsx';
import { Button } from '../Button/Button.tsx';

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
    <AddCharacterFormWrapper>
      <FormLine>
        <span>Name</span>
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
      </FormLine>
      <FormLine>
        <span>Image URL</span>
        <input
          type="text"
          value={characterToAdd.imageUrl || ''}
          onChange={(e) =>
            setCharacterToAdd({
              ...characterToAdd,
              imageUrl: e.target.value,
            })
          }
        />
      </FormLine>
      <FormLine>
        <span>Title</span>
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
      </FormLine>
      <FormLine>
        <span>Family</span>
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
      </FormLine>
      <Button onClick={() => onAddCharacterClick()}>Add character</Button>
    </AddCharacterFormWrapper>
  );
};
